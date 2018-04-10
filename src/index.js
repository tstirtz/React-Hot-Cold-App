import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './components/Main_Page';
import registerServiceWorker from './registerServiceWorker';

 let randomNumber = window.addEventListener('load', function(){
     return Math.floor((Math.random() * 100) + 1);
 });

ReactDOM.render(<MainPage number={randomNumber}/>, document.getElementById('root'));
registerServiceWorker();
