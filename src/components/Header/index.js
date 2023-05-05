import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from './styles.module.css'
import logo from '../../images/netflix-logo.png'
import { red } from '@mui/material/colors';




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
                    <Stack direction="row" spacing={2}>
                        <Avatar sx={{ bgcolor: '#000' }}>{username.substr(0, 1).toUpperCase()}</Avatar>
                    </Stack>

                </div>

                <button type='submit' onClick={action}>Sign out </button>
            </div>
        </header>
    )
}

export default Header