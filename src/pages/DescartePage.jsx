import React from 'react'
import BarraNavegacao from '../components/BarraNavegacao'
import InfoDescarte from '../components/InfoDescarte'
import OndeDescartar from '../components/OndeDescartar'
import PontosColeta from '../components/PontosColeta'
import Footer from '../components/Footer'

const DescartePage = () => {
  return (
    <>
        <BarraNavegacao/>
        <InfoDescarte/>
        <OndeDescartar/>
        <PontosColeta/>
        <Footer/>
    </>
  )
}

export default DescartePage