// Validate user input
const validateLength = (input) => (input.length > 0 ? true : "Please enter at least one character");

const validateEmail = (email) =>
  /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : "Please enter a valid email address";

const validateNumber = (input) => (Number.isNaN(Number(input)) ? "Please enter a valid number." : true);

const validateLengthAndNumber = (input) => {
  if (validateLength(input) === true && validateNumber(input) === true) {
    return true;
  }

  return "Please enter at least one valid number";
};

module.exports = { validateLength, validateEmail, validateLengthAndNumber };
