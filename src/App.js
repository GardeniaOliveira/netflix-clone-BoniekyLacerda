import { useEffect } from "react";
import Tmdb from "./Tmdb";

export default () => {
  useEffect(() => {
    //when the screen loads to do it: 
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, [])

  return (
    <div></div>
  )
}