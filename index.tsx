import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './src/styles/styles.scss'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '@src/providers/AuthProvider'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <AuthProvider />
      </StrictMode>
    </BrowserRouter>
  </Provider>
)
