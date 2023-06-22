//your JS code here. If required.
const output = document.getElementById("output");
let prom = new Promise((resolve) => {
	setTimeout(() => {
		let str = "Hello, world!";
		resolve(str);
	},1000);
});

prom.then((str) => {
	output.innerText = str;
});