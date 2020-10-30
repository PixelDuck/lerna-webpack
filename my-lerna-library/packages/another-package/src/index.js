"use strict";

console.info('index.js from another-package was loaded!');
import logo from '../assets/logo.svg';
import bigSVG from '../assets/Trajans-Column-lower-animated.svg';

const { magicNumber } = myLernaLibraryCommon.constants

class AnotherClass {
  constructor() {
  }
  test() {
    return `hello from another-package ${magicNumber}`;
  }
}

export {
  logo, bigSVG, AnotherClass
} 