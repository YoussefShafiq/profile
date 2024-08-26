import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function () {
    return <>
        <Navbar />
        <div className="md:pt-[70px] pt-[40px]">
            <Outlet></Outlet>
        </div>
        <Footer />
    </>
}
