import { createHeader } from '../components/header/header'
import { createHero } from '../components/hero/hero'

export function createApp(): HTMLDivElement {
  const app = document.createElement('div')

  app.id = 'app'

  const header = createHeader()
  const hero = createHero()

  app.append(header, hero)

  return app
}
