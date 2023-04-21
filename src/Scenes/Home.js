import React from 'react'
import AppNavbar from '../Components/Navbar/AppNavbar'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Works from '../Components/Works/Works'
function Home() {
  return (
    <div>
        <div><AppNavbar/></div>
        <div><Banner/></div>
        <div><Works/></div>
        <div><Footer/></div>

    </div>
  )
}

export default Home