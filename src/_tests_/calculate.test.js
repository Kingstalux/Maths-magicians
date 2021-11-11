import calculate from '../logic/calculate';

describe('testing the returned calculator obj', () => {
    test('return the correct calculator data object', () => {
        const buttonName = '1'
        const obj = {
            total: null,
            next: null,
            operation: null,
        }
        let results = calculate(obj, buttonName)
        let expectResults = {
            total: null,
            next: '1',
        }
        expect(results).toStrictEqual(expectResults)
    })

    test('return the correct calculator data object', () => {
        const buttonName = 'AC'
        const obj = {
            total: '10',
            next: null,
            operation: null,
        }
        let results = calculate(obj, buttonName)
        let expectResults = {
            total: null,
            next: null,
            operation: null
        }
        expect(results).toStrictEqual(expectResults)
    })

    test('return the correct calculator data object', () => {
        const buttonName = '='
        const obj = {
            total: '9',
            next: '7',
            operation: '-',
        }
        let results = calculate(obj, buttonName)
        let expectResults = {
            total: '2',
            next: null,
            operation: null,
        }
        expect(results).toStrictEqual(expectResults)
    })
})