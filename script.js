const numbers = Array.from(document.querySelectorAll(`.number`));
const operands = Array.from(document.querySelectorAll(`.operand`));
const actions = Array.from(document.querySelectorAll(`.action`));
const displayTop = document.querySelector(`.display-top-value`);
const displayBottom = document.querySelector(`.display-bottom-value`);
const equalsBtn = document.querySelector(`.equals`);

numbers.map((number) => {
  number.addEventListener(`click`, (e) => {
    console.log(e.target.innerText);
    displayBottom.innerText += e.target.innerText;
  });
});

operands.map((operand) => {
  operand.addEventListener(`click`, (e) => {
    console.log(e.target.innerText);
    displayTop.innerText = displayBottom.innerText += ` ${e.target.innerText}`;
    displayBottom.innerText = "";
  });
});

actions.map((action) => {
  action.addEventListener(`click`, (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "AC":
        displayTop.innerText = "";
        displayBottom.innerText = "";
        break;
      case "+/-":
        console.log(displayBottom.innerText[0]);
        if (displayBottom.innerText[0] != "-") {
          displayBottom.innerText = `` - `${displayBottom.innerText}`;
        } else {
          displayBottom.innerText = displayBottom.innerText.substring(1);
        }
    }
  });
});

equalsBtn.addEventListener(`click`, (e) => {
  console.log(e.target.innerText);
  switch (displayTop.innerText[displayTop.innerText.length - 1]) {
    case "+": {
      console.log("I need to add two numbers");
      let result =
        parseInt(displayTop.innerText.slice(0, -2)) +
        parseInt(displayBottom.innerText);
      displayTop.innerText = "";
      displayBottom.innerText = result;
      break;
    }
    case "-": {
      console.log("I need to subtract two numbers");
      console.log(displayTop.innerText.slice(0, -2));
      let result =
        parseInt(displayTop.innerText.slice(0, -2)) -
        parseInt(displayBottom.innerText);
      displayTop.innerText = "";
      displayBottom.innerText = result;
      break;
    }
    case "/": {
      console.log("I need to divide two numbers");
      console.log(displayTop.innerText.slice(0, -2));
      let result =
        parseInt(displayTop.innerText.slice(0, -2)) /
        parseInt(displayBottom.innerText);
      displayTop.innerText = "";
      displayBottom.innerText = result;
      break;
    }
    case "x": {
      console.log("I need to multiply two numbers");
      console.log(displayTop.innerText.slice(0, -2));
      let result =
        parseInt(displayTop.innerText.slice(0, -2)) *
        parseInt(displayBottom.innerText);
      displayTop.innerText = "";
      displayBottom.innerText = result;
      break;
    }
  }
});

// numberBtn.map((number) => {
//     number.addEventListener("click", (e) => {
//       switch (e.target.innerText) {
//         case "RESET":
//           outcomeDisplay.innerText = "";
//           break;
//         case "DEL":
//           if (outcomeDisplay.innerText) {
//             outcomeDisplay.innerText = outcomeDisplay.innerText.slice(0, -1);
//           }
//           break;
//         case "=":
//           try {
//             outcomeDisplay.innerText = eval(outcomeDisplay.innerText);
//           } catch {
//             outcomeDisplay.innerText = "ERROR!";
//           }

//           break;
//         default:
//           outcomeDisplay.innerText += e.target.innerText;
//       }
//     });
//   });
