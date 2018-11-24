/* global expect:false, test:false */
import isPlainObj from "../src";

test("it returns true if it's an object literal", () => {
  expect(isPlainObj({})).toBe(true);
  expect(isPlainObj({ foo: "bar" })).toBe(true);
  expect(isPlainObj({ foo: null })).toBe(true);
  expect(isPlainObj({ foo: undefined })).toBe(true);
  expect(isPlainObj({ foo: false })).toBe(true);
});

test("it returns true if it's a plain object", () => {
  expect(isPlainObj(Object.create(null))).toBe(true);
  expect(isPlainObj(Object.create({}))).toBe(true);
  expect(isPlainObj(Object.create({ foo: "bar" }))).toBe(true);
  expect(isPlainObj(new Object())).toBe(true); // eslint-disable-line no-new-object
});

test("it returns false if it's a class instance", () => {
  expect(isPlainObj(new Date())).toBe(false);
  expect(isPlainObj(new Error())).toBe(false);
  expect(isPlainObj(new Function())).toBe(false); // eslint-disable-line no-new-func
  expect(isPlainObj(new Boolean(true))).toBe(false); // eslint-disable-line no-new-wrappers
  expect(isPlainObj(new String())).toBe(false); // eslint-disable-line no-new-wrappers
  expect(isPlainObj(new RegExp("\\s"))).toBe(false);
  expect(isPlainObj(new Promise(() => {}))).toBe(false);

  expect(isPlainObj(new Set([1]))).toBe(false);
  expect(isPlainObj(new Map())).toBe(false);
  expect(isPlainObj(new WeakMap())).toBe(false);

  class Person {}
  expect(isPlainObj(new Person())).toBe(false);
});

test("it returns false if it's not an object type", () => {
  expect(isPlainObj(undefined)).toBe(false);
  expect(isPlainObj(null)).toBe(false);
  expect(isPlainObj(true)).toBe(false);
  expect(isPlainObj(false)).toBe(false);
  expect(isPlainObj(100)).toBe(false);
  expect(isPlainObj(-100)).toBe(false);
  expect(isPlainObj(3.14)).toBe(false);
  expect(isPlainObj(-3.14)).toBe(false);
  expect(isPlainObj("")).toBe(false);
  expect(isPlainObj(" ")).toBe(false);
  expect(isPlainObj("foo")).toBe(false);
  expect(isPlainObj(Infinity)).toBe(false);
  expect(isPlainObj(NaN)).toBe(false);
});

test("it returns false if it's an array", () => {
  expect(isPlainObj([])).toBe(false);
  expect(isPlainObj([1, 2, 3])).toBe(false);
  expect(isPlainObj([{}])).toBe(false);
});

test("it returns false if it's a function", () => {
  expect(isPlainObj(() => "bar")).toBe(false);
  expect(isPlainObj(() => ({ foo: "bar" }))).toBe(false);
  expect(isPlainObj(parseInt)).toBe(false);
  expect(isPlainObj(isNaN)).toBe(false); // eslint-disable-line no-restricted-globals
});
