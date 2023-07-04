import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiAptana } from "react-icons/di";

export const CreateVolunteeringPage = () => {

    const [event, setEvent] = useState('')
    const [hours, setHours] = useState('')
    const [date, setDate] = useState('')

    const navigation = useNavigate();

    const appendVolunteering = async () => {

        const addedVolunteering = {event, hours, date};

        const result = await fetch('/volunteering', {

            method: 'POST',
            body: JSON.stringify(addedVolunteering),
            headers: {

                'Content-Type': 'application/json',

            },

        });

        if(result.status === 201){
            alert("Your volunteering event was appended correctly.");
        } else {
            alert("Your volunteering event was not added because there was some content missing.")
        }
        navigation("/volunteering");


    };

    return(

        <>
            <h2>Add a volunteering event to your history.</h2>
            <article>
            <p>Track your volunteering hours from this week.</p>
            <table id="volunteering">
                <caption>This is where you track volunteering hours.</caption>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Event</th>
                        <th>Hours</th>
                        <th>Date</th>
                        <th><i><DiAptana></DiAptana></i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <label htmlFor="event" className="required">
                                <input type="text" id="event" name="event" value={event}
                                required
                                onChange={e => setEvent(e.target.value)}
                                />
                            </label>
                        </td>
                        <td>
                            <label htmlFor="hours" className="required">
                                <input type="number" id="hours" name="hours" value={hours}
                                required
                                onChange={e => setHours(e.target.value)}
                                />
                            </label>
                        </td>
                        <td>
                            <label htmlFor="date" className="required">
                                <input type="date" id="date" name="date" value={date}
                                required
                                onChange={e => setDate(e.target.value)}
                                />
                            </label>
                        </td>
                        <td><button onClick={appendVolunteering}>Append</button></td>
                    </tr>
                </tbody>

            </table>
            </article>
        
        
        </>


    )


}

export default CreateVolunteeringPage;