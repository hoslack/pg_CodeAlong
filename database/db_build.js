const fs = require('fs');

const connect = require('./db_connection');

const buildScript = fs.readFileSync('./database/db_build.sql','utf8');


connect.query(buildScript, (err, res)=>{
	if(err){
		throw err;
	}

	connect.end();
	console.log('database build successful');
});