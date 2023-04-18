import styles from './styles.module.css'


const Header = ({ logo, text, action }) => {
    return (
        <header className={styles['header-container']}>

            <div className={styles['header-logo']}>
                <img src={logo} alt="Netflix logo" />
            </div>

            <div className={styles['header-items']}>
                <button type='submit' onClick={action}>{text} </button>

            </div>

        </header>
    )
}

export default Header