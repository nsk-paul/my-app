import React from 'react'
import classes from './NewMeetupFrom.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';

function NewMeetupFrom(props) {
    //useRef is just like using ajax and the name props of html
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        //prevent browser default
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }
        // sending the props to the mother function
        props.onAddMeetup(meetupData);

    }

  return ( 
    <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea rows="5" id='description' required ref={descriptionInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
  )
}

export default NewMeetupFrom