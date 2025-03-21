import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx';
import Home from './components/heropage/Heropage.jsx'
import About from './components/about/About.jsx'
import Project from './components/projects/Project.jsx';
import ProjectDetails from './components/projects/projectdetails/ProjectDetails.jsx';
import ThemeProvider from './contextapi/ThemeProvider.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='project' element={<Project />} />
      <Route path='project/:id' element={<ProjectDetails />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
