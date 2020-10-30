const inputError = document.querySelector(".error")
const formInput = document.querySelectorAll("input")

const buttonElement = document.querySelector("form button")

function validationError() {
    for (input of formInput) {
        if(input.value === '') {
            input.classList.add("error")
        } else {
            input.classList.remove("error")
        }
    }
}
document.querySelector("input")
    .classList.remove("error")

buttonElement.addEventListener("click", () => {
   validationError()
})

const emailInput = document.querySelector("input[type=email")