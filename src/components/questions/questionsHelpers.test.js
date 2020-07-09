const helpers = require('./questionsHelpers');

test('takes in an ISO-format date and returns a human readable date', () => {
  expect(helpers.getDate("2018-10-18T00:00:00.000Z").toEqual("August 18, 2018"))
});

test('', () => {
  expect(helpers.compareAnswers('').toEqual(''))
});

test('verifies the input email is formatted correctly', () => {
  expect(helpers.validateEmail('example@test.com').toBe(true));
  expect(helpers.validateEmail('example.com').toBe(false));
});