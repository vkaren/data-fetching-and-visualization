const colors = [
  "#FFC313",
  "#FF9813",
  "#FB1223",
  "#E01093",
  "#6621D2",
  "#2B37D4",
  "#198DCC",
  "#10D66C",
  "#45EA11",
  "#BBF812",
];
let i = 0;
function getColor() {
  if (i > colors.length - 1) {
    i = 0;
  }
  let currentColor = colors[i];
  i++;
  return currentColor;
}
export default getColor;
