import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from  '../Components/Pages/Home'
import About from '../Components/Pages/About'
import Services from '../Components/Pages/Services'
import Projects from '../Components/Pages/Projects'
import Contact from '../Components/Pages/Contact'

const Router = () => {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Services/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>

        </>
    )
}

export default Router