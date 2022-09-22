import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './src/styles/styles.scss'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '@src/providers/AuthProvider'
import { setupStore } from '@src/store/store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)
const store = setupStore() 

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <AuthProvider />
      </StrictMode>
    </BrowserRouter>
  </Provider>
)
