import { useState, useEffect} from "react"; 

import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
    // with empty dependencies, the useEffect will only run once when the component is render
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    const [msg, setMsg] = useState("Is Loading...");


    useEffect(() => {
        setIsLoading(true);
        
        fetch(
            'https://react-getting-start-12dcc-default-rtdb.firebaseio.com/meetups.json',
        ).then((response)=>{
            return response.json();
        }).then((data) => {
            const meetups = []; 
            // since the response is converted to json, so the here is the key of the object, the value is the content of this object
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                }

                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        }).catch(()=>{
            // here meaning the the 
            setMsg("The data cannot be fetch");
        })


    },[msg]);

    if(isLoading){
        return <section>
            <p>{msg}</p>
        </section>
    }else{
        return (
            <section>
                <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
            </section>
        )
    }

}

export default AllMeetups;
