'use strict';

var leveldb= require('level');

var db = leveldb("./actions");

/**
 * Get awesome things
 */
exports.commands = function (req, res) {
    res.json([
        {
            name: 'cd',
            info: 'Change working directory.',
            synopsis: ''
        },
        {
            name: 'ls',
            info: 'List files of current directory',
            synopsis: ''
        },
        {
            name: 'unzip',
            info: 'Unzip file',
            synopsis: ''
        },
        {
            name: 'zip',
            info: 'Zip files',
            synopsis: ''
        }
    ]);
};

exports.command = function(req,res) {
	var command = req.params.command;
	db.get(command,function(err,value){
		if(err){
			if(err.notFound)
			res.send({name:command,info:" A Description",commands:[]});
		}else
		res.json(value);
	});
};
exports.addCommand = function(req,res) {
	var command = req.params.command;
	var data = req.body;
	db.put(command,data);
	res.json(data);
};
