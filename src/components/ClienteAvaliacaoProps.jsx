import React from 'react'


export default function ClienteAvaliacaoProps(props) {


    return (

        <>

                    <div className='contatos'>
                    <img src={props.imgContato}  className='fotoContato' alt='' />
                        <div className='infoContato'>
                        <p className='nomeContato'>{props.nomeContato}</p>
                        <p className='comentarioContato'>{props.comentarioContato}</p>
                        </div>
                    </div>

        </>
    )
}