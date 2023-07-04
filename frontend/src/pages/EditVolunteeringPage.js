import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiAptana } from "react-icons/di";

export const EditVolunteeringPage = ( {volunteering} ) => {

    const [event, setEvent] = useState(volunteering.event)
    const [hours, setHours] = useState(volunteering.hours)
    const [date, setDate] = useState(volunteering.date.slice(0,10))

    const navigation = useNavigate();

    const changeVolunteering = async () => {

        const result = await fetch(`/volunteering/${volunteering._id}`, {

            method: 'PUT',
            body: JSON.stringify({

                event: event,
                hours: hours,
                date: date
            }),
            headers: {

                'Content-Type': 'application/json',

            },

        });

        if(result.status === 200){
            alert("Your volunteering event was changed correctly.");
        } else {
            alert("Your volunteering event was not changed because you did not input the format correctly.")
        }
        navigation("/volunteering");


    };

    return(

        <>
            <h2>Edit a volunteering event in your history.</h2>
            <article>
            <p>Change the contenty of your volunteering hours from this week.</p>
            <table id="volunteering">
                <caption>This is where you can edit volunteering hours.</caption>
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
                        <td><button onClick={changeVolunteering}>Confirm</button></td>
                    </tr>
                </tbody>

            </table>
            </article>
        
        
        </>


    )


}

export default EditVolunteeringPage;