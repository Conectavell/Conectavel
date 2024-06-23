import React from 'react'
import Header from '../admin/Header'
import Home from '../admin/Home'
import SideNav from '../admin/SideNav'
import Footer from '../admin/Footer'
import { UserProvider } from '../controllers/Manager';

//RENDERIZA SEU COMPONENTE NA TELA
import { Outlet } from 'react-router-dom'

const PageAdmin = () => {
  return (
    <>
    <UserProvider>
    <Header/>
    <Home/>
    <Outlet/>
    <SideNav/>
    <Footer/>
    </UserProvider>
    </>
  )
}

export default PageAdmin
