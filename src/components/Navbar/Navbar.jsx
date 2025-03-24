import React from 'react';
import styles from './navbar.module.css';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src="/images/trekkr-logo.jpg" alt="Trekkr Logo" className={styles.logo} />
            <h1>TREKKR</h1>
            
            <div className={styles.search}>
                <input className={styles.inputSearch} type="text" placeholder="Procurar" />
                <img className={styles.searchIcon} src="./public/images/pesquisar.jpg" alt="Ícone de pesquisa" />
            </div>

            <img src="/images/trekkr-logo.jpg" alt="Profile" className={styles.profile} />
        </div>
    );
}
