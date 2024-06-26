import React from 'react'
import BarraNavegacao from '../components/BarraNavegacao'
import Footer from '../components/Footer'
import Assinaturas from '../components/Assinaturas'
import ServicosHeader from '../components/ServicosHeader'

const ServicosPage = () => {
    return (
        <>
            <BarraNavegacao cor="azul" />
            <ServicosHeader />
            <Assinaturas />
            <Footer cor="azul" />
        </>
    )
}

export default ServicosPage