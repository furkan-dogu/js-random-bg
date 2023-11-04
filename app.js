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
const h1 = document.querySelector(".hero")

function ortak () {
    h1.style.color = colorInput.value = main.style.backgroundColor = colorText.textContent = RandomColor()
}

document.querySelector(".btn-click").addEventListener("click", () => {
    ortak()
})

document.querySelector(".btn-over").addEventListener("mouseover", () => {
    ortak()
})

window.addEventListener("load", () => {
    ortak()
})