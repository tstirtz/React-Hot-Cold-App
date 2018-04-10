import React from 'react';
import './guess_number.css';

export default function GuessNumber(props){
    return(
        <div>
            <p>Guess #<span>{props.guessNumber}</span>!</p>
        </div>
    );
}
