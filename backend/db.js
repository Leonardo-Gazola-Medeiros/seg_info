var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");
	
	var sql = "CREATE DATABASE dados";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Database dados criada");
	});
});