# Palindrome App

This is a React web-application that can be used to evaluate whether a given string is a palindrome or not.

The criteria (spec.) for a palindrome can be altered via a pair of UI checkboxes wherein case-sensitivity and the 
removal of whitespaces can be toggled on/off.

---

### Approach

My approach to classifying a palindrome was to take a string and break it down into its individual characters i.e.
turn "foo oof" into ['f', 'o', 'o', ' ', 'o', 'o', 'f'], reverse this array and then form a new string from this for 
comparison with the original string. If the reversed character string is equal to the original string then we have a 
palindrome (non-case sensitive is the default behaviour but this is adjustable).

I **_was_** happy with this approach but I have found instances of it failing, for example if we're dealing with emoji 
characters like ❤️ then when these strings are turned into an array of characters they can become multiple unicode 
points, in this case heavy black heart + a variation selector and so when those characters get reversed and reformed
they're no longer strictly equal and so the emoji is reported as not being a palindrome.

---

### Testing

To test this web-application I've utilised [TestCafé](https://testcafe.io/), to run these yourself you will need to install it on your
system `npm i -g testcafe` and run `testcafe firefox test/palindromeTest.js`, depending on your system you may also 
need to update some security privileges for the purposes of screen recording.

Demo
![TestCafé](testcafe.gif)
