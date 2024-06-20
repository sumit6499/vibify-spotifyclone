import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {store} from './redux/store.js'
import {Provider} from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { Toaster } from 'sonner'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster position='top-center' />
    </BrowserRouter>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)