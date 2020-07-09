const helpers = require('./questionsHelpers');

test('takes in an ISO-format date and returns a human readable date', () => {
  expect(helpers.getDate("2018-10-18T00:00:00.000Z").toEqual("August 18, 2018"))
});