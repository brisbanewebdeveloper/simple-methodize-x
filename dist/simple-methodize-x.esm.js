import call from 'simple-call-x';
var toStringTag = {}.toString;
var ERROR_MESSAGE = 'methodize called on incompatible ';
var funcType = '[object Function]';

var assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && call(toStringTag, value) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + value);
  }

  return value;
};

var pushAll = function pushAll(arrayLike, from) {
  var len = arrayLike.length;
  var target = [];

  for (var i = from || 0; i < len; i += 1) {
    target[target.length] = arrayLike[i];
  }

  return target;
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
    return call(prototypeMethod, arguments[0], pushAll(arguments, 1));
  };
};

export default methodize;

//# sourceMappingURL=simple-methodize-x.esm.js.map