// CODEWARS: Extract the domain name from a URL
function domainName(url) {
    let start = 0;
    if (url.includes("www.") == true) {
        start = url.indexOf(".") + 1;
    } else if (url.includes("//") == true) {
        start = url.indexOf("//") + 2;
    } else {
        start = 0;
    }
    const end = (url.substring(start)).indexOf(".");
    return url.substring(start, (start + end));
}

module.exports = domainName;