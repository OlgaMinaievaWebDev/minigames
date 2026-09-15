import './styles/globals.scss'

interface AppConfig {
  rootSelector: string
  title: string
}

function renderApp(config: AppConfig): void {
  const app: HTMLDivElement | null = document.querySelector<HTMLDivElement>(config.rootSelector)

  if (app) {
    app.textContent = config.title
  }
}

const config: AppConfig = {
  rootSelector: '#app',
  title: 'MiniGames',
}

renderApp(config)
