// Creating a function that check if the array has subarray
//(Contigous) that can adds up to a target(17).
//
const hasContaSubarrayWithSum = (arr, target) => {

    // arr = [4, 2, 7, 1, 9, 5]
    let currentSum = 0; // an initial sum that we will compare to the target

    let start = 0; // The initial value's index(can be an offset, of where loop last stopped)

    // loop through all array value
    for (let end = 0; end < arr.length; end++) {

        currentSum += arr[end]; // add each new value to the sum

        //check if the currentSum did not become more than target.
        while (currentSum > target && start <= end) {

            //substracting the value before the least added
            currentSum -= arr[start];

            //updating the offset
            start++;
        }

        if (currentSum === target) {
            //if any subcontegousarray found we return true
            return true;
        }
    }
    // if there's no any contegous subarray that add up to target found we return false.
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 15;
console.log(hasContaSubarrayWithSum(arr, target));  // Output: true

//what considered was a time complexity O(n) which increases as the
//array increases  while space complexity O(1) will remain constant
//throughout the process becouse there is no introduction of many
//other arrays or sub arrays duringthe process