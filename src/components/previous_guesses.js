import React from 'react';

export default function PreviousGuesses(props){
    const guesses = props.prevGuesses.map(function(guess, index){
        console.log(guess);
         <li key={index}>
             {guess}
         </li>
    });
    console.log(props.prevGuesses);
    console.log(guesses);
    return(
            <footer>
                <ul>
                    {guesses}
                </ul>
            </footer>
    );
}
