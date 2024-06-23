import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [profissional, setProfissional] = useState(0)
  const [admin, setAdmin] = useState(0)
  const [usuariosTotal, setUsuariosTotal] = useState(0)
  const [clientes, setClientes] = useState(0);


  axios.get("http://localhost:8080/API/contarUsuarios").then(function (response) {
    setUsuariosTotal(response.data)
  }).catch(function (error) {
    console.log(error);
  })
  
  axios.get(`http://localhost:8080/API/contarUsuarioFiltrado/${2}`).then(function (response){
    setProfissional((response.data) ? response.data : 0)
  }).catch(function (error) {
    console.log(error);
  })

  axios.get(`http://localhost:8080/API/contarUsuarioFiltrado/${1}`).then(function (response){
    setClientes((response.data) ? response.data : 0)
  }).catch(function (error) {
    console.log(error);
  })

  axios.get(`http://localhost:8080/API/contarUsuarioFiltrado/${3}`).then(function (response){
    setAdmin((response.data) ? response.data : 0)
  }).catch(function (error) {
    console.log(error);
  })


  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Painel de Controle</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Usuarios</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div >{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{usuariosTotal}</h3>
                    <p>Usuarios</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users" />
                  </div>
                  <Link to="/Conectavel/PageAdmin/tbusuarios" className="small-box-footer">Administrar <i className="fas fa-arrow-circle-right" /></Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{clientes}</h3>
                    <p>Clientes</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users" />
                  </div>
                  <a href="#" className="small-box-footer">Administrar <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{profissional}</h3>
                    <p>Profissionais</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users" />
                  </div>
                  <a href="#" className="small-box-footer">Administrar <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>{admin}</h3>
                    <p>Administradores</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users" />
                  </div>
                  <a href="#" className="small-box-footer">Administrar <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}

    </div>
  )
}

export default Home
