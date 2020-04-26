const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgHeader: getStyle(html, "--bg-header"),
    colorText: getStyle(html, "--color-text"),
    colorHeadings: getStyle(html, "--color-headings"),
    boxShadow: getStyle(html, "--box-shadow"),
    gradientLeft: getStyle(html, "--gradient-left"),
    gradientRight: getStyle(html, "--gradient-right")
    
}

const darkMode = {
    bg: "#000",
    bgHeader: "#1a1a1a",
    colorText: "#fafafa",
    boxShadow: "rgba(212, 212, 212, 0.157)",
    colorHeadings: "#f0f0f0",
    gradientLeft: "#ff8a00",
    gradientRight: "#e52e71" 
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})