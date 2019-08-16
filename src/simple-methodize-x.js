import bind from 'simple-bind-x';

const {call} = bind;
const toStringTag = bind(call, {}.toString);
const ERROR_MESSAGE = 'methodize called on incompatible ';
const funcType = '[object Function]';

const assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && toStringTag(value) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + value);
  }

  return value;
};

/**
 * Methodize a prototype method. Compliant to 8 arguments.
 *
 * @param {Function} prototypeMethod - The prototype method to methodize.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The static method.
 */
const methodize = function methodize(prototypeMethod) {
  return bind(call, assertIsFunction(prototypeMethod));
};

export default methodize;
