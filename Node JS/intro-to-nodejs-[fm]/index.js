#!/usr/bin/env node

import data,{count} from './utils.js'
import fs from 'fs';
import _ from 'lodash'

// console.log("Hello world")
// // alert("Hello world")
// console.log(process.argv)

const note = process.argv[2];

const newNote = {
    content : note,
    id:Date.now()
}

console.log(newNote)
console.log(count(4))
console.log(data)
console.log(fs)

// (function () {
//     console.log("IIFE")
// })