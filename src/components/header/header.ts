import logo from '../../assets/icons/logo.svg'
import './header.scss'

const labels = ['Home', 'Library', 'Tournaments', 'Community']

export function createHeader(): HTMLElement {
  const header = document.createElement('header')
  header.className = 'site-header'

  const container = document.createElement('div')
  container.className = 'site-header__container'

  const anchor = document.createElement('a')
  anchor.className = 'site-header__brand'
  anchor.href = '#home'

  const image = document.createElement('img')
  image.src = logo
  image.width = 32
  image.height = 32
  image.alt = ''

  const span = document.createElement('span')
  span.className = 'site-header__brand-text'
  span.textContent = 'MiniGames'

  const containerRight = document.createElement('div')
  containerRight.className = 'site-header__controls'

  const nav = document.createElement('nav')
  nav.className = 'site-header__nav'
  nav.setAttribute('aria-label', 'Primary navigation')

  const ul = document.createElement('ul')
  ul.className = 'site-header__nav-list'

  for (const label of labels) {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.className = 'site-header__nav-link'

    if (label === 'Home') {
      link.classList.add('site-header__nav-link--active')
      link.setAttribute('aria-current', 'page')
    }

    li.className = 'site-header__nav-item'
    link.href = '#home'
    link.textContent = label

    li.append(link)
    ul.append(li)
  }

  const actions = document.createElement('div')
  actions.className = 'site-header__actions'

  const buttonLogIn = document.createElement('button')
  buttonLogIn.type = 'button'
  buttonLogIn.className = 'site-header__button site-header__button--login'
  buttonLogIn.textContent = 'Log In'

  const buttonSignUp = document.createElement('button')
  buttonSignUp.type = 'button'
  buttonSignUp.className = 'site-header__button site-header__button--signup'
  buttonSignUp.textContent = 'Sign Up'

  header.append(container)
  container.append(anchor)
  container.append(containerRight)
  containerRight.append(nav, actions)
  anchor.append(image)
  anchor.append(span)
  nav.append(ul)
  actions.append(buttonLogIn, buttonSignUp)

  return header
}
