import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home';
import About from './pages/About';
import { Routes,Route, createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom';
import Products from './pages/Products';
import Contact from './pages/Contact';
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import JobsLayout from './layout/JobsLayout';
import Jobs, { jobsLoader } from './pages/Jobs';
import JobDetails, { jobDetailsLoader } from './components/JobDetails';
import NoJob from './components/NoJob';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='products' element={<Products />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />}></Route>
          <Route path='form' element={<ContactForm />}></Route>
        </Route>
        <Route path='jobs' element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobsLoader}/>
          <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader} errorElement={<NoJob/>}/>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Route>
    )
  ) 

  return (
    <RouterProvider router={router}/>
  )
}

export default App