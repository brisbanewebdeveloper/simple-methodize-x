import call from 'simple-call-x';
import pusher from 'util-pusher-x';
var toStringTag = {}.toString;
var ERROR_MESSAGE = 'methodize called on incompatible ';
var funcType = '[object Function]';

var assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && call(toStringTag, value) !== funcType) {
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
  assertIsFunction(prototypeMethod);
  return function methodized() {
    /* eslint-disable-next-line prefer-rest-params */
    return call(prototypeMethod, arguments[0], pusher(arguments, 1));
  };
};

export default methodize;

//# sourceMappingURL=simple-methodize-x.esm.js.map