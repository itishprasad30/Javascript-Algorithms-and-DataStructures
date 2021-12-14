# Marvel Comics Characters

[![Build Status](https://travis-ci.org/jewei/marvel-comics-characters.svg?branch=master)](https://travis-ci.org/jewei/marvel-comics-characters)
[![codecov.io](https://codecov.io/github/jewei/marvel-comics-characters/coverage.svg?branch=master)](https://codecov.io/github/jewei/marvel-comics-characters?branch=master)
[![Dependency Status](https://david-dm.org/jewei/marvel-comics-characters.svg)](https://david-dm.org/jewei/marvel-comics-characters)
[![devDependency Status](https://david-dm.org/jewei/marvel-comics-characters/dev-status.svg)](https://david-dm.org/jewei/marvel-comics-characters#info=devDependencies)

Get random Marvel hero or villain names.

## Installation

This package is distributed via npm:

```
npm install marvel-comics-characters
```

## Usage

```javascript
var names = require('marvel-comics-characters');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```
