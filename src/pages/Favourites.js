import React from "react";
import { useContext } from "react";
import FavouriteContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";


function Favourites() {
  const favouriteCxt = useContext(FavouriteContext);

  let content;

  if(favouriteCxt.totalFavourites === 0){
    content = <p>You got no favourite yet. Start adding some favoruite to the list!</p>
  }else{
    content = <MeetupList meetups={favouriteCxt.favourite}/>
  }

  return(<section>
    <h1>My Favourite</h1>
    {content}
    
  </section>);
}

export default Favourites;
