#!/usr/bin/env node

/*
server.js
*/

var glob = require("glob");
var path = require("path");
var fs = require("fs");
var argv = require('minimist')(process.argv.slice(2));

var texttoreplace = argv.in || argv._[0] || "aaaa";
var replacewith = argv.locations || argv._[1] || "bbbbb";

// glob(__dirname + "/players/**/*.*", function(err, files) {
glob("*.*", function(err, files) {
	var processed = 0;
	files.forEach(function(file) {
		var dir = path.dirname(file);
		var filename = path.basename(file);
		var newfilename = filename.replace(texttoreplace, replacewith);
		
		fs.renameSync(dir+"/"+file, dir+"/"+newfilename);
		
		processed++;
		console.log("To Process:", filename, newfilename);
	});
	console.log(processed + " files processed");
});