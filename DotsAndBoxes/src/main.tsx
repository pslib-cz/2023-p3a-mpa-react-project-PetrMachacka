import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import BoardStyle from "./styles/Board.module.css"
import { Provider } from './Providers/GridProvider.tsx'
import PlayerProvider from './Providers/PlayerProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider>
        <PlayerProvider>
          <App/>
        </PlayerProvider>
      </Provider>
  </React.StrictMode>,
)
