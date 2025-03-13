import React from 'react';
import navbar from './navbar.module.css'

export function Navbar() {
    return(
        <div className={navbar.navbar}>
            <img src="./public/images/trekkr-logo.jpg" alt="trekkr-logo" className={navbar.logo} />
            <ul className={navbar.list}>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Perfil</li>
            </ul>

            <div className={navbar.seach}>
                <input className={navbar.inputseach} type="text" placeholder='Procurar' />
                <img className={navbar.seachicon} src="./public/images/pesquisar.jpg" alt="" />
            </div>

            <img src="./public/images/trekkr-logo.jpg" alt="profile" className={navbar.profile} />
        </div>
    )
}
