
var sumOddLengthSubarrays = function (arr) {
    let len = arr.length, tSum = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let sum = 0, ctr = 0;

            for (let k = i; k <= j; k++) {
                sum += arr[k];
                ctr++;
            }

            if (ctr % 2 !== 0) {
                tSum += sum;
            }
        }
    }

    return tSum;
};


// Another solution - O(n)
var sumOddLengthSubarrays = function (arr) {
    let sum = 0, len = arr.length;
    for (let i = 0; i < len; i++)
        sum += Math.ceil((i + 1) * (len - i) / 2) * arr[i];

    return sum;
};