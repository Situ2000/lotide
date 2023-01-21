# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yuanyuan_situ/lotide`

**Require it:**

`const _ = require('@yuanyuan_situ/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(...)`: Take in a string, and return a count of each of the letters.
* `countOnly(...)`: Count frequency appearing in an array for truthy keys in an object.
* `eqArrays(...)`: Compare two arrays whether are equal.
* `eqObjects(...)`: Compare two objects whether are equal.
* `findKey(...)`: Return the first key on an object for callback returns a truthy value.
* `findKeyByValue(...)`: Search for a key on an object by a given value.
* `flatten(...)`: Take in an nested array, and return a "flattened" version of the array.
* `head(...)`: Get the first element of an array.
* `letterPositions(...)`: Return all the indexes of letters in a string.
* `map(...)`: Return a new array based on the results of the callback function.
* `middle(...)`: Get the middle elements of an array.
* `tail(...)`: Get the rest of elements of an array except for the first element.
* `takeUntil(...)`: Return a slice of the array before callback returns a truthy value.
* `without(...)`: Get the rest of elements in array 1 without those in array 2.