import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUS from './components/ContactUS/ContactUS.jsx'
import User from './components/User/User.jsx'
import RouteLayout from './Route.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contactUS" element={<ContactUS/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route path="github" element={<GitHub/>} loader={githubInfoLoader} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
