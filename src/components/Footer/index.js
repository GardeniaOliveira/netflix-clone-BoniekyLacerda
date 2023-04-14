import styles from './styles.module.css'


const Footer = ({ backgroundColor, children }) => {
    return (
        <footer className={styles['footer']} style={{ backgroundColor: backgroundColor }} >

            {children}

        </footer>
    )
}

export default Footer