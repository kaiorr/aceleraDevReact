const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorLeft: getStyle(html, "--color-left"),
    colorRight: getStyle(html, "--color-right"),
    colorHeadings: getStyle(html, "--color-headings"),
    gradientLeft: getStyle(html, "--gradient-left"),
    gradientRight: getStyle(html, "--gradient-right")
}

const darkMode = {
    bg: "#404040",
    colorLeft: "#5c5c5c",
    colorRight: "#242424",
    colorHeadings: "#919191",
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