function Calculator() {
    this.firstNum = 0;
    this.secondNum = 0;
    this.read = function () {
        this.firstNum = Number(prompt("Enter number"));
        this.secondNum = Number(prompt("Enter one more number"));
    }
    this.sum = function () {
        console.log(this.firstNum + this.secondNum);
    }
    this.mul = function () {
        console.log(this.firstNum * this.secondNum);
    }
}

const myCalc = new Calculator()

myCalc.read() // зявиться 2 промпта
myCalc.sum() // поверне суму
myCalc.mul() // поверне добуток