import TestCase from "./testCase";
import {Selector} from "testcafe";

// eslint-disable-next-line no-undef
fixture `Palindrome Testing`
    .page `https://thirsty-meitner-ca833a.netlify.app`;

test('Negative Test Case: [foo bar]', async t => await new TestCase('foo bar', false).run(t))
test('Positive Test Case: [foo oof]', async t => await new TestCase('foo oof').run(t))

test('Negative Test Case: [fooo of]', async t => await new TestCase('fooo of', false).run(t))
test('Positive Test Case: [fooo of] [Removed Spaces]', async t => await new TestCase('fooo of', true, false, true).run(t))

test('Positive Test Case: [FOO oof]', async t => await new TestCase('FOO oof').run(t))
test('Negative Test Case: [FOO oof] [Case Sensitive]', async t => await new TestCase('FOO oof',false, true, false).run(t))

test('Positive Test Case: [˜∫˚˚∫˜]', async t => await new TestCase('˜∫˚˚∫˜').run(t))
test('Negative Test Case: [˜∫˚˚ʄ˜]', async t => await new TestCase('˜∫˚˚ʄ˜', false).run(t))

test('Empty String: []', async t => {
    await t.expect(Selector('#case-sensitive-input').exists).notOk()
        .expect(Selector('#remove-spaces-input').exists).notOk()
        .expect(Selector('.palindrome-text').exists).notOk()
})
