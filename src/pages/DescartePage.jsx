import React from 'react'
import BarraNavegacao from '../components/BarraNavegacao'
import PontosColeta from '../components/PontosColeta'
import Footer from '../components/Footer'
import Header from '../components/DescarteHeader'

const DescartePage = () => {
  return (
    <>
        <BarraNavegacao/>
        <Header/>
        <PontosColeta/>
        <Footer/>
    </>
  )
}

export default DescartePage