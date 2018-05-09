import './polyfills'
import './style.scss'

export const addNumbers = (a, b) => a + b

const root = document.createElement("div")
root.innerHTML = `<p>Hello Webpack.</p>`
document.body.appendChild(root)
