/* 
    Valid Formats:
    "555-555-5555",
    "(555)555-5555",
    "(555) 555-5555",
    "555 555 5555",
    "5555555555",
    "1 555 555 5555"] 
    */

export default function telephoneCheck(str) {
    return /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/.test(str) || /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/.test(str) ? true : false;
}