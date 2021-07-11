function log(req, res, next) {
  console.log("logging...");
  next();
}
function logauthenticate(req, res, next) {
  console.log("authenticating...");
  next();
}
module.exports = { log, logauthenticate };
