var ladder = {
    step: 0,
    up: function() { // вверх по драбині
        this.step++;
        return this;
    },
    down: function() { // вниз по драбині
        this.step--;
        return this;
    },
    showStep: function() { // вивести поточне значення
        alert( this.step );
    }
};


ladder.up().up().down().up().down().showStep();