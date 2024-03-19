const { describe, it, mock } = require("node:test");
const assert = require("node:assert");
const validator = require("./validate2");

function createString(len, s = "x", joinC = "") {
  return new Array(len).fill(s).join("");
}

describe("Validator for the user name", () => {
  it("should not allow empty input", async (t) => {
    await t.test("including null", () => {
      assert.throws(() => validator.validateAuthorName(null));
    });

    await t.test("including undefined", () => {
      assert.throws(() => validator.validateAuthorName(undefined));
    });

    await t.test("including empty string", () => {
      assert.throws(() => validator.validateAuthorName(""));
    });

    await t.test("including empty strings with whitespaces", () => {
      assert.throws(() => validator.validateAuthorName("              "));
    });
  });

  it("should not be too long", async (t) => {
    const MAX_LEN = 50;
    const expectedErr = new Error("Author name is unrealistically long");
    await t.test("testing just above the limit", () => {
      const testName = createString(MAX_LEN, "x", "");
      assert.throws(() => validator.validateAuthorName(testName), expectedErr);
    });

    await t.test("testing just under the limit", () => {
      const testName = createString(MAX_LEN - 1, "Peter", "");
      assert.ok(() => validator.validateAuthorName(testName));
    });
  });
});

describe("Checker of links being alive", () => {
  const link = "https://www.google.com";
  const fetchF = mock.fn((url) => {
    return { ok: true };
  });
  it("should try to load the link", () => {
    assert.strictEqual(fetchF.mock.calls.length, 0);
  });
  it("should try to load the link we actually specified", () => {
    validator.checkLinkAlive(link, fetchF);
    assert.deepStringEqual(fetchF.mock.calls[0].arguments, [link]);
    assert.strictEqual(fetchF.mock.calls.length, 2);
  });
});
