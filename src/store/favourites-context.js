import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});

export function FavouriteContextProvider(props) {

    const [userFavourites, setUserFavourite] = useState([]);
    
    function addFavouriteHeadler(favouriteMeetup){
        setUserFavourite((prevFavourites)=>{
            return[...prevFavourites,favouriteMeetup]
        })
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourite((prevFavourites)=>{
            return prevFavourites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavouriteHandler(meetupId) {
        // this function used to check whether the selected meetupId is a favourite meetup
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourite: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHeadler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>

}

export default FavouriteContext;