import React from 'react';
import './hint.css'

export default function Hint(props){
    return(
        <header className="hint">
            <h2 className="hint-message">{props.message}</h2>
        </header>
    );
}
