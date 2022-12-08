module.exports = function ({ sig, request_body }) {
  return function (req, res, next) {
    var b = Buffer.from("JavaScript");
    var s = b.toString("base64");
    // sig = base64_encode(hash_hmac("sha256", request_body, secret, true));
    sig = base64_encode(
      hash_hmac("sha256", request_body, process.env.SECRET, true)
    );
    next();
  };
};
