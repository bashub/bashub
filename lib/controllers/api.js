'use strict';

var leveldb= require('level');

var db = leveldb("./actions");

/**
 * Get awesome things
 */
exports.commands = function (req, res) {
    db.get("##//commmand//##list", function (err,value){
         var retVal = [];
         if(!err || !err.notFound){
	       var arr = JSON.parse(value);
	       for(var i in arr)
	           retVal.push({name: arr[i]});
	 }
	 res.json(retVal);
    });
};

exports.command = function(req,res) {
	var command = req.params.command;
	db.get(command,function(err,value){
		if (err) {
			if(err.notFound)
				res.send({name:command,info:" A Description",commands:[]});
		}
		else
			res.json(JSON.parse(value));
	});
};
exports.addCommand = function(req,res) {
	var command = req.params.command;
	var data = req.body;
	db.get(command,function(err,value){
		if(err && err.notFound ){
			db.get("##//commmand//##list", function (err1,value1){
				if(err1 && err1.notFound) {
					db.put("##//commmand//##list",JSON.stringify([command]));
				} else if(!err1) {
					var array = JSON.parse(value1);
					array.push(command);
					db.put("##//commmand//##list",JSON.stringify(array));
				}
			});
		}
	});
	db.put(command,JSON.stringify(data));
	res.json(data);
};
