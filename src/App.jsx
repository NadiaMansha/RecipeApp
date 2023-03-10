import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Recipies from './pages/Recipies'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Recipie from './pages/Recipie'
import Categories from './pages/Categories'
import Ingredients from './pages/Ingredients'
import NotFound from './components/NotFound'
import Error from './components/Error'


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<Layout />} 
      
      >, {/* main route starts */}
      <Route index element={<Home />} 
      errorElement={<Error />}
      />,
      <Route path='recipies' element={<Recipies />}/>
        <Route path="recipies/:id" element={<Recipie />} />
     
      <Route path='categories' element={<Categories />} />
      <Route path='categories/:id' element={<Recipie />} />
      <Route path='ingredients' element={<Ingredients />} />
      <Route path='ingredients/:id' element={<Recipie />} />
      <Route path='*' element={<NotFound />} />
    

     {/* main route ends */}
      </Route>
    ])
  )


  return (
    <div className="App">
 
      <RouterProvider router={router} />
 

    
      
    </div>
  )
}

export default App
