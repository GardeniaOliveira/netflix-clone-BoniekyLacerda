import styles from './styles.module.css'
import logo from '../../images/netflix-logo.png'
import avatar from '../../images/netflix-avatar.png'


const Header = ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className={styles['header--logo']}>
                <a href="https://www.netflix.com/browse">
                    <img src={logo} alt="Netflix logo" />
                </a>
            </div>

            <div className={styles['header--user']}>
                <a href="/">
                    <img src={avatar} alt="Netflix User" />
                </a>
            </div>
        </header>
    )
}

export default Header