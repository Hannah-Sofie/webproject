const MAX_NAME_LENGTH = 50;
const MAX_EMAIL_LENGTH = 50;
const MAX_PASSWORD_LENGTH = 50;
const MIN_PASSWORD_LENGTH = 8;

function _checkIfEmpty(s) {
  // const = anotherS = (s || "default value");
  return s === undefined || s === null || !s.toString().trim().length;
}

/**
 *
 * @param {String} name
 */

function validateName(name) {
  // If empty, null, undefined
  if (_checkIfEmpty(name)) {
    throw "Name can't be empty";
  }
  name = name.toString().trim();

  // Max length is 50
  if (name.length > MAX_NAME_LENGTH) {
    throw new Error("Name is unrealistically long");
  }

  // Non-alphabet characters
  const nonAlphaCharRegexp = /[^a-z\-\u00C0-\u017F]/iu;
  if (nonAlphaCharRegexp.test(name)) {
    throw "Name can only contain letters and hyphens";
  }

  // At least two words (full name)
  const nameParts = name.split(" ").filter((x) => x.length);
  if (nameParts.length < 2) {
    throw new Error("Name must contain at least two words");
  }

  // No abbreviations
  if (nameParts.some((s) => s.replaceAll(".", "").length < 2)) {
    throw "Name can't contain abbreviations";
  }

  // No camelCase
  return (nameParts = nameParts
    .map((s) => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase())
    .join(" "));
}

function validateEmail(email) {
  // If empty, null, undefined
  if (_checkIfEmpty(email)) {
    throw "Email can't be empty";
  }
  email = email.toString().trim();

  // Max length
  if (email.length > MAX_EMAIL_LENGTH) {
    throw new Error("Email is too long");
  }

  // Basic email format validation
  const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegexp.test(email)) {
    throw "Invalid email format";
  }

  return email;
}

function validatePassword(password) {
  if (_checkIfEmpty(password)) {
    throw "Password can't be empty";
  }
  password = password.toString().trim();

  // Max and min length
  if (
    password.length < MIN_PASSWORD_LENGTH ||
    password.length > MAX_PASSWORD_LENGTH
  ) {
    throw new Error(
      `Password must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters long`
    );
  }

  // Complexity requirements
  if (!/[A-Z]/.test(password))
    throw "Password must include an uppercase letter";
  if (!/[a-z]/.test(password)) throw "Password must include a lowercase letter";
  if (!/[0-9]/.test(password)) throw "Password must include a digit";
  if (!/[\!\@\#\$\%\^\&\*]/.test(password))
    throw "Password must include a special character";

  return password;
}

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
