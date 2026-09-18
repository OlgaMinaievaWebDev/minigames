import { createHeader } from '../components/header/header'
import { createHero } from '../components/hero/hero'
import { createCarousel } from '../components/carousel/carousel'

export function createApp(): HTMLDivElement {
  const app = document.createElement('div')

  app.id = 'app'

  const header = createHeader()
  const hero = createHero()
  const carousel = createCarousel()

  app.append(header, hero, carousel)

  return app
}
