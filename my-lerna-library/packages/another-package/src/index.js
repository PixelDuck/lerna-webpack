"use strict";

console.info('index.js from another-package was loaded!');
import logo from '../assets/logo.svg';
import bigSVG from '../assets/Trajans-Column-lower-animated.svg';

class AnotherClass {
  constructor() {

  }
  test() {
    return `hello from another-package`;
  }
}

export {
  logo, bigSVG, AnotherClass
} 