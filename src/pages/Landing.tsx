import React from 'react'
import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg' // Importando imagens
import { FiArrowRight } from 'react-icons/fi' // Importando ícones
import { Link } from 'react-router-dom'


function landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Logotipo Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Barra Bonita</strong>
                    <span>São Paulo</span>
                </div>
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
                </Link>
            </div>
        </div>
    )
}

export default landing;