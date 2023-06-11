import React from 'react';

import "./Resetbutton.css";

export const ResetButton = ({resetBoard}) => {
    return(
        <button className='reset' onClick={resetBoard}>Reset</button>
    )
}