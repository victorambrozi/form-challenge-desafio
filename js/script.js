const inputError = document.querySelector(".error")
const formInput = document.querySelectorAll("input")

const buttonElement = document.querySelector("form button")

document.querySelector("input")
    .classList.remove("error")

buttonElement.addEventListener("click", () => {
    for (input of formInput) {
        if(input.value === '') {
            input.classList.add("error")
        } else {
            // Retirar .error do elemento
        }
    }
})