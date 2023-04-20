import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import styles from './styles.module.css'
import { auth } from '../../firebase/firebaseConfig';
import UserContext from '../../contexts/userContext';
import logo from "../../images/netflix-logo.png";
import Header from './components/RegFormHeader';
import Footer from './components/RegFormFooter';


const RegForm = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();

    const { client, setClient } = useContext(UserContext)

    const schema = object({
        password: string().required().min(4, 'Your password must contain between 4 and 60 characters.')

    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const createAccount = data => {
        setClient({ username: data.username, password: data.password });

        createUserWithEmailAndPassword(data.username, data.password)

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


                    <label className={styles["readyOnly"]} htmlFor="username">Email</label>

                    <input className={styles["readyOnly"]}
                        {...register("username")}
                        value={client.username}
                    />

                    <div className={styles["form-element"]}>
                        <input
                            type="password"
                            name='password'
                            {...register("password")}
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