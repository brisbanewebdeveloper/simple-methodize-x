<a
  href="https://travis-ci.org/Xotic750/simple-methodize-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/simple-methodize-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/simple-methodize-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/simple-methodize-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/simple-methodize-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/simple-methodize-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/simple-methodize-x"
  title="npm version">
<img src="https://badge.fury.io/js/simple-methodize-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/simple-methodize-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/simple-methodize-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/simple-methodize-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/simple-methodize-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/simple-methodize-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/simple-methodize-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_simple-methodize-x"></a>

## simple-methodize-x

Methodize a prototype method. Compliant to 8 arguments.

<a name="exp_module_simple-methodize-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

Methodize a prototype method. Compliant to 8 arguments.

**Kind**: Exported member  
**Returns**: <code>Function</code> - The static method.
**Throws**:

- <code>TypeError</code> If prototypeMethod is not a function.

| Param           | Type                  | Description           |
| --------------- | --------------------- | --------------------- |
| prototypeMethod | <code>Function</code> | The prototype method. |

**Example**

```js
import methodize from 'simple-methodize-x';

const push = methodize([].push);
const array = [];
push(array, 1);
push(array, 2);
console.log(array); // [1, 2]
```
