const htmlEl = document.querySelector('html')
const btnChangeTheme = document.querySelector('#change-theme-button')

btnChangeTheme.addEventListener('click', () => {
  htmlEl.classList.toggle('dark-mode')

  if (btnChangeTheme.value == 'Dark') {
    btnChangeTheme.innerText = 'Light'
    btnChangeTheme.value = 'Light'
  } else {
    btnChangeTheme.innerText = 'Dark'
    btnChangeTheme.value = 'Dark'
  }
})

function showText(element) {
  const pEl = element.previousElementSibling
  const heightIsAuto = pEl.classList.contains('open')

  if (heightIsAuto) {
    pEl.classList.remove('open')
    element.innerText = 'ver mais'
  } else {
    pEl.classList.add('open')
    element.innerText = 'ver menos'
  }
}
