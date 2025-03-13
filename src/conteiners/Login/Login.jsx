import React from 'react';
import styles from './styles.module.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export function Login() {
    return(
       <form className={styles.backgrounds} action=''>
         <div className={styles.wrapper}>
            <h1 className={styles.h1login}>Login</h1>
            <div className={styles.inputbox}>
                <input className={styles.inputboxinput} type='email' placeholder='Digite seu email' required />
                <FaUser className={styles.icon} />
            </div>

            <div className={styles.inputbox}>
                <input className={styles.inputboxinput} type="password" placeholder='Digite sua senha' required />
                <FaLock className={styles.icon} />
            </div>

            <div className={styles.remember}>
                <label className={styles.labelremember} > <input className={styles.inputremember} type='checkbox' />Lembre de mim </label>
                <a className={styles.a} href='#'>Esqueceu a senha?</a>
            </div>

            
        <button type='submit'>Login</button>

        <div className={styles.registerlink}>
            <p>Não possui uma conta? <a href='/'>Registre-se</a></p>
        </div>

        </div>

       </form>
    )
}