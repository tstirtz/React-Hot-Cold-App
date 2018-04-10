import React from 'react';
import './guess_number.css';

export default function GuessNumber(props){
    return(
        <div className="guess-number">
            <p>Guess #<span>{props.guessNumber}</span>!</p>
        </div>
    );
}
