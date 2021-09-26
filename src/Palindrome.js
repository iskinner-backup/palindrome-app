import {useEffect, useState} from "react";
import "./Palindrome.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons"

export default function Palindrome(props) {
  const [isPalindrome, setIsPalindrome] = useState(false),
      checkPalindrome = text => {
        if (typeof text === 'string') {
          setIsPalindrome([...text].reverse().join('') === text)
        } else {
          alert('This function should only be checking if strings are palindromes!')
        }
      }

  useEffect(() => {
    if (props.text.length > 0) {
      if (props.caseSensitive) {
        checkPalindrome(props.text)
      } else {
        // The text is not considered case sensitive => we can lowercase it via this external API call.
        fetch(`https://lowercase-api.herokuapp.com/lowercase?text=${props.text}`)
          .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                throw new Error('Lowercase API did not return an OK response!')
            }
          })
          .then(text => checkPalindrome(text))
          .catch(error => alert(error))
      }
    }
  })

  return(
    <div className={`palindrome-text ${isPalindrome ? 'palindrome' : ''}`}>
      <FontAwesomeIcon icon={isPalindrome ? faThumbsUp : faThumbsDown} /> "{props.text}" is {isPalindrome ? '' : 'not'} a palindrome!
    </div>
  )
}
