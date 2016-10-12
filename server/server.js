var express = require('express');
var app		= express();


app.use(express.static('../client'));

app.listen('8090',function(){
	console.log('magic start on:8090');
});