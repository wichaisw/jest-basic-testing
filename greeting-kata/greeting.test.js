const greeting = require('./greeting');

test('input is name', () => {
  expect(greeting.greet('Bob')).toBe('Hello, Bob.')
})

test('input is null', () => {
  expect(greeting.greet(null)).toBe('Hello, my friend.')
})

test('input is all capital letters', () => {
  expect(greeting.greet('JERRY')).toBe('HELLO JERRY!')
})

test('input is an arrays of 2 names', () => {
  expect(greeting.greet(["Jill", "Jane"])).toBe('Hello, Jill and Jane.')
})

test('input is an arrays with arrays of more than 2 names', () => {
  expect(greeting.greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
})

test('input is an arrays with capital letters', () => {
  expect(greeting.greet(["Amy", "BRIAN", "Charlotte"])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!')
})

test('input is an arrays with string that contains comma', () => {
  expect(greeting.greet(["Bob", "Charlie, Dianne"])).toBe('Hello, Bob, Charlie, and Dianne.')
})