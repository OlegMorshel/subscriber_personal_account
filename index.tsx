import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './src/styles/styles.scss'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '@src/providers/AuthProvider'
import { setupStore } from '@src/store/store'
import NotificationsProvider from '@src/providers/NotificationProvider'
import ReactQueryProvider from '@src/providers/ReactQueryProvider'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

const store = setupStore()
let persistor = persistStore(store)

root.render(
  <ReactQueryProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <NotificationsProvider>
            <AuthProvider />
          </NotificationsProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ReactQueryProvider>
)
