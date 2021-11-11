import calculate from '../logic/calculate';

describe('testing the returned calculator obj', () => {
  test('return the correct calculator data object', () => {
    const buttonName = '1';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const results = calculate(obj, buttonName);
    const expectResults = {
      total: null,
      next: '1',
    };
    expect(results).toStrictEqual(expectResults);
  });

  test('return the correct calculator data object', () => {
    const buttonName = 'AC';
    const obj = {
      total: '10',
      next: null,
      operation: null,
    };
    const results = calculate(obj, buttonName);
    const expectResults = {
      total: null,
      next: null,
      operation: null,
    };
    expect(results).toStrictEqual(expectResults);
  });

  test('return the correct calculator data object', () => {
    const buttonName = '=';
    const obj = {
      total: '9',
      next: '7',
      operation: '-',
    };
    const results = calculate(obj, buttonName);
    const expectResults = {
      total: '2',
      next: null,
      operation: null,
    };
    expect(results).toStrictEqual(expectResults);
  });
});
