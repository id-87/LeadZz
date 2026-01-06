module.exports = (button) => {
  const map = {
    "Email Open": "EMAIL_OPEN",
    "Page View": "PAGE_VIEW",
    "Form Submit": "FORM_SUBMIT",
    "Demo Request": "DEMO_REQUEST",
    "Purchase": "PURCHASE"
  };

  return map[button];
};
