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

export default App;
