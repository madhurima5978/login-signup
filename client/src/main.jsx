import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GoogleOAuthProvider clientId='789457404859-dqaeptrckber37gg30b2n53h35fn05mm.apps.googleusercontent.com'>
      <App />
     </GoogleOAuthProvider>
    
  </React.StrictMode>,
)
