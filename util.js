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

Array.prototype.for2Grams = function(callback) {
    for (let i = 0; i < this.length-1; i++) {
	callback(this[i], this[i+1]);
    }
};

Array.prototype.last = function() {
    return this[this.length - 1];
};


module.exports.pipeProcesses = pipeProcesses;
function pipeProcesses(processes) {
    processes.for2Grams((p1, p2) => {
	p1.stdout.on('data', (buf) => {
	    p2.stdin.write(buf);
	});
	
	p1.on('close', () => {
	    p2.stdin.end();
	});
    });
}
