exports.buildEvent = (button) => {
  return {
    button,
    timestamp: new Date()
  };
};
