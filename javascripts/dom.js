"use strict";

const domBuilder = (badgesArray) => {
	let domString = "";
	// badgesArray.forEach((iconImage) => {
		for (let i=0; i < badgesArray.length; i++) {
		domString+= 	`<div class="badge-card col-sm-3 animated infinite pulse">`;
		domString+= 		`<div class="image-container text-center">`;
		domString+= 			`<img src="${badgesArray[i].icon_url}">`;
		domString+= 		`</div>`;
		domString+= 	`</div>`;
	}
	printToDom(domString);
};

const printToDom = (string) => {
	$("#badgeHolder").html(string);
};

module.exports = {domBuilder};