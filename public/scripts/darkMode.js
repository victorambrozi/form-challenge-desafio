const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg-body"),
    bgForm: getStyle(html, "--color-white"),
    bgFormInfo: getStyle(html, "--color-blue"),
    bgbutton: getStyle(html, "--color-green"),
}

const darkMode = {
    bg: "#3e3c49",
    bgForm: "#333",
    bgFormInfo: "#f1dc1c",
    bgbutton: "#f1dc1c",
}


const transformKey = key =>  
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})