class GuessingGame {
    
    constructor() {
        this.min = 0;
        this.max = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max - 1;
    }

    guess() {
        let output = 0;
        let number = 0;
        this.mid = Math.ceil((this.min + this.max) / 2);
        output = this.mid;
        if (number == this.mid) {
            output = this.mid;
        }
        return output + 1;
    }

    lower() {
        this.max = this.mid - 1;
    }

    greater() {
        this.min = this.mid + 1;
    }
}

module.exports = GuessingGame;
