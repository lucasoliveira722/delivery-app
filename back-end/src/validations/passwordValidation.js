const decryptPass = require('../helpers/decryptPass');

const passwordValidation = async (pw, dbPw) => {
  const correctPw = await decryptPass(pw, dbPw);
  return correctPw;
};

module.exports = passwordValidation;
