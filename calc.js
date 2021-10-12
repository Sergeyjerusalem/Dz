function Calculator() {

    this.result = null;

    this.GetLastResult = () => this.result;

    this.sum = (a, b) => {
        this.result = a + b;
        console.log('Sum', this.result);
        return this.result;
    }

    this.minus = (a, b) => {
        this.result = a - b;
        console.log('Subtr', this.result);
        return this.result;
    }

    this.multiple = (a, b) => {
        this.result = a * b;
        console.log('Mult', this.result);
        return this.result;
    }

    this.division = (a, b) => {
        this.result = a / b;
        console.log('Div', this.result);
        return this.result;
    }
}

module.exports = Calculator;