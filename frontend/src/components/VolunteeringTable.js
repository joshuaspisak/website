import React from 'react';
import { DiAptana } from "react-icons/di";
import { Link } from 'react-router-dom';

import VolunteeringRow from './VolunteeringRow';

function VolunteeringTable ({ volunteering, onRemoveVolunteering, onChangeVolunteering }){
    return (
      <table>
        <caption>Here is your volunteering events log.</caption>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Edit</th>
            <th>Event</th>
            <th>Hours</th>
            <th>Date</th>
            <th><Link to="/create-volunteering"><i><DiAptana></DiAptana></i></Link></th>
          </tr>
        </thead>
        <tbody>
          {/* Map each document by index and render a TableRow component */}
          {volunteering.map((volunteering, j) => (
            <VolunteeringRow
              key={j}
              volunteering={volunteering}
              onRemoveVolunteering={onRemoveVolunteering}
              onChangeVolunteering={onChangeVolunteering}
            />
          ))}
        </tbody>
      </table>
    );
  };
  
  export default VolunteeringTable;