import { useState, useEffect } from "react";

import './App.css'
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

const App = () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

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

  return (
    <div className="page">
      {/* when there is a feature movie, so showed the component  */}
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items || []} />

        ))}
      </section>

    </div>
  )
}

export default App