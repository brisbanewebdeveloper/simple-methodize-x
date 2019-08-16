import bind from 'simple-bind-x';
var call = bind.call;
var toStringTag = bind(call, {}.toString);
var ERROR_MESSAGE = 'methodize called on incompatible ';
var funcType = '[object Function]';

var assertIsFunction = function assertIsFunction(value) {
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


var methodize = function methodize(prototypeMethod) {
  return bind(call, assertIsFunction(prototypeMethod));
};

export default methodize;

//# sourceMappingURL=simple-methodize-x.esm.js.map