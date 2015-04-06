#!/usr/bin/env node

/*
server.js
*/

var glob = require("glob");
var path = require("path");
var fs = require("fs");
var argv = require('minimist')(process.argv.slice(2));

var texttoreplace = argv.text || argv._[0] || "aaaa";
var replacewith = argv.with || argv._[1] || "";

// glob(__dirname + "/players/**/*.*", function(err, files) {
console.log("INFO:", texttoreplace, replacewith);
glob("*.*", function(err, files) {
	var processed = 0;
	files.forEach(function(file) {
		var dir = path.dirname(file);
		var filename = path.basename(file);
		var newfilename = filename.replace(texttoreplace, replacewith);

		console.log("Old Name:", filename);
		console.log("New Name:", newfilename);

		fs.renameSync(dir+"/"+file, dir+"/"+newfilename);
		
		processed++;
	});
	console.log("INFO:", texttoreplace, replacewith);
	console.log(processed + " files processed");
});