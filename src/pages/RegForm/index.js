import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'

import logo from "../../images/netflix-logo.png";
import Header from './components/RegFormHeader';
import Footer from './components/RegFormFooter';


const RegForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const createAccount = data => {
        console.log(data)
        if (data.username && data.password) {
            navigate("/signUp/RegForm2");
        }

    };
    const login = () => {

        navigate("/");

    };

    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className={styles['container-background']}>
            <Header
                logo={logo}
                text='Sign In'
                action={login}

            />

            <div className={styles['container']}>

                <form className={styles['form']}>
                    <p className={styles['step']}>STEP <span>1</span>  OF <span>2</span></p>

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

                    <button type='submit' onClick={handleSubmit(createAccount)}>Next</button>
                </form>

            </div >

            <Footer />
        </div >
    )
}


export default RegForm