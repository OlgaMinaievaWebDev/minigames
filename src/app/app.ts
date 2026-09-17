import { createHeader } from '../components/header/header'

export function createApp(): HTMLDivElement {
  const app = document.createElement('div')

  app.id = 'app'

  const header = createHeader()

  app.append(header)

  return app
}
