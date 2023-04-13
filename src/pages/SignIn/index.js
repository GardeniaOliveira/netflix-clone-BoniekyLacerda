import './styles.css'
import HeaderLogo from "../../components/HeaderLogo";

const SignIn = () => {

    return (
        <div className='container-background-img'>
            <div className='container-background-opacity'></div>

            <div className='container'>
                <HeaderLogo />
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone number' className='input--email' />
                    <input type="password" placeholder='Password' className='input--password' />
                    <button>Sign In</button>

                    <div className='form-remember-help'>
                        <div className='form-remember'>
                            <input type="checkbox" checked />
                            <label>Remember me </label>
                        </div>

                        <div className='form-help'>
                            <a href='https://www.netflix.com/pt-en/login'>Need help?</a>
                        </div>

                    </div>

                    <div className='form-info'>
                        <h4>New to Netflix? <a href='https://www.netflix.com/pt-en/login'>Sign up now.</a> </h4>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='https://www.netflix.com/pt-en/login' className='form-info-learn-more'> Learn more.</a></p>

                        <p className='form-info-hidden'>
                            The information collected by Google reCAPTCHA is subject to the Google  <a href='https://policies.google.com/privacy'>Privacy Policy</a>and <a href='https://policies.google.com/terms'> Terms of Service</a> , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                        </p>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default SignIn