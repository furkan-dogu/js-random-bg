function RandomColor() {
  let items = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += items[Math.floor(Math.random() * 16)];
  }
  return color;
}

const main = document.querySelector(".bgDiv")
const colorInput = document.getElementById("colorInput")
const colorText = document.getElementById("colorText")

document.getElementById("ColorButton").addEventListener("click", () => {
    colorInput.value = main.style.backgroundColor = colorText.textContent = RandomColor()
})

const mouseOver = document.getElementById("mouseover")

document.getElementById("mouseover").addEventListener("mouseover", () => {
    colorInput.value = main.style.backgroundColor = colorText.textContent = RandomColor()
})