const MAX_NAME_LENGTH = 50;
const MAX_URL_LENGTH = 4096;
const urlShorteners = require("../util/util.shorteners.list");

function _checkIfEmpty(s) {
  // const = anotherS = (s || "default value");
  return s === undefined || s === null || !s.toString().trim().length;
}

/**
 *
 * @param {String} name
 */

function checkLineAlive(url, fetchF = fetch) {
  return Promise.race([
    fetchF(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), MAX_LINK_ALIVE_WAIT)
    ),
  ]).then((resp) => {
    if (!resp.ok) {
      console.log("Result for ", url, resp.status, resp.statusText);
      return Promise.reject("Link not alive.");
    }
  });
}

function validateAuthorName(name) {
  // If empty, null, undefined
  if (_checkIfEmpty(name)) {
    throw "Author name can't be empty";
  }
  name = name.toString().trim();

  // Max length is 50
  if (name.length > MAX_NAME_LENGTH) {
    throw new Error("Author name is unrealistically long");
  }

  // Non-alphabet characters
  const nonAlphaCharRegexp = /[^a-z\-\u00C0-\u017F]/iu;
  if (nonAlphaCharRegexp.test(name)) {
    throw "Author name can only contain letters and hyphens";
  }

  // At least two words (full name)
  const nameParts = name.split(" ").filter((x) => x.length);
  if (nameParts.length < 2) {
    throw new Error("Author name must contain at least two words");
  }

  // No abbreviations
  if (nameParts.some((s) => s.replaceAll(".", "").length < 2)) {
    throw "Author name can't contain abbreviations";
  }

  // No camelCase
  return (nameParts = nameParts
    .map((s) => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase())
    .join(" "));
}

function validateURL(link) {
  if (_checkIfEmpty(link)) {
    throw "Link can't be empty";
  }
  link = link.toString().trim(); // Accounting for non-string data being passed in

  // Check max length
  if (link.length > MAX_URL_LENGTH) {
    throw "Link is too long";
  }

  // Only http/s allowed
  if (link.indexOf("http") !== 0) {
    throw "Link must start with http or https";
  }

  // Check if valid URL
  try {
    var url = new URL(link);
  } catch (e) {
    // Catching to replace errors with our own messages
    throw "Invalid URL";
  }

  // No link shorteners
  if (urlShorteners.some((shortUrl) => url.host.indexOf(shortener) !== -1)) {
    throw "Link shorteners are not allowed";
  }
  return url;
}

module.exports = {
  checkLineAlive,
  validateAuthorName,
  validateURL,
};
