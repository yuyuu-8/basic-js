const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  const addition = options.addition !== undefined ? String(options.addition) : '';

  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  let repeatedAddition = addition;
  if (options.additionRepeatTimes !== undefined) {
    repeatedAddition = Array(options.additionRepeatTimes)
      .fill(addition)
      .join(additionSeparator);
  }

  const combinedStr = str + repeatedAddition;

  let result = combinedStr;
  if (options.repeatTimes !== undefined) {
    result = Array(options.repeatTimes)
      .fill(combinedStr)
      .join(separator);
  }

  return result;
}

module.exports = {
  repeater
};
