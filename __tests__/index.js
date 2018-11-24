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
  class Person {}

  expect(isPlainObj(new Date())).toBe(false);
  expect(isPlainObj(new String())).toBe(false); // eslint-disable-line no-new-wrappers
  expect(isPlainObj(new Person())).toBe(false);
  expect(isPlainObj(new Set([1]))).toBe(false);
  expect(isPlainObj(new Map())).toBe(false);
  expect(isPlainObj(new WeakMap())).toBe(false);
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
});

test("it returns false if it's an array", () => {
  expect(isPlainObj([])).toBe(false);
  expect(isPlainObj([1, 2, 3])).toBe(false);
  expect(isPlainObj([{}])).toBe(false);
});
