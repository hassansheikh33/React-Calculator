import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");

  function updateInputValue(val) {
    const lastItem = input[input.trim().length - 1];
    let str = val.trim();
    if (
      (str === "x" ||
        str === "/" ||
        str === "+" ||
        str === "-" ||
        str === "%" ||
        str === "" ||
        str === ",") &&
      input === "0"
    ) {
      return;
    }
    if (input === "0" && val === "0") {
      return;
    }

    if (
      (lastItem === "x" ||
        lastItem === "/" ||
        lastItem === "+" ||
        lastItem === "-" ||
        lastItem === "" ||
        lastItem === "%" ||
        lastItem === ",") &&
      (str === "x" ||
        str === "/" ||
        str === "+" ||
        str === "-" ||
        str === "" ||
        str === "%" ||
        str === ",")
    ) {
      return;
    } else if (input === "0" && str !== "") {
      setInput(val);
      return;
    }
    setInput((state) => (state += val));
  }

  function calculateResultHandler() {
    let inputArray = input.split(" ").filter((char) => char !== "");
    const tempArr = [];
    inputArray.forEach((item) => {
      if (["/", "+", ",", "-", "x"].includes(item)) {
        tempArr.push(item);
      } else {
        const number = parseInt(item);
        if (!isNaN(number)) {
          tempArr.push(number);
        }
      }
    });
    let result = tempArr[0];
    for (let item = 1; item < tempArr.length; item++) {
      switch (tempArr[item]) {
        case "+":
          result += tempArr[item + 1];
          break;
        case "-":
          result -= tempArr[item + 1];
          break;
        case "x":
          result *= tempArr[item + 1];
          break;
        case "/":
          result /= tempArr[item + 1];
          break;
        case "%":
          result %= tempArr[item + 1];
      }
    }
    console.log(result);
    setInput(`${result}`);
  }

  function resetHandler() {
    setInput("0");
  }

  return (
    <div className="container">
      <h1
        className="input"
        onClick={() => {
          console.log("input ", input, "inputArr ", input.split(" "));
        }}
      >
        {input}
      </h1>
      <div className="buttons">
        <button className="btn someBtn" onClick={resetHandler}>
          AC
        </button>
        <button className="btn someBtn" onClick={() => updateInputValue(" % ")}>
          %
        </button>
        <button
          className="btn someBtn"
          onClick={() => updateInputValue("change")}
        >
          +/-
        </button>
        <button
          className="btn operatorBtn"
          onClick={() => updateInputValue(" / ")}
        >
          ÷
        </button>
        <button className="btn" onClick={() => updateInputValue("7")}>
          7
        </button>
        <button className="btn" onClick={() => updateInputValue("8")}>
          8
        </button>
        <button className="btn" onClick={() => updateInputValue("9")}>
          9
        </button>
        <button
          className="btn operatorBtn"
          onClick={() => updateInputValue(" x ")}
        >
          x
        </button>
        <button className="btn" onClick={() => updateInputValue("4")}>
          4
        </button>
        <button className="btn" onClick={() => updateInputValue("5")}>
          5
        </button>
        <button className="btn" onClick={() => updateInputValue("6")}>
          6
        </button>
        <button
          className="btn operatorBtn"
          onClick={() => updateInputValue(" - ")}
        >
          -
        </button>
        <button className="btn" onClick={() => updateInputValue("1")}>
          1
        </button>
        <button className="btn" onClick={() => updateInputValue("2")}>
          2
        </button>
        <button className="btn" onClick={() => updateInputValue("3")}>
          3
        </button>
        <button
          className="btn operatorBtn"
          onClick={() => updateInputValue(" + ")}
        >
          +
        </button>
        <button className="btn zeroBtn" onClick={() => updateInputValue("0")}>
          0
        </button>
        <button className="btn" onClick={() => updateInputValue(",")}>
          ,
        </button>
        <button className="btn operatorBtn" onClick={calculateResultHandler}>
          =
        </button>
      </div>
    </div>
  );
}

// function App() {
//   const [input, setInput] = useState("0");
//   const [value, setValue] = useState(0);

//   function updateInputValue(val) {
//     let str = val.trim();
//     const lastChar = input[input.length - 1];

//     // Prevent operators at the start
//     if (
//       (str === "x" ||
//         str === "/" ||
//         str === "+" ||
//         str === "-" ||
//         str === "%" ||
//         str === ",") &&
//       input === "0"
//     ) {
//       console.log("First item cannot be an operator");
//       return;
//     }

