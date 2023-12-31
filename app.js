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
const copyIcon = document.querySelector(".fa-clipboard")

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

colorInput.addEventListener("input", () => {
  colorText.textContent.toUpperCase = main.style.backgroundColor = h1.style.color = colorInput.value
})

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || "NumpadEnter") {
    ortak();
  }
});

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(colorText.textContent).then(()=>{
    alert(`Renk Kodu Başarıyla Kopyalandı :
${colorText.textContent}`)
  })
})