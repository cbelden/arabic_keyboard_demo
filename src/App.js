import React from 'react';
import './App.css';
import { Lesson } from './components/lesson/lesson';
import { QWERTY_TO_ARABIC } from './components/arabic_keyboard/data';

/** Iterates through each letter in the sentence and renders the Lesson. */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKeys: new Set(), selectedIndex: 0 };
  }

  // Called each time the user/student presses a key.
  onKeyDown = (event) => {
    // Map English QWERTY key to the corresponding Arabic key.
    const arabicKey = QWERTY_TO_ARABIC[event.key];

    // Key is already pressed, early exit.
    if (this.state.activeKeys.has(arabicKey)) {
      return;
    }

    // Compute the new active keys (keys the user is pressing).
    const activeKeys = new Set(this.state.activeKeys);
    activeKeys.add(arabicKey);
    console.log(activeKeys);

    // User selected the correct key! Increment selected index to
    // highlight the next character.
    const selectedIndex =
      arabicKey === this.props.sentence[this.state.selectedIndex] ?
        Math.min(this.state.selectedIndex + 1, this.props.sentence.length - 1) :
        this.state.selectedIndex;

    this.setState({ activeKeys, selectedIndex });
  }

  // Called each time the user/student lifts a key (after a keydown).
  onKeyUp = (event) => {
    // Map English QWERTY key to the corresponding Arabic key.
    const arabicKey = QWERTY_TO_ARABIC[event.key];

    const activeKeys = new Set(this.state.activeKeys);
    activeKeys.delete(arabicKey);
    this.setState({ activeKeys });
  };

  render() {
    return (
      <div
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        tabIndex="-1"
        className="App">
        <Lesson
          sentence={this.props.sentence}
          selectedIndex={this.state.selectedIndex}
          activeKeys={this.state.activeKeys} />
      </div>
    );
  }
}

export default App;
