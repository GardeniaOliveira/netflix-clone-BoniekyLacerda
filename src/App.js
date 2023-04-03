import { useState, useEffect } from "react";

import './App.css'
import Tmdb from "./Tmdb";
import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieRow from "./components/MovieRow";

const App = () => {

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

      <Header black={headerBlack} />

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
        Project based on Bonieky Lacerda's tutorial -  Netflix Image rights - Data from The Movie Database Api  <br />
      </footer>

    </div>
  )
}

export default App