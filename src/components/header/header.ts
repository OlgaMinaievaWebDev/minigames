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

  const menuToggle = document.createElement('button')
  menuToggle.type = 'button'
  menuToggle.className = 'site-header__menu-toggle'
  menuToggle.setAttribute('aria-label', 'Open navigation menu')
  menuToggle.setAttribute('aria-expanded', 'false')
  menuToggle.setAttribute('aria-controls', 'mobile-menu')

  const menuIcon = document.createElement('span')
  menuIcon.className = 'site-header__menu-icon'
  menuIcon.setAttribute('aria-hidden', 'true')

  const menuContainer = document.createElement('div')
  menuContainer.className = 'site-header__mobile-menu'
  menuContainer.id = 'mobile-menu'
  menuContainer.setAttribute('aria-hidden', 'true')
  menuContainer.setAttribute('inert', '')

  const mobileNav = document.createElement('nav')
  mobileNav.className = 'site-header__mobile-nav'
  mobileNav.setAttribute('aria-label', 'Mobile navigation')

  const mobileNavList = document.createElement('ul')
  mobileNavList.className = 'site-header__mobile-nav-list'

  for (const label of labels) {
    const mobileNavItem = document.createElement('li')
    mobileNavItem.className = 'site-header__mobile-nav-item'

    const mobileNavLink = document.createElement('a')
    mobileNavLink.className = 'site-header__mobile-nav-link'
    mobileNavLink.href = '#home'
    mobileNavLink.textContent = label
    mobileNavLink.addEventListener('click', () => {
      setMobileMenuOpen(false)
    })

    if (label === 'Home') {
      mobileNavLink.classList.add('site-header__mobile-nav-link--active')
      mobileNavLink.setAttribute('aria-current', 'page')
    }

    mobileNavItem.append(mobileNavLink)
    mobileNavList.append(mobileNavItem)
  }

  mobileNav.append(mobileNavList)

  const mobileActions = document.createElement('div')
  mobileActions.className = 'site-header__mobile-actions'

  const mobileLogInButton = document.createElement('button')
  mobileLogInButton.type = 'button'
  mobileLogInButton.className = 'site-header__mobile-button site-header__mobile-button--login'
  mobileLogInButton.textContent = 'Log In'

  const mobileSignUpButton = document.createElement('button')
  mobileSignUpButton.type = 'button'
  mobileSignUpButton.className = 'site-header__mobile-button site-header__mobile-button--signup'
  mobileSignUpButton.textContent = 'Sign Up'

  mobileActions.append(mobileLogInButton, mobileSignUpButton)
  menuContainer.append(mobileNav, mobileActions)

  menuToggle.append(menuIcon)

  header.append(container, menuContainer)
  container.append(anchor)
  container.append(containerRight)
  containerRight.append(nav, actions)
  anchor.append(image)
  anchor.append(span)
  nav.append(ul)
  actions.append(buttonLogIn, buttonSignUp, menuToggle)

  function setMobileMenuOpen(isOpen: boolean): void {
    header.classList.toggle('site-header--menu-open', isOpen)
    document.body.classList.toggle('mobile-menu-open', isOpen)
    menuToggle.setAttribute('aria-expanded', String(isOpen))
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu')
    menuContainer.setAttribute('aria-hidden', String(!isOpen))
    menuContainer.toggleAttribute('inert', !isOpen)
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true'

    setMobileMenuOpen(isOpen)
  })

  document.addEventListener('keydown', (event) => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'

    if (isOpen && event.key === 'Escape') {
      setMobileMenuOpen(false)
      menuToggle.focus()
    }
  })

  const tabletMediaQuery = matchMedia('(max-width: 768px)')

  tabletMediaQuery.addEventListener('change', (event) => {
    if (!event.matches) {
      setMobileMenuOpen(false)
    }
  })

  return header
}
