import React from 'react'
import './styles.css'

const Navigation = () => {
  return (
    <div className='Navigation-Container'>
      <div className='Navigation-Image'>
        <a href=''>
          <img src='' alt='Logo EXPOSER' />
        </a>
      </div>
      <div className='Navigation-Options'>
        <button className='Navigation-button'>Registrate</button>
        <button className='Navigation-button'>Iniciar Sesión</button>
        <a href='#'>¿Necesitas Ayuda?</a>
      </div>
    </div>
  )
}

export default Navigation
