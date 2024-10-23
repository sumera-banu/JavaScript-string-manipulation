// capiltalize first lettter
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// convert to camel case
function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '');
}

// Reverse a String

function reverse(str) {
    return str.split('').reverse().join('');
}

// Check if a String Contains a Substring

function contains(str, substring) {
    return str.includes(substring);
}

// 5. Repeat a String

function repeat(str, num) {
    return str.repeat(num);
}

// 6. Trim Whitespace

function trim(str) {
    return str.trim();
}

// 7. Truncate a String

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

// 8. Convert to Snake Case
function toSnakeCase(str) {
    return str
        .replace(/\s+/g, '_')
        .toLowerCase();
}

// 9. Convert to Kebab Case

function toKebabCase(str) {
    return str
        .replace(/\s+/g, '-')
        .toLowerCase();
}

// 10. Remove Vowels
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}

// 11. Count Vowels
function countVowels(str) {
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
}

// 12. Pad a String
function pad(str, length, char = ' ') {
    return str.padStart((str.length + length) / 2, char).padEnd(length, char);
}

// 13. Replace All Occurrences
function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
}

// 14. Remove Non-Alphanumeric Characters

function removeNonAlphanumeric(str) {
    return str.replace(/[^a-z0-9]/gi, '');
}

// 15. Check if a String is a Palindrome

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

// 16. Convert to Title Case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// 17. Escape HTML Characters
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 18. Unescape HTML Characters
function unescapeHTML(str) {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}

// 19. Remove Duplicates
function removeDuplicates(str) {
    return Array.from(new Set(str)).join('');
}

// 20. Count Occurrences of a Character
function countOccurrences(str, char) {
    return str.split(char).length - 1;
}

// 21. Left Pad a String
function leftPad(str, length, char = ' ') {
    return str.padStart(length, char);
}

// 22. Right Pad a String
function rightPad(str, length, char = ' ') {
    return str.padEnd(length, char);
}

// 23. Replace First Occurrence
function replaceFirst(str, search, replacement) {
    return str.replace(search, replacement);
}

// 24. Capitalize Every Word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// 25. Check if String Starts With a Substring
function startsWith(str, substring) {
    return str.startsWith(substring);
}

// 26. Check if String Ends With a Substring
function endsWith(str, substring) {
    return str.endsWith(substring);
}

// 27. Insert Substring at a Specific Position
function insertAt(str, index, substring) {
    return str.slice(0, index) + substring + str.slice(index);
}

// 28. Slugify a String
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

// 29. Remove Extra Whitespace Between Words
function removeExtraWhitespace(str) {
    return str.trim().replace(/\s+/g, ' ');
}

// 30. Repeat Each Character in a String
function repeatCharacters(str, num) {
    return str.split('').map(char => char.repeat(num)).join('');
}

