class Calculator {
    constructor() {
        this.result = 1;
    }
    plus(n) {   
        if (typeof n !== 'number') throw new Error ('Unsupported parameter type');
        if ( n > 9999999999) throw new Error ('Value is too big');

        this.result = this.result + n;
        return this;
    }

    minus(n) {
        if (typeof n !== 'number') throw new Error ('Unsupported parameter type');
        if ( n > 9999999999) throw new Error ('Value is too big');

        this.result = this.result - n;
        return this;
    }

    multiply(n) {
        if (typeof n !== 'number') throw new Error ('Unsupported parameter type');
        if ( n > 9999999999) throw new Error ('Value is too big');

        this.result = this.result * n;
        return this;
    }

    div(n) {
        if (n === 0) throw new Error('No 0 parametr');
        if (typeof n !== 'number') throw new Error ('Unsupported parameter type')
        if ( n > 9999999999) throw new Error ('Value is too big');

        this.result = this.result / n;
        return this;
    }

    getResult() {
        return this.result; 
    }

    cleanUp() {
        this.result = 1;
    }

}

module.exports = Calculator;