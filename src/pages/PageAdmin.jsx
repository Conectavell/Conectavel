import React from 'react'
import Header from '../admin/Header'
import Home from '../admin/Home'
import SideNav from '../admin/SideNav'
import Footer from '../admin/Footer'

//RENDERIZA SEU COMPONENTE NA TELA
import { Outlet } from 'react-router-dom'

const PageAdmin = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Outlet/>
    <SideNav/>
    <Footer/>
    </>
  )
}

export default PageAdmin
