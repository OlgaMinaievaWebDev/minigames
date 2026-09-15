export function createApp(): HTMLDivElement {
  const app = document.createElement('div')

  app.id = 'app'
  app.textContent = 'MiniGames'

  return app
}
