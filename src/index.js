import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Update this string to update the lesson (the sentence that
// the student will try to type).
const SENTENCE = "هذه هي الطريقة التي تكتب بها";

ReactDOM.render(
  <React.StrictMode>
    <App sentence={SENTENCE}/>
  </React.StrictMode>,
  document.getElementById('root')
);
