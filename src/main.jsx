import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePages from './Pages/Home.jsx'
import AboutPages from './Pages/About.jsx'
import LiturgyPages from './Pages/Liturgy.jsx'
import EventPages from './Pages/Event.jsx'

import SignupComponent from './Pages/SignUp.jsx'
import LoginPages from './Pages/Login.jsx'
import ForgotpasswordPages from './Pages/ForgotPassword.jsx'
import ResetpasswordPages from './Pages/ResetPassword.jsx'
import ProfilePages from './Pages/ProfilePages.jsx'
import GalleryPages from './Pages/Gallery.jsx'



const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePages/>
  }, 

   {
    path: "/about",
    element: <AboutPages/>
  }, 

  {
    path: "/liturgy",
    element: <LiturgyPages/>
  },

  {
    path: "/event",
    element: <EventPages/>
  },
   {
    path: "/gallery",
    element: <GalleryPages/>
  },
  
  {
    path: "/signup",
    element: <SignupComponent/>
  },

  {
    path: "/login",
    element: <LoginPages/>
  },
    {
    path: "/forgotpassword",
    element: <ForgotpasswordPages/>
  },

  {
  path: `/reset-password/:token`,  // Rute untuk reset password dengan token
    element: <ResetpasswordPages/>
  },

  {
    path: "/profile",
    element: <ProfilePages/>
  }
  
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
