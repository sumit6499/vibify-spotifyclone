import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {store} from './redux/store.js'
import {Provider} from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain='dev-a7gb80jyjc71la60.us.auth0.com'
      clientId='m0bfOLDUXtr5QT3YVvLWhDyMC7y6dSGX'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
