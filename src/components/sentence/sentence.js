import './sentence.css';

/** Renders the input sentence and highlighted character. */
export function Sentence(props) {
    return (
        <div className="sentence">
            {props.sentence.split('').map((c, i) => (
                <span key={i} className={props.selectedIndex === i ? 'highlighted letter' : 'letter'}>{c}</span>
            ))}
        </div>);
}