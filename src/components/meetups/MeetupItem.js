import React from "react";

import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

import FavouriteContext from "../../store/favourites-context";

function MeetupItem(props) {
  //here is using the useContext function to get the context that saved in the createContext function
  const favouriteContxt = useContext(FavouriteContext);
  //here check whether the item is favourite already or not at this moment by using the itemIsFavourite function inside the useContext
  const itemIsFavourite = favouriteContxt.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler (){
    // here is the eventListener that used for the button of adding to favourite or remove from favourite
    // if the itemIsFavourite is true at this moment, which mean the item is favourite already and need to remove from it when click
    if(itemIsFavourite){
      favouriteContxt.removeFavourite(props.id)
    }else{
      favouriteContxt.addFavourite({
        key: props.id,
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description
      })
    }
  }

  return (
    <li>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite?"Remove from Favourite":"To Favourite"}</button>
        </div>
        
      </Card>
    </li>
  );
}

export default MeetupItem;
