import React, { useState } from 'react';
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";

function ProductNumber(){

    const [number, setNumber] = useState(0);
    const add = () => setNumber(number === 10 ? number : number + 1);
    const subtract = () => setNumber(number === 0 ? 0 : number - 1);

    return (
        <div>
            <i><CiCircleChevDown onClick={subtract} /></i>
            <span>{number}</span>
            <i><CiCircleChevUp onClick={add} /></i>
        </div>
       );

}

export default ProductNumber