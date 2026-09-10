import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import redToken from "../assets/images/redToken.svg"
import blackToken from "../assets/images/blackToken.svg"

const Slot = ({ ch, y, x }) => {

    // add input for players token - ideas - easter egg, pick your own colour, halloween, christmas

    return (
        <div className='slot' x={x} y={y}>
            {ch && (
                <img src={ch === 'P1' ? redToken : blackToken} width='100%' height='100%' />
            )}
        </div>
    );
};

export default Slot;