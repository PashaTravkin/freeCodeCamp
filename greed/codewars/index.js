function countPositivesSumNegatives(input) {

    let number = 0;
    let y;
    let sum = 0;
    let i;
    if (input != null) {
        for (y = 0; y < input.length; y++) {
            if (input[y] > 0) {
                number++;
            }
        }
        for (i = 0; i < input.length; i++) {
            if (input[i] < 0) {
                sum += input[i];
            }
        }
        return [number, sum];
    } else {
        return [];
    }
}