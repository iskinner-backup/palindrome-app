import './App.scss';
import {useState} from "react";
import Palindrome from "./Palindrome";

export default function App() {
  const [text, setText] = useState('')
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [removeSpaces, setRemoveSpaces] = useState(false)

  return (
    <div className={'palindrome-app'}>
      <div>
        Is <input id={'palindrome-input'} type={'text'} placeholder={'This'} onChange={e => setText(e.target.value)}/> A Palindrome?
      </div>
      { text.length > 0 ? [
        <div className={'checkbox-control'} key={'checkbox-control'}>
          <div>
            <label htmlFor='case-sensitive-input'>Case Sensitive</label>
            <input id={'case-sensitive-input'} type={'checkbox'} value={''} onChange={e => setCaseSensitive(e.target.checked)}
                   aria-label={'Checkbox to control case sensitivity'} />
          </div>
          <div>
            <label htmlFor='remove-spaces-input'>Remove Spaces</label>
            <input id={'remove-spaces-input'} type={'checkbox'} value={''} onChange={e => setRemoveSpaces(e.target.checked)}
                   aria-label={'Checkbox to control removing of spaces'} />
          </div>
        </div>,
        <Palindrome key={'palindrome'} text={removeSpaces ? text.replaceAll(/\s+/g, '') : text}
                    caseSensitive={caseSensitive} />
      ] : ''}
    </div>
  )
}
