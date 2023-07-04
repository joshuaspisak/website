import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DiAptana } from "react-icons/di";

import VolunteeringTable from '../components/VolunteeringTable';

function VolunteeringLogPage( {makeOneVolunteering} ) {

    const point = useNavigate();

    const [volunteering, makeVolunteering] = useState([]);

    const putVolunteering = async () => {
        const result = await fetch('/volunteering');
        const volunteering = await result.json();
        makeVolunteering(volunteering);
    }

    const onChangeVolunteering = async oneVolunteering => {
        makeOneVolunteering(oneVolunteering);
        point("/change");
    }

    const onRemoveVolunteering = async _id => {
        const result = await fetch(`/volunteering/${_id}`, { method: 'DELETE' });
        if (result.status === 204) {
            const getResult = await fetch('/volunteering');
            const volunteering = await getResult.json();
            makeVolunteering(volunteering);
        } else {
            console.error(`There was a status code of ${result.status} because something went wrong when trying to delete the volunteering event with _id = ${_id},`)
        }
    }

    useEffect(() => {
        putVolunteering();
    }, []);

    return (
        <>
            <h2>Volunteering Event Log</h2>
            <p>This page showcases the different volunteering events that you took part in.</p>
            <VolunteeringTable 
                volunteering={volunteering}
                onRemoveVolunteering={onRemoveVolunteering}
                onChangeVolunteering={onChangeVolunteering} 
            />
        </>
    );

}

export default VolunteeringLogPage;