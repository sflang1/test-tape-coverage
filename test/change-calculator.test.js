const test = require('tape');
const calculateChange = require('../lib/change-calculator');

const coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

test('calculate change (215, 300) should return [50, 20, 10, 5]', function (t) {
  const result = calculateChange(215, 300);
  const expected = [50, 20, 10, 5];
  t.deepEqual(result, expected);
  t.end();
})

test('calculateChange(486, 600) should equal [100, 10, 2, 2]', function (t) {
  const result = calculateChange(486, 600);
  const expected = [100, 10, 2, 2];
  t.deepEqual(result, expected);
  t.end();
});

test('calculateChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function (t) {
  const result = calculateChange(12, 400);
  const expected = [200, 100, 50, 20, 10, 5, 2, 1];
  t.deepEqual(result, expected);
  t.end();
});