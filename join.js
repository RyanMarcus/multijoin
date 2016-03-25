"use strict";

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

const util = require("./util.js");
const spawn = require('child_process').spawn;
const q = require("q");


module.exports.joinFiles = joinFiles;
function joinFiles(files) {
    files.unshift(files.pop());
    files.unshift(files.pop());
    
    // spawn files.length - 1 join commamds...
    let joins = [];


    
    joins.push(makeJoin(files.shift(), files.shift()));
    files.reverse();
    joins = joins.concat(files.map((i) => makeJoin(i)));

    
    util.pipeProcesses(joins);
    
    return joins.last().stdout;
}

module.exports.joinFilesToString = joinFilesToString;
function joinFilesToString(files) {
    let toR = q.defer();
    let buf = "";
    
    function aggro(b) {
	buf += b;
    }

    function done() {
	toR.resolve(buf);
    }
    
    let out = joinFiles(files);

    out.on('data', aggro);
    out.on('end', done);
    

    return toR.promise;
}


function makeJoin(file, file2) {
    let args = ['-t', ',', file, (file2 ? file2 : "-")];
    let toR = spawn('join', args);
  

    return toR;
}
