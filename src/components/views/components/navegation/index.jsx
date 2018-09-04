import React from 'react'
import './styles.css'

const Navigation = () => {
  return(
    <div className="Navigation-Container">
      <div className="Navigation-Image">
        <img src="" alt="Logo EXPOSER"/>
      </div>
      <div className="Navigation-Options">
        <button>Registrate</button>
        <button>Iniciar Sesión</button>
        <a href="#">¿Necesitas Ayuda?</a>
      </div>
    </div>
  )
}

export default Navigation