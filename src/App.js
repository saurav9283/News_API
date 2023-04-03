import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './pages/Home.js';
import Categories from './pages/Categories.js';
import FetchData from './components/FetchData.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/general" element={<FetchData cat="general"/>}/>  // data transfer outer component to innner component by using props
        <Route  path="/business" element={<FetchData cat="business"/>}/> // data transfer outer component to innner component by using props

        <Route  path="/entertainment" element={<FetchData cat="entertainment"/>}/> // data transfer outer component to innner component by using props

        <Route  path="/health" element={<FetchData cat="health"/>}/> // data transfer outer component to innner component by using props

        <Route  path="/science" element={<FetchData cat="science"/>}/> // data transfer outer component to innner component by using props
        <Route  path="/sports" element={<FetchData cat="sports"/>}/> // data transfer outer component to innner component by using props

        <Route  path="/technology" element={<FetchData cat="technology"/>}/> // data transfer outer component to innner component by using props

      </Routes>

      <Footer />

    </Router>

    </>
  )
}

export default App;
