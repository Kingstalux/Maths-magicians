import operate from '../logic/operate';

describe('calclulate two numbers', () => {
  test('return the correct result', () => {
    const result = operate(1, 5, 'x');
    expect(result).toBe('5');
  });
  test('return the correct result', () => {
    const result = operate(4, 2, '÷');
    expect(result).toBe('2');
  });
  test('return the correct result', () => {
    const result = operate(15, 5, '-');
    expect(result).toBe('10');
  });
});
