"use strict";

import { magicNumber } from './constants.js';
import AnotherClass from './anotherFile.js';

export default class Test {
  constructor() {

  }
  test() {
    return `hello from main endpoint ${magicNumber}`;
  }
  testFromAnotherFile() {
    const anotherObject = new AnotherClass();
    return anotherObject.test();
  }
}

export { AnotherClass };