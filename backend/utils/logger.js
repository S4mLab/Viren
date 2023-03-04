const info = (...params) => {
  console.log(...params);
};

const errorInfo = (...params) => {
  console.error(...params);
};

module.exports = {
  info, errorInfo,
};
