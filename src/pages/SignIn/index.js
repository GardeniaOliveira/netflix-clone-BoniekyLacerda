import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Footer";
import Credits from '../../components/Credits';
import LanguageIcon from '@mui/icons-material/Language';


const SignIn = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const loginUser = data => {
        console.log(data)
        if (data.username && data.password) {
            navigate("/movies");
        }

    };
    const createAccount = () => {

        navigate("/signUp");

    };

    const [isChecked, setIsChecked] = useState(true);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const [info, setInfo] = useState(false);
    const handleShowInfo = (info) => {
        setInfo(true);

    };


    return (
        <div className={styles['container-background-img']}>
            <div className={styles['container-background-opacity']}></div>

            <div className={styles['container']}>
                <HeaderLogo />
                <form className={styles['form']}>
                    <h1>Sign In</h1>

                    <div className={styles["form-element"]}>
                        <input
                            type="text"
                            {...register("username", { required: true })}
                            id='username'
                        />
                        {errors.username && <span className={styles["inputError"]}>Please enter a valid email or phone number.</span>}
                        <label className={styles["floating-label"]} htmlFor="username">Email or Phone Number</label>
                    </div>

                    <div className={styles["form-element"]}>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            id='password'

                        />
                        {errors.password && <span className={styles["inputError"]}>Your password must contain between 4 and 60 characters.</span>}
                        <label className={styles["floating-label"]} htmlFor="password">Password</label>
                    </div>

                    <button type='submit' onClick={handleSubmit(loginUser)}>Sign In</button>


                    <div className={styles['form-remember-help']}>
                        <div className={styles['form-remember']}>
                            <input
                                type="checkbox"
                                checked={isChecked}

                                onChange={handleOnChange}
                            />

                            <label>Remember me </label>
                        </div>


                        <div className={styles['form-help']}>
                            <a href='https://www.netflix.com/pt-en/login'>Need help?</a>
                        </div>

                    </div>

                    <div className={styles['form-info']}>
                        <h4>New to Netflix?
                            <button onClick={createAccount} >Sign up now.
                            </button>
                        </h4>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className={info ? `${styles['form-info-learn-more-hidden']}` : `${styles['form-info-learn-more']} `} onClick={handleShowInfo}> Learn more.</span></p>

                        <p className={info ? styles['form-info-visible'] : styles['form-info-hidden']} >
                            The information collected by Google reCAPTCHA is subject to the Google  <a href='https://policies.google.com/privacy'>Privacy Policy</a>  and <a href='https://policies.google.com/terms'> Terms of Service</a> , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                        </p>
                    </div>
                </form>

            </div >
            <Footer
                backgroundColor='rgba(0, 0, 0, 0.75)'

            >
                <h5> Questions? Call 800 855 855</h5>

                <div className={styles['footer-links']}>
                    {/* <a href="https://help.netflix.com/en/node/412">FAQ</a>
                    <a href="https://help.netflix.com/en/">Help Center</a>
                    <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                    <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                    <a href="https://www.netflix.com/pt-en/login#">Cookie Preferences</a>
                    <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a> */}

                    <a href="https://github.com/GardeniaOliveira">FAQ</a>
                    <a href='https://github.com/GardeniaOliveira' >Help Center</a>
                    <a href="https://github.com/GardeniaOliveira">Terms of Use</a>
                    <a href="https://github.com/GardeniaOliveira">Privacy</a>
                    <a href="https://github.com/GardeniaOliveira">Cookie Preferences</a>
                    <a href="https://github.com/GardeniaOliveira">Corporate Information</a>
                </div>

                <div className={styles["footer-language"]}>
                    <div className="icon">
                        <LanguageIcon />
                    </div>
                    <select name="language" className={styles['select-language']} >
                        <option value="english">English</option>
                        <option value="Portuguese">Portuguese</option>

                    </select>
                </div>
                <Credits />

            </Footer>

        </div >
    )
}


export default SignIn