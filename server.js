'use script';
const express = require('express');

const PORT = '8080';
const HOST = '0.0.0.0';

const app = express();

app.get("/", (req, res) => {
	var os = require('os');
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();

	res.send('Hello world ' + os.hostname() + ', Current Date: ' + date + '/' + month + '/' + year + ' Hour: ' + hours + ':' + minutes + '.\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
