// "use strict";

// //Setup

// const badgeGetter = require("./badge-caller");

// let badges = badgeGetter.grabBadges();


// let canvas = document.getElementById("canvas");
// canvas.width  = window.innerWidth;
// canvas.height = window.innerHeight;
// var c = canvas.getContext("2d");

// window.addEventListener("resize", function() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;		
// });

// // var colors = [
// //   "#BADA55",
// //   "#76eec6",
// //   "#ff4040"
// // ];


// //Object

// function Particle(x, y, radius) {
//   this.x = x;
//   this.y = y;
//   this.vx = Math.random() * 4 - 2;
//   this.vy = Math.random() * -14 - 7;
//   this.radius = radius;
//   this.velocity = 0.05;
//   this.lineWidth = 5;
//   this.randomBadge = Math.floor(Math.random() * badges.length);
//   this.color = badges[this.randomBadge];
  
//   this.update = () => {
//     this.x += this.vx;
//     this.vy += 0.2;
//     this.y += this.vy;
//     if (this.y > window.innerHeight) {
//       this.y = canvas.height;
//       this.x = canvas.width/2;
//       this.vy = Math.random() * -14 - 7;
//     }
//     this.draw();
//   };
  
//   this.draw = () => {
//     c.beginPath();
//     c.strokeStyle = this.color;
//     c.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
//     c.stroke();
//     c.closePath();
//   };
  
// }

// let particles;

// function init() {
// 	particles = [];
//   //Number of particles
// 	for (let i = 0; i < 50; i++) {
// 		particles.push(new Particle(canvas.width / 2, canvas.height, 10));
// 	}
// }

// //Animation loop
// function animate() {
// 	requestAnimationFrame(animate);
//   c.clearRect(0, 0, canvas.width, canvas.height);
// 	// c.fillStyle = 'rgba(255, 255, 255, 0.02)';
// 	// c.fillRect(0, 0, canvas.width, canvas.height);
// 	particles.forEach(particle => {
// 		particle.update();
// 	});
// }

// init();
// animate();