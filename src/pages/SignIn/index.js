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
                            <p>Need help?</p>
                        </div>

                    </div>

                    <div className='form-info'>
                        <h4>New to Netflix? <a>Sign up now.</a> </h4>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default SignIn