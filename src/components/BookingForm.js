// BookingForm.js

import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm({ date, time, guests, occasion });
        // Assuming SubmitForm requires form data, adjust accordingly
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input
                                id="book-date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                type="date"
                                required
                            />
                        </div>

                        {/* Time selection */}
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select
                                id="book-time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.map((availableTime) => (
                                    <option key={availableTime} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Number of guests */}
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input
                                id="book-guests"
                                min="1"
                                type="number"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                            />
                        </div>

                        {/* Occasion */}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select
                                id="book-occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option value="">Select an Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Engagement">Engagement</option>
                            </select>
                        </div>

                        {/* Submit button */}
                        <div className="btnReceive">
                            <input
                                aria-label="On Click"
                                type="submit"
                                value="Book Your Reservation"
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
