import styles from './styles.module.css'


const Footer = ({ children }) => {
    return (
        <footer className={styles['footer']}>
            {children}
        </footer>
    )
}

export default Footer