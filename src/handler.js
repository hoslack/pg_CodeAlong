const getData = require('./get_data');


module.exports = (req, res)=>{
	getData((err,superheroes)=>{
		if(err){
			console.log(err);
			res.writeHead(500, {'Content-Type':'application/json'});
			return res.end('error');

		}
res.writeHead(200, {'Content-Type':'application/json'});
			res.end(JSON.stringify(superheroes));


	});
}