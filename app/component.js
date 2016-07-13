module.exports = function(){
	var styles = require('./main.css');
	var element = document.createElement('h1');
	element.className = 'pure-button';
	element.innerHTML = "Hello world";
	return element;
};