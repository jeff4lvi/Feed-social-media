import styles from './Header.module.css'

import gatoLogo from '../assets/jaguar-back.svg'

export function Header (){
    return (
        <header className={styles.header}>
            <img src={gatoLogo} alt='Logo do gato'/>
        <strong>Big Cat Net</strong>
        </header>
    );
}