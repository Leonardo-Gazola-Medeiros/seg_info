var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "dados"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");
	
	//USERS
	var sql = `CREATE TABLE user (
		id integer PRIMARY KEY AUTO_INCREMENT,
		name varchar(255),
		pswrd varchar(255),
		email varchar(255)
	  );`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela USER criada");
	});

	//TERMOS
	var sql = `CREATE TABLE terms (
		id integer PRIMARY KEY AUTO_INCREMENT,
		term varchar(255),
		version integer
	  );`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela TERMS criada");
	});

	var sql = `CREATE TABLE user_term (
		accept bool,
		usr_id integer,
		term_id integer
	  );`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela USER_TERM criada");
	});

	var sql = `CREATE TABLE contract (
		id integer PRIMARY KEY AUTO_INCREMENT,
		contrato mediumtext,
		data_emissao date
	  );`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela CONTRACT criada");
	});

	var sql = `CREATE TABLE compra (
		user_id integer,
		valor double(10,2),
		quantidade integer,
		product_id integer
	  );`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela COMPRA criada");
	});
	
	var sql = `CREATE TABLE produto (
		id integer PRIMARY KEY AUTO_INCREMENT,
		valor double(10,2),
		nome varchar(255)
	  );`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela PRODUTO criada");
	});

	var sql = `ALTER TABLE terms ADD FOREIGN KEY (version) REFERENCES contract (id);

	ALTER TABLE user_term ADD FOREIGN KEY (usr_id) REFERENCES user (id);
	
	ALTER TABLE user_term ADD FOREIGN KEY (term_id) REFERENCES terms (id);
	
	ALTER TABLE compra ADD FOREIGN KEY (user_id) REFERENCES user (id);
	
	ALTER TABLE compra ADD FOREIGN KEY (product_id) REFERENCES produto (id);`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Tabela ROLES criada");
	});
		
});
