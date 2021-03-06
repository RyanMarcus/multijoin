#! /usr/local/bin/node

// Copyright 2016 Ryan Marcus
//This file is part of multijoin.
// 
//multijoin is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.
// 
//multijoin is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	 See the
//GNU General Public License for more details.
// 
//You should have received a copy of the GNU General Public License
//along with multijoin.  If not, see <http://www.gnu.org/licenses/>.

"use strict";
const join = require('./join.js');
const process = require('process');




const files = process.argv.slice(2);

if (files.length < 2) {
    console.error("You must give at least two files");
    process.exit(0);
}



join.joinFiles(files).pipe(process.stdout);

