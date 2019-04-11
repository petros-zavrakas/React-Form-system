class FormValidator {
  isRequired(value) {
    return value !== ""
      ? { valid: true, message: "" }
      : { valid: false, message: "This field is required." };
  }

  isNumber(value) {
    return !isNaN(value)
      ? { valid: true, message: "" }
      : { valid: false, message: `This field should be a number. "${value}" is not a number.` };
  }

  isString(value) {
    return value === '' || (isNaN(value) && value.match(/^[0-9a-z]+$/))
      ? { valid: true, message: "" }
      : { valid: false, message: `This field should be a string. "${value}" is not a string.` };
  }
}

export default new FormValidator();
