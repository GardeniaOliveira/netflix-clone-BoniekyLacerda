
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import HeaderLogo from "../../components/HeaderLogo";
import CardStory from './CardStory';
import Border from '../../components/Border';
import Footer from "../../components/Footer";
import styles from './styles.module.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";



const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const createAccount = data => {
        console.log(data)
        if (data.username) {
            navigate("/");
        }

    };

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

                            <input
                                type="email" required
                                {...register("username")}
                                id='username'
                            />
                            <label className={styles["floating-label"]} htmlFor="email">Email Address</label>
                            <button type='submit' onClick={handleSubmit(createAccount)}>{`Get Start >`} </button>
                            {errors.username && <span className={styles["inputError"]}>Please enter a valid email address</span>}


                        </div>
                    </section>
                </div>

            </div >

            <div>
                <Border />
                <CardStory
                    title='Enjoy on your TV.'
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    img={card1}
                />
                <Border />
                <CardStory
                    revertRow={true}
                    title='Download your shows to watch offline.'
                    description="Save your favorites easily and always have something to watch."
                    img={card2}
                />
                <Border />
                <CardStory
                    title='Watch everywhere.'
                    description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                    img={card3}
                />
                <Border />
                <CardStory
                    revertRow={true}
                    title='Create profiles for kids.'
                    description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                    img={card4}
                />
                <Border />

            </div>
            <div className={styles['accordion-container']}>

                <h2>Frequently Asked Questions</h2>


                <div className={styles['accordion']}>
                    <Accordion className={styles['accordion-item']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>What is Netflix?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={styles['accordion-item']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>How much does Netflix cost?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR15.99 a month. No extra costs, no contracts.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles['accordion-item']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Where can I watch?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles['accordion-item']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>How do I cancel?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles['accordion-item']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>What can I watch on Netflix?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles['accordion-item']}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"

                        >
                            <Typography>Is Netflix good to kids?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div className={styles['accordion-form']}>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className={styles["form-element"]}>
                        <input
                            type="email" required
                            {...register("username")}
                            id='username'
                        />
                        <label className={styles["floating-label"]} htmlFor="email">Email Address</label>
                        <button type='submit' onClick={handleSubmit(createAccount)}>{`Get Start >`} </button>
                    </div>

                </div>

            </div>
            <Border />
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