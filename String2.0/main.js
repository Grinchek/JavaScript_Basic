let myString = "just trying to count all spces";
let spaceCounter = (myString.split(" ").length - 1);
console.log(`There are ${spaceCounter} spaces in string.`);
console.log("----------------------------------------------");
let firstCharUpper = myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(firstCharUpper);
console.log("----------------------------------------------");
let wordCounter = (myString.split(" ").length);
console.log(`There are ${wordCounter} words in string.`);
console.log("----------------------------------------------");
let words = myString.split(" ");
let abbreviation = "";
for (word of words) {
    abbreviation += word.charAt(0).toUpperCase();
}
console.log(abbreviation);
console.log("----------------------------------------------");
let stringForPalindrome = "otto";
let reverseStr = stringForPalindrome.split('').reverse().join('');
reverseStr == stringForPalindrome ? console.log("Palindrome") : console.log("Not palindrome");
console.log("----------------------------------------------");
// Here i use methods of URL object, which i found in google
const url = "https://fs1.itstep.org/api/v1/files/RGwIFSYCfaXxqI-8PJmx1brff9ql3YLd?inline=true";
const parsedUrl = new URL(url);
const protocol = parsedUrl.protocol.slice(0, -1);
const domain = parsedUrl.hostname;
const path = parsedUrl.pathname;

console.log(`Protocol ${protocol}\nDomain ${domain}\nPath ${path}`);