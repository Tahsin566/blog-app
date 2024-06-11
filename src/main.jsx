import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'
// import { store } from './redux/store.js'
// import { Provider } from 'react-redux'
import {Themeprovider} from './context/theme.jsx'
import { Authprovider } from './context/auth.jsx'

document.title = "Authentication app"



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <Provider store={store}>
  <BrowserRouter><Authprovider><Themeprovider>
    <App />
  </Themeprovider></Authprovider></BrowserRouter>
  // </Provider>
  // </React.StrictMode>,
)
