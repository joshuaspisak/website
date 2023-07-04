import React from 'react';
import { CiBookmarkRemove, CiBookmark } from "react-icons/ci";

function VolunteeringRow ( {volunteering, onRemoveVolunteering, onChangeVolunteering} ) {

    return (

        <tr>
            <td><i><CiBookmarkRemove onClick={() => onRemoveVolunteering(volunteering._id)} title="This can delete one of the volunteering event entries."></CiBookmarkRemove></i></td>
            <td><i><CiBookmark onClick={() => onChangeVolunteering(volunteering)} title="This can change one of the volunteering event entries."></CiBookmark></i></td>
            <td title="This is the name of the volunteering event you went to.">{volunteering.event}</td>
            <td title="This is duration of the volunteering event you went to in hours.">{volunteering.hours}</td>
            <td title="This is the date of the volunteering event you went to.">{volunteering.date.slice(0,10)}</td>
            <td></td>
        </tr>

    );

}

export default VolunteeringRow;