import { useState } from 'react';
import styles from './styles.module.css'
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Footer";


const SignIn = () => {

    const [info, setInfo] = useState(false);
    const handleShowInfo = (info) => {
        setInfo(true);

    };

    return (
        <div className={styles['container-background-img']}>
            <div className={styles['container-background-opacity']}></div>

            <div className={styles['container']}>
                <HeaderLogo />
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone number' className={styles['input--email']} />
                    <input type="password" placeholder='Password' className={styles['input--password']} />
                    <button>Sign In</button>

                    <div className={styles['form-remember-help']}>
                        <div className={styles['form-remember']}>
                            <input type="checkbox" checked />
                            <label>Remember me </label>
                        </div>

                        <div className={styles['form-help']}>
                            <a href='https://www.netflix.com/pt-en/login'>Need help?</a>
                        </div>

                    </div>

                    <div className={styles['form-info']}>
                        <h4>New to Netflix? <a href='https://www.netflix.com/pt-en/login'>Sign up now.</a> </h4>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className={info ? `${styles['form-info-learn-more-hidden']}` : `${styles['form-info-learn-more']} `} onClick={handleShowInfo}> Learn more.</span></p>

                        <p className={info ? styles['form-info-visible'] : styles['form-info-hidden']} >
                            The information collected by Google reCAPTCHA is subject to the Google  <a href='https://policies.google.com/privacy'>Privacy Policy</a>  and <a href='https://policies.google.com/terms'> Terms of Service</a> , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                        </p>
                    </div>
                </form>

            </div >
            <Footer>
                <h5> Questions? Call 800 855 855</h5>

                <div className={styles['footer-links']}>
                    <a href="https://help.netflix.com/en/node/412">FAQ</a>
                    <a href="https://help.netflix.com/en/">Help Center</a>
                    <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                    <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                    <a href="https://www.netflix.com/pt-en/login#">Cookie Preferences</a>
                    <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
                </div>

                <div className={styles["footer-language"]}>
                    <div className="icon">
                        🌐
                    </div>
                    <select name="language" className={styles['select-language']} >
                        <option value="english">English</option>
                        <option value="Portuguese">Portuguese</option>

                    </select>
                </div>


            </Footer>

        </div >
    )
}


export default SignIn