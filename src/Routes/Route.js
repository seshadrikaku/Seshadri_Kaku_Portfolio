import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Services from '../Components/Services'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

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