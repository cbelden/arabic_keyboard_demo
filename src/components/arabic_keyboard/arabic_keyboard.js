import './arabic_keyboard.css';
import { ARABIC_KEYBOARD } from './data';

/** Renders the Arabic keyboard and highlighted key. */
export function ArabicKeyboard(props) {
    return (
        <div className="keyboard">
            {ARABIC_KEYBOARD.map((row, i) => (
                <div key={i} className="row">
                    {row.map((key, i) => {
                        let className = 'key';
                        if (props.selectedCharacter === key.letter) {
                            className += ' target';
                        }
                        if (props.activeKeys.has(key.letter)) {
                            className += ' selected';
                        }
                        return (
                            <div key={i} className={className}>
                                {key.letter}
                            </div>);
                    })}
                </div>
            ))}
        </div>
    );
}