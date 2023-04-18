import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'

import logo from "../../images/netflix-logo.png";
import Footer from "../../components/Footer";


const RegForm = () => {
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


    return (
        <div className={styles['container-background']}>


            <div className={styles['container']}>
                <div className={styles['header-container']}>
                    <div className={styles['header-logo']}>
                        <img src={logo} alt="Netflix logo" />
                    </div>

                    <div className={styles['header-items']}>
                        <button type='submit' >Sign In </button>
                        {/* onClick={handleSubmit(login)} */}
                    </div>
                </div>
                <form className={styles['form']}>
                    <p className={styles['step']}>STEP <span>1</span>  OF <span>3</span></p>

                    <h1>Create a password to start your membership</h1>

                    <p>Just a few more steps and you're done!</p>
                    <p>We hate paperwork, too.</p>

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
                        <label className={styles["floating-label"]} htmlFor="password">Add a password</label>
                    </div>


                    <div className={styles['form-remember']}>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleOnChange}
                        />

                        <label>Please do not email me Netflix special offers </label>
                    </div>

                    <button type='submit' onClick={handleSubmit(loginUser)}>Next</button>
                </form>

            </div >
            <Footer
                backgroundColor='#f3f3f3'

            >
                <h5> Questions? Call 800 855 855</h5>

                <div className={styles['footer-links']}>

                    <a href="https://github.com/GardeniaOliveira">FAQ</a>
                    <a href='https://github.com/GardeniaOliveira' >Help Center</a>
                    <a href="https://github.com/GardeniaOliveira">Netflix Shop</a>
                    <a href="https://github.com/GardeniaOliveira">Terms of Use</a>
                    <a href="https://github.com/GardeniaOliveira">Privacy</a>
                    <a href="https://github.com/GardeniaOliveira">Cookie Preferences</a>
                    <a href="https://github.com/GardeniaOliveira">Corporate Information</a>
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


export default RegForm