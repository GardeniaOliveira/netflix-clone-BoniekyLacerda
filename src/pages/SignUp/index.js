import styles from './styles.module.css'

import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Footer";


const SignUp = () => {


    return (
        <div>
            <div className={styles['container-background-img']}>
                <div className={styles['container-opacity']}></div>
                <div className={styles['container']}>
                    <HeaderLogo />

                    <section className={styles['description']}>
                        <h1>Unlimited movies, TV shows, and more.</h1>

                        <h3>Watch anywhere. Cancel anytime.</h3>

                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className={styles["form-element"]}>
                            <input type="email" />
                            <label className={styles["floating-label"]} htmlFor="password">Password</label>
                            <button>{`Get Start >`} </button>
                        </div>
                    </section>
                </div>
            </div >

            <Footer
                backgroundColor='black'
            >
                <h5> Questions? Call 800 855 855</h5>

                <div className={styles['footer-links']}>

                    <a href="https://github.com/GardeniaOliveira">FAQ</a>
                    <a href='https://github.com/GardeniaOliveira' >Help Center</a>
                    <a href="https://github.com/GardeniaOliveira"> Account</a>
                    <a href="https://github.com/GardeniaOliveira">Media Center</a>
                    <a href="https://github.com/GardeniaOliveira">Investor Relations</a>
                    <a href="https://github.com/GardeniaOliveira">Jobs</a>
                    <a href="https://github.com/GardeniaOliveira">Redeem Gift Cards</a>
                    <a href="https://github.com/GardeniaOliveira">Buy Gift Cards</a>
                    <a href="https://github.com/GardeniaOliveira">Ways to Watch</a>
                    <a href="https://github.com/GardeniaOliveira">Terms of Use</a>
                    <a href="https://github.com/GardeniaOliveira">Privacy</a>
                    <a href="https://github.com/GardeniaOliveira">Cookie Preferences</a>
                    <a href="https://github.com/GardeniaOliveira">Corporate Information</a>
                    <a href="https://github.com/GardeniaOliveira">Contact Us</a>
                    <a href="https://github.com/GardeniaOliveira">Speed Test</a>
                    <a href="https://github.com/GardeniaOliveira">Legal Guarantee</a>
                    <a href="https://github.com/GardeniaOliveira">Legal Notices</a>
                    <a href="https://github.com/GardeniaOliveira">Only on Netflix</a>
                </div>

                <div className={styles["footer-language"]}>
                    <div className="icon">
                        🌐
                    </div>
                    <select name="language" className={styles['select-language']} >
                        <option value="english">English</option>
                        {/* <option value="Portuguese">Portuguese</option> */}

                    </select>
                </div>


            </Footer>
        </div>
    )
}



export default SignUp