import bubbleShooterImage from '../../assets/images/games/bubble-shooter.jpg'
import candyCrushImage from '../../assets/images/games/candy-crush.jpg'
import mahjongImage from '../../assets/images/games/mahjong-solitaire.jpg'
import unoImage from '../../assets/images/games/uno-online.jpg'
import vacationCafeImage from '../../assets/images/games/vacation-cafe.jpg'
import './carousel.scss'

type Game = {
  image: string
  likes: string
  rating: string
  title: string
}

const games: Game[] = [
  { title: 'Candy Crush', image: candyCrushImage, likes: '8.7K', rating: '4.7' },
  {
    title: 'ISLANDERS: New Shores',
    image: unoImage,
    likes: '54.2K',
    rating: '4.9',
  },
  {
    title: 'Vacation Cafe Simulator',
    image: vacationCafeImage,
    likes: '28.7K',
    rating: '4.8',
  },
  { title: 'Winter Burrow', image: mahjongImage, likes: '32.4K', rating: '4.9' },
  { title: 'Bubble Shooter', image: bubbleShooterImage, likes: '7.5K', rating: '4.7' },
]

function createArrowButton(direction: 'previous' | 'next'): HTMLButtonElement {
  const button = document.createElement('button')

  button.className = `carousel__arrow carousel__arrow--${direction}`
  button.type = 'button'
  button.setAttribute('aria-label', `${direction === 'previous' ? 'Previous' : 'Next'} games`)
  button.textContent = direction === 'previous' ? '←' : '→'

  return button
}

function createGameCard(game: Game): HTMLLIElement {
  const item = document.createElement('li')
  const article = document.createElement('article')
  const image = document.createElement('img')
  const overlay = document.createElement('div')
  const title = document.createElement('h3')
  const stats = document.createElement('div')
  const likes = document.createElement('span')
  const rating = document.createElement('span')
  const likesIcon = document.createElement('span')
  const ratingIcon = document.createElement('span')

  item.className = 'carousel__item'
  article.className = 'carousel-card'
  image.className = 'carousel-card__image'
  image.src = game.image
  image.alt = `${game.title} game preview`
  overlay.className = 'carousel-card__overlay'
  title.className = 'carousel-card__title'
  title.textContent = game.title
  stats.className = 'carousel-card__stats'
  likes.className = 'carousel-card__stat'
  likes.setAttribute('aria-label', `${game.likes} likes`)
  likesIcon.className = 'carousel-card__stat-icon carousel-card__stat-icon--likes'
  likesIcon.setAttribute('aria-hidden', 'true')
  likesIcon.textContent = '♡'
  likes.append(likesIcon, document.createTextNode(game.likes))
  rating.className = 'carousel-card__stat'
  rating.setAttribute('aria-label', `${game.rating} out of 5 stars`)
  ratingIcon.className = 'carousel-card__stat-icon carousel-card__stat-icon--rating'
  ratingIcon.setAttribute('aria-hidden', 'true')
  ratingIcon.textContent = '☆'
  rating.append(ratingIcon, document.createTextNode(game.rating))

  stats.append(rating, likes)
  overlay.append(title, stats)
  article.append(image, overlay)
  item.append(article)

  return item
}

export function createCarousel(): HTMLElement {
  const section = document.createElement('section')
  const header = document.createElement('div')
  const headingGroup = document.createElement('div')
  const accent = document.createElement('span')
  const title = document.createElement('h2')
  const controls = document.createElement('div')
  const track = document.createElement('ul')

  section.className = 'carousel'
  section.setAttribute('aria-labelledby', 'new-games-title')
  header.className = 'carousel__header'
  headingGroup.className = 'carousel__heading-group'
  accent.className = 'carousel__accent'
  accent.setAttribute('aria-hidden', 'true')
  title.id = 'new-games-title'
  title.className = 'carousel__title'
  title.textContent = 'New Games'
  controls.className = 'carousel__controls'
  track.className = 'carousel__track'
  track.setAttribute('aria-label', 'New games')

  controls.append(createArrowButton('previous'), createArrowButton('next'))
  headingGroup.append(accent, title)
  header.append(headingGroup, controls)
  track.append(...games.map((game) => createGameCard(game)))
  section.append(header, track)

  return section
}
