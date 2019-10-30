import './style.scss'

export const addNumbers = (a, b) => a + b

document.addEventListener('DOMContentLoaded', () => {
  const root = document.createElement("div")
  root.innerHTML = `<p>Hello Webpack.</p>`

  document.body.appendChild(root)
})
