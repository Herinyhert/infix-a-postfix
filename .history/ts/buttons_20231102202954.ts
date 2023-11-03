type Buttons = {
  value: string | number;
  className: string;
  action: (value: string) => void;
};

let operation = "";
const buttonContainer = document.getElementById("calculator-buttons");

function addValue(value: string): void {
  operation += value;
}

export const buttons: Buttons[] = [
  {
    value: "(",
    className: "button small dark",
    action: () => addValue("("),
  },
  {
    value: ")",
    className: "button small dark",
    action: () => addValue("("),
  },
  {
    value: "ans",
    className: "button small dark",
    action: () => addValue("("),
  },
  {
    value: "del",
    className: "button small dark",
    action: () => addValue("("),
  },
  {
    value: "clear",
    className: "button small dark",
    action: () => addValue("("),
  },
  {
    value: "7",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "8",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "9",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "%",
    className: "button dark",
    action: () => addValue("("),
  },
  {
    value: "√",
    className: "button dark",
    action: () => addValue("("),
  },
  {
    value: "4",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "5",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "6",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "X",
    className: "button dark",
    action: () => addValue("("),
  },
  {
    value: "/",
    className: "button dark",
    action: () => addValue("("),
  },
  {
    value: "1",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "2",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "3",
    className: "button",
    action: () => addValue("("),
  },
  {
    value: "+",
    className: "button dark",
    action: () => addValue("("),
  },
  {
    value: "-",
    className: "button dark",
    action: () => addValue("("),
  },
  {
    value: ".",
    className: "button dark",
  },
  {
    value: "0",
    className: "button",
  },
  {
    value: "^",
    className: "button dark",
  },
  {
    value: "ENTER",
    className: "button dark large",
  },
];

buttons.forEach((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.className = button.className;
  buttonElement.innerText = button.value.toString();
  buttonContainer?.appendChild(buttonElement);
});
