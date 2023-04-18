
import { useNavigate } from "react-router-dom";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoneIcon from '@mui/icons-material/Done';
import styles from './styles.module.css'
import logo from "../../../images/netflix-logo.png"
import Header from '../components/RegFormHeader';
import Footer from '../components/RegFormFooter';


const RegForm2 = () => {
    const navigate = useNavigate();


    const createAccount = () => {

        navigate("/signUp");

    };




    return (
        <div className={styles['container-background']}>
            <Header
                logo={logo}
                text='Sign In'

            />

            <div className={styles['container']}>

                <form className={styles['form']}>
                    <CheckCircleOutlineIcon className={styles['circle-icon']} sx={{ fontSize: 60 }} />
                    <p className={styles['step']}>STEP <span>2</span>  OF <span>3</span></p>

                    <h1>Choose your plan.</h1>
                    <div>
                        <DoneIcon sx={{ color: '#e50914', fontSize: 26 }} />
                        <p>No commitments, cancel anytime.</p>
                    </div>
                    <div>
                        <DoneIcon sx={{ color: '#e50914', fontSize: 26 }} />
                        <p>Everything on Netflix for one low price.</p>
                    </div>
                    <div>
                        <DoneIcon sx={{ color: '#e50914', fontSize: 26 }} />
                        <p>Unlimited viewing on all your devices.</p>
                    </div>



                    <button type='submit' onClick={(createAccount)}>Next</button>
                </form>

            </div >

            <Footer />
        </div >
    )
}


export default RegForm2