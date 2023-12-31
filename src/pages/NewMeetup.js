import React from "react";
import NewMeetupFrom from "../components/meetups/NewMeetupFrom";
import { useHistory } from "react-router-dom"; 

function NewMeetup() {    

    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-getting-start-12dcc-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                header:{
                    'Content-Type': 'application/json',
                }
            }
        ).then(()=>{
            history.replace('/all-meeting');
        });        
    }

  return <section>
    <h1>Add New Meetup</h1>
        {/* the onAddMeetup function is the funciton from child component*/}
        <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
  </section>;
}

export default NewMeetup;
