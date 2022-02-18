var assert = require("assert");
var crypto = require("crypto");
const secret = "assfuckshitcunt";
var outputEncoding = "hex";
var algorithm = "aes256";
var inputEncoding = "utf8";
let ivlength = 16;
var key = Buffer.from("bullshitbullshitbullshitbullshit", "latin1");
function encrypt(obj) {
  const text = JSON.stringify(obj);
  var iv = crypto.randomBytes(ivlength);

  var cipher = crypto.createCipheriv(algorithm, key, iv);
  var ciphered = cipher.update(text, inputEncoding, outputEncoding);
  ciphered += cipher.final(outputEncoding);
  //we append the iv to the beginning of the string
  var ciphertext = iv.toString(outputEncoding) + ":" + ciphered;

  const hash = crypto
    .createHmac("sha256", secret)
    .update(ciphered)
    .digest("hex");

  ciphertext = hash + ":" + ciphertext;

  return ciphertext;
}

function decrypt(ciphertext) {
  var components = ciphertext.split(":");

  var hmac = components.shift();
  var iv_from_ciphertext = Buffer.from(components.shift(), outputEncoding);
  components = components.join();
  const hash = crypto
    .createHmac("sha256", secret)
    .update(components)
    .digest("hex");
  var decipher = crypto.createDecipheriv(algorithm, key, iv_from_ciphertext);
  var deciphered = decipher.update(components, outputEncoding, inputEncoding);

  deciphered += decipher.final(inputEncoding);

  const hmacValid = hmac === hash;
  return { deciphered: deciphered, hmacValid: hmacValid };
}
module.exports = { encrypt, decrypt };
