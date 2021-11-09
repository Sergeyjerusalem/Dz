let Jasmine = require('jasmine');
let jasmine = new Jasmine;

(async () => {
    jasmine.loadConfigFile('/Users/pro/lol/spec/support/jasmine.json');
    jasmine.configureDefaultReporter({ showColors: true });
    jasmine.execute();

})();


let Calculator = require('./calc')

describe("Test calculator class ", function () {
    let calc = new Calculator();

    beforeEach(function () {
        console.log('start of the test')
    });

    afterEach(function () {
        calc.cleanUp();
    });

    it('Test sum function with usual parametrs', function () {
        calc.plus(5);
        expect(calc.result).toBe(6);
    });

    it('Test sum function with minus parametrs', function () {
        calc.plus(-5);
        expect(calc.result).toBe(-4);
    });

    it('Test addition with big numbers', function () {
        let isErr = false;
        try {
            calc.plus(99999999999999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Value is too big');
        }
        expect(isErr).toBe(true);
    });

    it('Test sum  function with string parametrs', function () {
        let isErr = false;
        try {
            calc.plus('5');
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Unsupported parameter type');
        }
        expect(isErr).toBe(true);
    });

    it('Test minus function with usual parametrs', function () {
        calc.minus(10);
        expect(calc.result).toBe(-9);
    });

    it('Test minus  function with string parametrs', function () {
        let isErr = false;
        try {
            calc.minus('5');
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Unsupported parameter type');
        }
        expect(isErr).toBe(true);
    });

    it('Test minus function with minus parametrs', function () {
        calc.minus(-5);
        expect(calc.result).toBe(6);
    });

    it('Test minus with big numbers', function () {
        let isErr = false;
        try {
            calc.minus(99999999999999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Value is too big');
        }
        expect(isErr).toBe(true);
    });

    it('Test multiple function with usual parametrs', function () {
        calc.multiply(10);
        expect(calc.result).toBe(10);
    });

    it('Test multiple function with minus parametrs', function () {
        calc.multiply(-10);
        expect(calc.result).toBe(-10);
    });

    it('Test multiple  function with string parametrs', function () {
        let isErr = false;
        try {
            calc.multiply('5');
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Unsupported parameter type');
        }
        expect(isErr).toBe(true);
    });

    it('Test multiply with big numbers', function () {
        let isErr = false;
        try {
            calc.multiply(99999999999999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Value is too big');
        }
        expect(isErr).toBe(true);
    });


    it('Test div function with usual parametrs', function () {
        calc.div(10);
        expect(calc.result).toBe(0.1);
    });

    it('Test div function with 0', function () {
        let isErr = false;
        try {
            calc.div(0);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('No 0 parametr');
        }
        expect(isErr).toBe(true);
    });


    it('Test div function with string parametrs', function () {
        let isErr = false;
        try {
            calc.div('5');
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Unsupported parameter type');
        }
        expect(isErr).toBe(true);
    });

    it('Test div function with minus parametrs', function () {
        calc.div(-5);
        expect(calc.result).toBe(-0.2);
    });

    it('Test div with big numbers', function () {
        let isErr = false;
        try {
            calc.div(99999999999999999999);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Value is too big');
        }
        expect(isErr).toBe(true);
    });

    it('Test getResult function with usual parametrs', function () {
        calc.plus(5);
        const res = calc.getResult();
        expect(res).toBe(6);
    });

    it('Test сleanUp function with usual parametrs', function () {
        calc.plus(5);
        calc.cleanUp();
        expect(calc.getResult()).toBe(1);
    });

})