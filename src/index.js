/**
 * Check if the given value is a plain object.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */
const isPlainObj = value => {
  if (typeof value !== "object") {
    return false;
  }

  if (value === undefined || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);

  if (prototype === null || prototype === Object.getPrototypeOf({})) {
    return true;
  }

  return value.constructor === Object;
};

export default isPlainObj;
