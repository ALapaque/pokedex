import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import 'libs/shared/ui/src/lib/styles/index.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { pokemonApi } from '@nx-pokemon/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <StrictMode>
    <ApiProvider api={pokemonApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </StrictMode>
)
