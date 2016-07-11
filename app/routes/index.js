"use strict";
var fs = require("fs");

module.exports = function (app, upload) {
	app.route("/")
		.get(function (req, res) {
			res.sendFile(process.cwd()+"/public/index.html");
		});
	app.route("/")
	    .post(function(req, res){
	        res.json({"size": req.file.size});
	    });
	 app.route("/get-file-size")
	    .post(function(req, res){
	        fs.unlink(req.file.path, function(err){
	            if(err){
	                console.log(err);
	            } else {
	                console.log("Successfully deleted "+req.file.filename);
	            }
	        });
	        res.json({"size": req.file.size});
	    });
};