//     // Prevent multiple operators in a row
//     if (
//       (lastChar === "x" ||
//         lastChar === "/" ||
//         lastChar === "+" ||
//         lastChar === "-" ||
//         lastChar === "%" ||
//         lastChar === ",") &&
//       (str === "x" ||
//         str === "/" ||
//         str === "+" ||
//         str === "-" ||
//         str === "%" ||
//         str === ",")
//     ) {
//       console.log("Invalid input");
//       return;
//     }

//     if (input === "0" && str !== "0") {
//       setInput(val);
//     } else {
//       setInput((state) => (state += val));
//     }
//   }

//   function calculateResultHandler() {
//     let inputArray = input.split(" ").filter((item) => item.trim() !== "");

//     // Temporary array to hold numeric values and operators
//     let tempArray = [];
//     inputArray.forEach((item, index) => {
//       if (["+", "-", "x", "/", "%"].includes(item)) {
//         tempArray.push(item);
//       } else {
//         let number = parseFloat(item);
//         if (!isNaN(number)) {
//           tempArray.push(number);
//         }
//       }
//     });

//     let result = tempArray[0];
//     for (let i = 1; i < tempArray.length; i += 2) {
//       const operator = tempArray[i];
//       const nextNumber = tempArray[i + 1];

//       switch (operator) {
//         case "+":
//           result += nextNumber;
//           break;
//         case "-":
//           result -= nextNumber;
//           break;
//         case "x":
//           result *= nextNumber;
//           break;
//         case "/":
//           result /= nextNumber;
//           break;
//         case "%":
//           result %= nextNumber;
//           break;
//         default:
//           break;
//       }
//     }

//     setValue(result);
//     setInput(`${result}`);
//   }

//   function resetHandler() {
//     console.log("Reset calculator");
//     setInput("0");
//     setValue(0);
//   }

//   return (
//     <div className="container">
//       <h1
//         className="input"
//         onClick={() => {
//           console.log(
//             "input ",
//             input,
//             "inputArr ",
//             input.split(" "),
//             " value, ",
//             value
//           );
//         }}
//       >
//         {input}
//       </h1>
//       <div className="buttons">
//         <button className="btn someBtn" onClick={resetHandler}>
//           AC
//         </button>
//         <button className="btn someBtn" onClick={() => updateInputValue(" % ")}>
//           %
//         </button>
//         <button
//           className="btn someBtn"
//           onClick={() => updateInputValue("change")}
//         >
//           +/-
//         </button>
//         <button
//           className="btn operatorBtn"
//           onClick={() => updateInputValue(" / ")}
//         >
//           ÷
//         </button>
//         <button className="btn" onClick={() => updateInputValue("7")}>
//           7
//         </button>
//         <button className="btn" onClick={() => updateInputValue("8")}>
//           8
//         </button>
//         <button className="btn" onClick={() => updateInputValue("9")}>
//           9
//         </button>
//         <button
//           className="btn operatorBtn"
//           onClick={() => updateInputValue(" x ")}
//         >
//           x
//         </button>
//         <button className="btn" onClick={() => updateInputValue("4")}>
//           4
//         </button>
//         <button className="btn" onClick={() => updateInputValue("5")}>
//           5
//         </button>
//         <button className="btn" onClick={() => updateInputValue("6")}>
//           6
//         </button>
//         <button
//           className="btn operatorBtn"
//           onClick={() => updateInputValue(" - ")}
//         >
//           -
//         </button>
//         <button className="btn" onClick={() => updateInputValue("1")}>
//           1
//         </button>
//         <button className="btn" onClick={() => updateInputValue("2")}>
//           2
//         </button>
//         <button className="btn" onClick={() => updateInputValue("3")}>
//           3
//         </button>
//         <button
//           className="btn operatorBtn"
//           onClick={() => updateInputValue(" + ")}
//         >
//           +
//         </button>
//         <button className="btn zeroBtn" onClick={() => updateInputValue("0")}>
//           0
//         </button>
//         <button className="btn" onClick={() => updateInputValue(",")}>
//           ,
//         </button>
//         <button className="btn operatorBtn" onClick={calculateResultHandler}>
//           =
//         </button>
//       </div>
//     </div>
//   );
// }

export default App;
