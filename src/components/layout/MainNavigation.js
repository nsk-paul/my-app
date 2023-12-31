import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import FavouriteContext from "../../store/favourites-context";

function MainNavigation() {

  const favouriteCxt = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/all-meeting">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourite">
              Favourite
              <span className={classes.badge}>{favouriteCxt.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
