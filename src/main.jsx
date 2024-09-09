import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Experience from './Pages/Experience/Experience.jsx';
import Skill from './Pages/SkillsPage/SkillPage.jsx';
import Project from './Pages/Project/ProjectPage.jsx';
import Resume from './Pages/Resume/Resume.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='experience' element={<Experience/>}/>
      <Route path='skill' element={<Skill/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='resume' element={<Resume/>}/>
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)