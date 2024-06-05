// This function will change a string
//to a reverse if divisble by 3,
//to a ASCII codes if divisible by 5,
//to reverse and ASCII if divisible by both 5 and 3.

const transformGivenString = (str) => {

    // let's build helpfull functions

    function reverseString(s) {
        return s.split('').reverse().join('');
    }
    function toAsciiCodes(s) {
        return s.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    //main function

    const len = str.length;

    //firstly let's check if it is devisible by both 5 and 3.
    //if so it must also be devisible by 15(LCM)
    if (len % 15 === 0) {

        return toAsciiCodes(reverseString(str));

    } else if (len % 3 === 0) {

        // If length is divisible by 3, reverse the string
        return reverseString(str);

    } else if (len % 5 === 0) {

        // If length is divisible by 5, convert to ASCII codes

        return toAsciiCodes(str);
    } else {
        // If none of the above conditions are met, the str remains the same
        return str;
    }
}

// Example usage:
console.log(transformGivenString("samson")); // 6 characters Output: "nosmas"
console.log(transformGivenString("paper")); // 5 characters Output: "112 97 112 101 114"
console.log(transformGivenString("NIYONIZERASAMSO")); // 15 characters output: "79 83 77 65 83 65 82 69 90 73 78 79 89 73 78"
console.log(transformGivenString("word")); // 4 characters output: "word" not changed
