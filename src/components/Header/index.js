import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import logo from '../../images/netflix-logo.png'



const Header = ({ black, username, action }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className={styles['header--logo']}>
                <Link to="/">
                    <img src={logo} alt="Netflix logo" />
                </Link>
            </div>

            <div className={styles['header-items']}>
                <div>
                    <p>{username}</p>
                </div>

                <button type='submit' onClick={action}>Sign out </button>
            </div>
        </header>
    )
}

export default Header