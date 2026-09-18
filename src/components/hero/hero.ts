import './hero.scss'

export function createHero(): HTMLElement {
  const hero = document.createElement('section')
  const content = document.createElement('div')
  const title = document.createElement('h1')
  const desktopDescription = document.createElement('p')
  const mobileDescription = document.createElement('p')
  const browseButton = document.createElement('button')

  hero.className = 'hero'
  hero.setAttribute('aria-labelledby', 'hero-title')
  content.className = 'hero__content'
  title.id = 'hero-title'
  title.className = 'hero__title'
  title.textContent = 'Take a Short Break & Have Fun'
  desktopDescription.className = 'hero__description hero__description--desktop'
  desktopDescription.textContent =
    'Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.'
  mobileDescription.className = 'hero__description hero__description--mobile'
  mobileDescription.textContent =
    'Discover hundreds of curated casual mini-games right in your browser.'
  browseButton.className = 'hero__button'
  browseButton.type = 'button'
  browseButton.textContent = 'Browse Library'

  content.append(title, desktopDescription, mobileDescription, browseButton)
  hero.append(content)
  return hero
}
