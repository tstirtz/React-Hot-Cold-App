import React from 'react';

export default class GuessForm extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            guess: 0
        });
    }

    updateGuess(number){
        this.setState = ({
            guess: number
        })
    }

    render(){
        return(
            <form
                onSubmit={e => { e.preventDefault()}}>
                <input
                    onChange={e => this.setState({guess: e.target.value})}
                    placeholder="Enter your guess"/>
                <button
                    onClick={e => {this.props.onGuess(this.state.guess)}}
                    type="submit">
                    Guess
                </button>
            </form>
        );
    }
}
