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

const assert = require("assert");
const join = require("../join.js").joinFilesToString;


describe("join", () => {
    it("should join the three example files", (done) => {
	join(["test/file1", "test/file2", "test/file3"]).then((r) => {
	    assert.equal(r, "1,g,a,d\n2,h,b,e\n3,i,c,f\n");
	}).then(done).catch(err => done(err));
    });

    it("should join two of the example files", (done) => {
	join(["test/file1", "test/file2"]).then((r) => {
	    assert.equal(r, "1,a,d\n2,b,e\n3,c,f\n");
	}).then(done).catch(err => done(err));
    });
});
