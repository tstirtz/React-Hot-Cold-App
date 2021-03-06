import React from 'react';
import './Main_Page.css';
import Hint from './hint';
import GuessForm from './guess_form';
import GuessNumber from './guess_number';
import PreviousGuesses from './previous_guesses';


export default class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            randomNumber: Math.floor((Math.random() * 100) + 1),
            numberOfGuesses: 0,
            pastGuesses: [],
            hint: "Make your Guess!"
        });
    }

    compareGuess(number){
        let diff = this.state.randomNumber - number;
        console.log("This is the difference " + diff);
        if(diff < 0){
            diff = diff * -1;
            console.log("This is the adjusted difference " + diff);
        }

        if(diff > 10){
            console.log("If statement working");
            this.setState({
                hint: "Cold",
                numberOfGuesses: this.state.numberOfGuesses + 1,
                pastGuesses: [...this.state.pastGuesses, number]
            });
        }else if(diff === 0){
            this.setState({
                hint: "Right on the Money!",
                numberOfGuesses: this.state.numberOfGuesses + 1,
                pastGuesses: [...this.state.pastGuesses, number]
            });
        }else if(diff < 10){
            this.setState({
                hint: "Hot",
                numberOfGuesses: this.state.numberOfGuesses + 1,
                pastGuesses: [...this.state.pastGuesses, number]
            });
        }
    }


    render() {
        return (
            <main>
                <h1>HOT or COLD</h1>
                <h2 className= "instructions">WHAT?</h2>
                <h2 className = "new-game" onClick={e => window.location.reload()}>+ NEW GAME</h2>
                <section className= "game-board">
                    <Hint message={this.state.hint}/>
                    <GuessForm onGuess={number => this.compareGuess(number)}/>
                    <GuessNumber guessNumber={this.state.numberOfGuesses}/>
                    <PreviousGuesses prevGuesses={this.state.pastGuesses}/>
                </section>
            </main>
        );
    }
}
