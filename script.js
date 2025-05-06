const arabicNumber = document.getElementById("number");

const convertBtn = document.getElementById("convert-btn");

const output = document.getElementById("output");
const guide = [
  { value: 1000, rom: "M" },
  { value: 900, rom: "CM" },
  { value: 500, rom: "D" },
  { value: 400, rom: "CD" },
  { value: 100, rom: "C" },
  { value: 90, rom: "XC" },
  { value: 50, rom: "L" },
  { value: 40, rom: "XL" },
  { value: 10, rom: "X" },
  { value: 9, rom: "IX" },
  { value: 5, rom: "V" },
  { value: 4, rom: "IV" },
  { value: 1, rom: "I" },
];

const convert = (num) => {
  let roman = "";
  guide.forEach((obj) => {
    while (num >= obj.value) {
      num -= obj.value;
      roman += obj.rom;
    }
  });
  return roman;
};

const errorMsg = (num) => {
  const errors = [
    {
      name: "empty",
      chk: num === "",
      msg: "Please enter a valid number",
    },
    {
      name: "belowLimit",
      chk: !isNaN(num) && num <= 0,
      msg: "Please enter a number greater than or equal to 1",
    },
    {
      name: "overlimit",
      chk: !isNaN(num) && num >= 4000,
      msg: "Please enter a number less than or equal to 3999",
    },
  ];
  let error = "";
  for (let i = 0; i < errors.length; i++) {
    if (errors[i].chk) {
      error = errors[i].msg;
      break;
    }
  }
  return error;
};
const checkInput = (num) => {
  if (errorMsg(num)) {
    return errorMsg(num);
  } else {
    return convert(Math.floor(num));
  }
};
convertBtn.addEventListener("click", () => {
  output.innerText = checkInput(arabicNumber.value);
});

arabicNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    output.innerText = checkInput(arabicNumber.value);
  }
});

arabicNumber.addEventListener("change", () => {
  output.innerText = checkInput(arabicNumber.value);
});

arabicNumber.addEventListener("focus", () => {
  arabicNumber.value = "";
  output.innerText = "";
});
