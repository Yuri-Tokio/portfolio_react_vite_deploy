import React from 'react'
import AiFillPhone from "react-icons/ai"

const MainMenu = () => {
    return (
        <section id="menu">
            <div className="info-grid">
                <div className="info-menu">
                    <AiFillPhone id="phone-icon" />
                    <h3>Sobre</h3>
                    <h3>Projetos</h3>
                    <h3>Contato</h3>
                </div>
            </div>
        </section>
    )
}

export default MainMenu