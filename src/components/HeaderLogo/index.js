import './styles.css'
import logo from '../../images/netflix-logo.png'



const HeaderLogo = () => {
    return (
        <header>
            <div className='header-logo'>
                <a href="https://www.netflix.com/browse">
                    <img src={logo} alt="Netflix logo" />
                </a>
            </div>
        </header>
    )
}

export default HeaderLogo