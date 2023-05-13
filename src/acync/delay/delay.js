const delayMs = (collback, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(collback());
    }, ms);
  });
};

module.exports = delayMs;
