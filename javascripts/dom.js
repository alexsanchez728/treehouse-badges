"use strict";

const domBuilder = (badgesArray) => {
	let domString = "";
	// badgesArray.forEach((iconImage) => {
		for (let i=0; i < badgesArray.length; i++) {
	console.log("in dombuilder", badgesArray);
		domString+= 	`<div class="badge-card col-sm-3">`;
		domString+= 		`<div class="image-container">`;
		domString+= 			`<img src="${badgesArray[i].icon_url}">`;
		domString+= 		`</div>`;
	}
	console.log(domString);
	printToDom(domString);
};

const printToDom = (string) => {
	console.log(string);
	$("#badgeHolder").html(string);
};



module.exports = {domBuilder};