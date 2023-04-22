import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";


const Header = ({ logo, text, action }) => {
    const navigate = useNavigate();

    const GoSignUp = () => {
        navigate('/signUp')
    }
    return (
        <header className={styles['header-container']}>

            <div className={styles['header-logo']}>
                <img src={logo} alt="Netflix logo" onClick={GoSignUp} />
            </div>

            <div className={styles['header-items']}>
                <button type='submit' onClick={action}>{text} </button>

            </div>

        </header>
    )
}

export default Header