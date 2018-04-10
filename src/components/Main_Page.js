import React from 'react';
import './Main_Page.css';
import Hint from './hint';
import GuessForm from './guess_form';
import GuessNumber from './guess_number';
import PreviousGuesses from './previous_guesses';

export default class MainPage extends React.Component {
  render() {
    return (
        <main>
            <h1>HOT or COLD</h1>
            <h2>WHAT?</h2>
            <h2>+ NEW GAME</h2>
            <section>
                <Hint />
                <GuessForm />
                <GuessNumber />
                <PreviousGuesses />
            </section>
        </main>
    );
  }
}
