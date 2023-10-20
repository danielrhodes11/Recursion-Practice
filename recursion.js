/** product: calculate the product of an array of numbers. */

function product(nums) {
  const [first, ...rest] = nums;
  if (rest.length === 0) return first;
  return first * product(rest);

}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  const [first, ...rest] = words;
  if (rest.length === 0) return first.length;
  return Math.max(first.length, longest(rest));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  const [first, second, ...rest] = str;
  if (rest.length === 0) return first;
  return first + everyOther(rest);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  const [first, ...rest] = str;
  if (rest.length === 0) return true;
  if (first !== rest[rest.length - 1]) return false;
  return isPalindrome(rest.slice(0, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  const [first, ...rest] = arr;
  if (rest.length === 0) return -1;
  if (first === val) return 0;
  const index = findIndex(rest, val);
  if (index === -1) return -1;
  return index + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  const [first, ...rest] = str;
  if (rest.length === 0) return first;
  return revString(rest) + first;

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") strings.push(obj[key]);
    if (typeof obj[key] === "object") strings.push(...gatherStrings(obj[key]));
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === val) return mid;
  if (arr.length === 1) return -1;
  if (arr[mid] > val) return binarySearch(arr.slice(0, mid), val);
  const index = binarySearch(arr.slice(mid), val);
  if (index === -1) return -1;
  return mid + index;

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
