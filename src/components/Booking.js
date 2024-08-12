// Booking.js

import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitFormubmitForm={props.SubmitForm}/>
    );
};

export default Booking;