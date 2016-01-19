import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';

ReactDOM.render(<Box name={'I am a box'} duration={987654} onStart={function() {
  console.log('I am a callback!');
}}/>, document.getElementById('app'));