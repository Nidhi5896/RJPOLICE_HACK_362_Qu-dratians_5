

import './App.css'


import Layout from './component/pages/Layout'
import Home from './component/pages/Home'
import Report from './component/pages/Report'
import Contact from './component/pages/Contact'
import Blog from './component/pages/Blog'
import SignInSide from './component/pages/auth/SignInSide'
import Categories from './component/pages/Categories'
import SignUp from './component/pages/auth/SignUp'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
function App() {
 

  return (
    <>
      <BrowserRouter>
      
         <Routes>
         <Route path = "/" element = {<Layout />} >
          <Route index element={<Home/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/login" element={<SignInSide />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/SignInSide" element={<SignInSide/>}></Route>     
          


        
          </Route>
      

         </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
