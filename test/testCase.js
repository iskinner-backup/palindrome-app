import {Selector} from "testcafe";

class TestCase {
    constructor(input, isPalindrome = true, caseSensitive = false, removeSpaces = false) {
        this.input = input
        this.caseSensitive = caseSensitive
        this.removeSpaces = removeSpaces
        this.isPalindrome = isPalindrome
    }

    async run(t) {
        await t.typeText('#palindrome-input', this.input)
        await this.verifyCheckbox(t, Selector('#case-sensitive-input'), this.caseSensitive)
        await this.verifyCheckbox(t, Selector('#remove-spaces-input'), this.removeSpaces)
        await this.verifyPalindrome(t)
    }

    async verifyCheckbox(t, input, checked) {
        await t.expect(input.exists).ok()

        if (checked) {
            await t.click(input)
                .expect(input.checked).ok()
        } else {
            await t.expect(input.checked).notOk()
        }
    }

    async verifyPalindrome(t) {
        const expectedIcon = `fa-thumbs-${this.isPalindrome ? 'up' : 'down'}`,
            expectedText = ` "${this.removeSpaces ? this.input.replace(/\s+/g, '') : this.input}" is ${this.isPalindrome ? '' : 'not '}a palindrome!`

        await t.expect(Selector('svg.svg-inline--fa').classNames).contains(expectedIcon)
            .expect(Selector('.palindrome-text').innerText).eql(expectedText)
    }
}

export default TestCase
