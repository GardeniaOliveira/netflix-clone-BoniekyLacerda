
import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseConfig';

import styles from './styles.module.css'
import Tmdb from "../../Tmdb";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeaturedMovie from "./FeaturedMovie";
import MovieRow from "./MovieRow";
import UserContext from '../../contexts/userContext';
import { useContext } from 'react';

const Movies = () => {

    const { client, setClient } = useContext(UserContext);

    const handleSignOut = () => {
        signOut(auth);
        window.location.href = window.location.href;
    }

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)
    const [headerBlack, setHeaderBlack] = useState(false)

    useEffect(() => {
        //when the screen loads to do it: 
        const loadAll = async () => {
            //get all list
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //get only the originals to show on featured banner
            let originals = list.filter(i => i.slug === 'originals');
            //random a originals from array to show on featured banner
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, [])


    useEffect(() => {
        const scrollListener = (e) => {
            if (window.scrollY > 10) {
                setHeaderBlack(true)
            } else {
                setHeaderBlack(false)
            }

        }
        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, []);


    return (

        <div className="page">

            <Header
                black={headerBlack}
                action={handleSignOut}
                username={client.username}

            />

            {/* when there is a feature movie, so showed the component  */}
            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items || []} />

                ))}
            </section>

            <footer>
                <Footer>
                    <div className={styles['footer-links']}>

                        <a href="https://github.com/GardeniaOliveira">Audio Description</a>
                        <a href='https://github.com/GardeniaOliveira' >Help Center</a>
                        <a href="https://github.com/GardeniaOliveira">Gift Cards</a>
                        <a href="https://github.com/GardeniaOliveira">Media Center</a>
                        <a href="https://github.com/GardeniaOliveira">Investor Relations</a>
                        <a href="https://github.com/GardeniaOliveira"> Jobs</a>
                        <a href="https://github.com/GardeniaOliveira">Terms of Use</a>
                        <a href="https://github.com/GardeniaOliveira">Privacy</a>
                        <a href="https://github.com/GardeniaOliveira">Legal Notices</a>
                        <a href="https://github.com/GardeniaOliveira">Cookie Preferences</a>
                        <a href="https://github.com/GardeniaOliveira">Corporate Information</a>
                        <a href="https://github.com/GardeniaOliveira">Contact Us</a>
                    </div>

                </Footer>

                <div>
                    Netflix Image rights - Project based on Bonieky Lacerda's tutorial - Update by Gardênia Oliveira - Data from The Movie Database Api  <br />
                </div>
            </footer>

            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading..." />
                </div>
            }

        </div>
    )
}

export default Movies