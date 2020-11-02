const body = document.querySelector("body")
const form = document.querySelector(".form-info form")
const checkbox = document.querySelector("input[name=theme")

removeClasses(body, "dark-body")
removeClasses(form, "dark-form")

function addClasses(element,style){
    return element.classList.add(style)
} 
function removeClasses(element,style){
    return element.classList.remove(style)
} 


checkbox.addEventListener("change", ({ target }) => {
     if (target.checked) {
        addClasses(body,"dark-body")
        addClasses(form, "dark-form")
     } else {
        removeClasses(body, "dark-body")
        removeClasses(form, "dark-form")

     }
})
