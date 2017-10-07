"use strict";

let dom = require("./dom");

let personInfo = {};

$.ajax("https://teamtreehouse.com/alexsanchez9.json").done((data) => {
	personInfo = data.badges;
	console.log(personInfo);
	dom.domBuilder(personInfo);
	// getBadges();
}).fail((error) => {
	console.log(error);
});


module.exports = {};