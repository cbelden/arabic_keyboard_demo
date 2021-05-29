import './lesson.css';
import {Sentence} from '../sentence/sentence'
import {ArabicKeyboard} from '../arabic_keyboard/arabic_keyboard'

/**
 * Renders the input sentence and keyboard, highlighting the
 * selected character in both the sentence and keyboard.
 */
export function Lesson(props) {
  return (
    <div className="Lesson">
      <Sentence sentence={props.sentence} selectedIndex={props.selectedIndex}/>
      <ArabicKeyboard activeKeys={props.activeKeys} selectedCharacter={props.sentence[props.selectedIndex]} />
    </div>
  );
}
