// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone number is 2098501010', () => {
  expect(isPhoneNumber('2098501010')).toBe(false);
});
test('phone number is aaaaaaaaaa', () => {
  expect(isPhoneNumber('aaaaaaaaaa')).toBe(false);
});
test('phone number is 209-850-1010', () => {
  expect(isPhoneNumber('209-850-1010')).toBe(true);
});
test('phone number is (209) 850-1010', () => {
  expect(isPhoneNumber('(209) 850-1010')).toBe(true);
});

test('email is test@domain.com', () => {
  expect(isEmail('test@domain.com')).toBe(true);
});
test('email is test_email@domain.com', () => {
  expect(isEmail('test_email@domain.com')).toBe(true);
});
test('email is test@ucsd1.edu', () => {
  expect(isEmail('test@ucsd1.edu')).toBe(false);
});
test('email is test@domain.co.us', () => {
  expect(isEmail('test@domain.co.us')).toBe(false);
});

test('password is abcdef', () => {
  expect(isStrongPassword('abcdef')).toBe(true);
});
test('password is abcdefG8aSds', () => {
  expect(isStrongPassword('abcdefG8aSds')).toBe(true);
});
test('password is 1abcdef', () => {
  expect(isStrongPassword('1abcdef')).toBe(false);
});
test('password is ab', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

test('date is 08/12/2025', () => {
  expect(isDate('08/12/2025')).toBe(true);
});
test('date is 8/12/2025', () => {
  expect(isDate('8/12/2025')).toBe(true);
});
test('date is 08/12/25', () => {
  expect(isDate('08/12/25')).toBe(false);
});
test('date is 08-12-2025', () => {
  expect(isDate('08-12-2025')).toBe(false);
});

test('hexcolor is #FA198C', () => {
  expect(isHexColor('FA198C')).toBe(true);
});
test('hexcolor is #ca678f', () => {
  expect(isHexColor('ca678f')).toBe(true);
});
test('hexcolor is #asdfgh', () => {
  expect(isHexColor('asdfgh')).toBe(false);
});
test('hexcolor is #A', () => {
  expect(isHexColor('A')).toBe(false);
});