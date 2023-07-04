import React from 'react';

function StaffListRow({staffMember}){

    return(

        <tr>
            <td>
                <img src={staffMember.picture.thumbnail} alt="Random Staff Member Picture" />
            </td>
            <td>
                <a href={`mailto:${staffMember.email}`}>
                {staffMember.name.first} {staffMember.name.last}</a>
            </td>
            <td>{staffMember.phone}</td>
            <td>{staffMember.location.city}</td>
        </tr>

    )

}

export default StaffListRow;