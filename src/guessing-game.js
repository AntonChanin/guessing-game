var output = 0;
var low, high = 0;
var mid = 0;
class GuessingGame {
    
    constructor() {
    }

    setRange(min, max) {
        low = min;
        high = max-1;
    }

    guess() {
        console.log(number);
        while (low <= high) {
            mid = (low + high) / 2;
            output = mid;
            if (number == mid) {
                output = mid;
            }
            else {
                if (number > mid) {
                    this.lower();
                } else {
                    this.greater();
                }
            }
        }
        return parseInt(output);
    }

    lower() {
        return low = mid + 1;
    }

    greater() {
        return high = mid - 1;
    }
}

module.exports = GuessingGame;
