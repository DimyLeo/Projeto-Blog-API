const errorMap = {
  USER_INVALID: 400,
  EMAIL_REGISTERED: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = { errorMap, mapError };