"use strict";

let dom = require("./dom");

let personBadges = {};

$.ajax("https://teamtreehouse.com/alexsanchez9.json").done((data) => {
	personBadges = data.badges;
	dom.domBuilder(personBadges);
}).fail((error) => {
	console.log(error);
});

const grabBadges = () => {
	return personBadges;
};

module.exports = {grabBadges};