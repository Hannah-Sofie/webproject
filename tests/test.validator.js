const { describe, it, mock } = require("node:test");
const assert = require("node:assert");
const validator = require("./validate");

function createString(len, s = "x") {
  return new Array(len).fill(s).join("");
}

// Name
describe("Validator for the name", () => {
  it("should not allow empty input", async (t) => {
    await t.test("including null", () => {
      assert.throws(() => validator.validateName(null), /Name can't be empty/);
    });

    await t.test("including undefined", () => {
      assert.throws(
        () => validator.validateName(undefined),
        /Name can't be empty/
      );
    });

    await t.test("including empty string", () => {
      assert.throws(() => validator.validateName(""), /Name can't be empty/);
    });

    await t.test("including empty strings with whitespaces", () => {
      assert.throws(
        () => validator.validateName("              "),
        /Name can't be empty/
      );
    });
  });

  it("should not be too long", async (t) => {
    const MAX_LEN = 50;
    await t.test("testing just above the limit", () => {
      const testName = createString(MAX_LEN + 1);
      assert.throws(
        () => validator.validateName(testName),
        /Name is unrealistically long/
      );
    });

    await t.test("testing just under the limit", () => {
      const testName = createString(MAX_LEN - 1, "Peter", "");
      assert.ok(() => validator.validateAuthorName(testName));
    });
  });
});

// Email
describe("Validator for the email", () => {
  it("should not allow empty input", async (t) => {
    await t.test("including null", () => {
      assert.throws(
        () => validator.validateEmail(null),
        /Email can't be empty/
      );
    });

    await t.test("including undefined", () => {
      assert.throws(
        () => validator.validateEmail(undefined),
        /Email can't be empty/
      );
    });

    await t.test("including empty string", () => {
      assert.throws(() => validator.validateEmail(""), /Email can't be empty/);
    });

    await t.test("including empty strings with whitespaces", () => {
      assert.throws(
        () => validator.validateEmail("              "),
        /Email can't be empty/
      );
    });
  });

  it("should not exceed maximum length", async (t) => {
    const MAX_LEN = 50;
    await t.test("when length is just above the limit", () => {
      const testEmail = createString(MAX_LEN + 1, "a") + "@example.com";
      assert.throws(
        () => validator.validateEmail(testEmail),
        /Email is too long/
      );
    });

    await t.test("when length is just under the limit", () => {
      const testEmail = createString(MAX_LEN - 12, "a") + "@example.com";
      try {
        validator.validateEmail(testEmail);
        assert.ok(true);
      } catch (error) {
        assert.fail(error.message);
      }
    });
  });

  it("should validate email format correctly", async (t) => {
    await t.test("valid email", () => {
      const validEmail = "email@example.com";
      assert.strictEqual(validator.validateEmail(validEmail), validEmail);
    });

    await t.test("invalid email without @ symbol", () => {
      const invalidEmail = "emailatexample.com";
      assert.throws(
        () => validator.validateEmail(invalidEmail),
        /Invalid email format/
      );
    });

    await t.test("invalid email with spaces", () => {
      const invalidEmail = "email @example.com";
      assert.throws(
        () => validator.validateEmail(invalidEmail),
        /Invalid email format/
      );
    });

    await t.test("invalid email with missing domain", () => {
      const invalidEmail = "email@";
      assert.throws(
        () => validator.validateEmail(invalidEmail),
        /Invalid email format/
      );
    });

    await t.test("invalid email with missing extension", () => {
      const invalidEmail = "email@example";
      assert.throws(
        () => validator.validateEmail(invalidEmail),
        /Invalid email format/
      );
    });
  });
});

// Password
describe("Validator for the password", () => {
  it("should not allow empty input", async (t) => {
    await t.test("including null", () => {
      assert.throws(
        () => validator.validatePassword(null),
        /Password can't be empty/
      );
    });

    await t.test("including undefined", () => {
      assert.throws(
        () => validator.validatePassword(undefined),
        /Password can't be empty/
      );
    });

    await t.test("including empty string", () => {
      assert.throws(
        () => validator.validatePassword(""),
        /Password can't be empty/
      );
    });

    await t.test("including empty strings with whitespaces", () => {
      assert.throws(
        () => validator.validatePassword("              "),
        /Password can't be empty/
      );
    });
  });

  it("should meet length requirements", async (t) => {
    await t.test("too short", () => {
      const MIN_PASSWORD_LENGTH = 8;
      const password = createString(MIN_PASSWORD_LENGTH - 1);
      assert.throws(
        () => validator.validatePassword(password),
        /Password must be between/
      );
    });

    await t.test("too long", () => {
      const MAX_PASSWORD_LENGTH = 50;
      const password = createString(MAX_PASSWORD_LENGTH + 1);
      assert.throws(
        () => validator.validatePassword(password),
        /Password must be between 8 and 50 characters long/
      );
    });

    await t.test("just right", () => {
      const password = "Aa1!Aa1!";
      try {
        validator.validatePassword(password);
        assert.ok(true);
      } catch (error) {
        assert.fail("Unexpected error: " + error.message);
      }
    });
  });

  it("should include required character types", async (t) => {
    await t.test("missing uppercase letter", () => {
      const password = "aa1!aa1!";
      assert.throws(
        () => validator.validatePassword(password),
        /Password must include an uppercase letter/
      );
    });

    await t.test("missing lowercase letter", () => {
      const password = "AA1!AA1!";
      assert.throws(
        () => validator.validatePassword(password),
        /Password must include a lowercase letter/
      );
    });

    await t.test("missing digit", () => {
      const password = "Aa!Aa!Aa";
      assert.throws(
        () => validator.validatePassword(password),
        /Password must include a digit/
      );
    });

    await t.test("missing special character", () => {
      const password = "Aa1Aa1Aa1";
      assert.throws(
        () => validator.validatePassword(password),
        /Password must include a special character/
      );
    });
  });
});
