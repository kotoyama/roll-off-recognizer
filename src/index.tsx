import { createRoot } from 'react-dom/client'

import '~/shared/ui/index.css'

import { App } from './app'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

root.render(<App />)