// 31. Convert String to Binary
function toBinary(str) {
    return str.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

// 32. Convert Binary to String
function fromBinary(binaryStr) {
    return binaryStr.split(' ')
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');
}

// 33. Get ASCII Code of a Character
function charCodeAt(str, index) {
    return str.charCodeAt(index);
}

// 34. Remove Numbers from a String
function removeNumbers(str) {
    return str.replace(/[0-9]/g, '');
}

// 35. Split a String by a Delimiter
function splitByDelimiter(str, delimiter) {
    return str.split(delimiter);
}

// 36. Mask a String
function maskString(str, maskChar = '*', unmaskedLength = 4) {
    const maskedSection = str.slice(0, -unmaskedLength).replace(/./g, maskChar);
    return maskedSection + str.slice(-unmaskedLength);
}

// 37. Extract Domain from Email
function extractDomain(email) {
    return email.substring(email.indexOf('@') + 1);
}

// 38. Extract File Extension
function getFileExtension(filename) {
    return filename.split('.').pop();
}

// 39. Convert String to Base64
function toBase64(str) {
    return Buffer.from(str).toString('base64');
}

// 40. Decode Base64 to String
function fromBase64(base64Str) {
    return Buffer.from(base64Str, 'base64').toString('utf-8');
}

// 41. Check if String Contains Only Alphabets
function isAlphabetic(str) {
    return /^[A-Za-z]+$/.test(str);
}

// 42. Check if String is Numeric
function isNumeric(str) {
    return /^[0-9]+$/.test(str);
}

// 43. Remove Special Characters
function removeSpecialCharacters(str) {
    return str.replace(
        /[^a-zA-Z0-9]/g, '');
}

// 44. Extract Numbers from a String
function extractNumbers(str) {
    return str.replace(/\D/g, '');
}

// 45. Extract Letters from a String
function extractLetters(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}

// 46. Capitalize Alternate Letters
function capitalizeAlternate(str) {
    return str.split('').map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
}

// 47. Find Longest Word in a Sentence
function longestWord(str) {
    return str.split(' ').reduce((longest, currentWord) =>
        currentWord.length > longest.length ? currentWord : longest, ''
    );
}

// 48. Count Words in a String
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// 49. Convert String to Hexadecimal
function toHex(str) {
    return Array.from(str)
        .map(char => char.charCodeAt(0).toString(16))
        .join('');
}

// 50. Convert Hexadecimal to String
function fromHex(hexStr) {
    return hexStr.match(/.{1,2}/g)
        .map(byte => String.fromCharCode(parseInt(byte, 16)))
        .join('');
}

// 51. Generate Random String
function randomString(length) {
    return Math.random().toString(36).substring(2, length + 2);
}

// 52. Convert Underscore/Hyphen to Spaces
function toSpaces(str) {
    return str.replace(/[_-]/g, ' ');
}

// 53. Convert Spaces to Underscores
function toUnderscores(str) {
    return str.replace(/\s+/g, '_');
}

// 54. Check if String is Valid URL
function isValidURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|(\\d{1,3}\\.){3}\\d{1,3})' + // domain name or IP
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(str);
}

// 55. Check if String is Valid Emai
function isValidEmail(str) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(str);
}

// 56. Check if String is All Uppercase
function isUpperCase(str) {
    return str === str.toUpperCase();
}

// 57. Check if String is All Lowercase
function isLowerCase(str) {
    return str === str.toLowerCase();
}

// 58. Find and Replace a Word in a String
function replaceWord(str, oldWord, newWord) {
    return str.replace(new RegExp(`\\b${oldWord}\\b`, 'g'), newWord);
}

// 59. Highlight a Word in a String
function highlightWord(str, word, tag = 'strong') {
    return str.replace(new RegExp(`(${word})`, 'gi'), `<${tag}>$1</${tag}>`);
}

// 60. Check if String is Blank
function isBlank(str) {
    return !str || /^\s*$/.test(str);
}

export {
    capitalize,
    toCamelCase,
    reverse,
    contains,
    repeat,
    trim,
    truncate,
    toSnakeCase,
    toKebabCase,
    removeVowels,
    countVowels,
    pad,
    replaceAll,
    removeNonAlphanumeric,
    isPalindrome,
    toTitleCase,
    escapeHTML,
    unescapeHTML,
    removeDuplicates,
    countOccurrences,
    leftPad,
    rightPad,
    replaceFirst,
    capitalizeWords,
    startsWith,
    endsWith,
    insertAt,
    slugify,
    removeExtraWhitespace,
    repeatCharacters,
    toBinary,
    fromBinary,
    charCodeAt,
    removeNumbers,
    splitByDelimiter,
    maskString,
    extractDomain,
    getFileExtension,
    toBase64,
    fromBase64,
    isAlphabetic,
    isNumeric,
    removeSpecialCharacters,
    extractNumbers,
    extractLetters,
    capitalizeAlternate,
    longestWord,
    countWords,
    toHex,
    fromHex,
    randomString,
    toSpaces,
    toUnderscores,
    isValidURL,
    isValidEmail,
    isUpperCase,
    isLowerCase,
    replaceWord,
    highlightWord,
    isBlank


};





