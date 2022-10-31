
// Array containing all the objects for each program
let programsList = [
	{
		name: "ct1",
		type: "rd135",
		hours: 1,
		minutes: 10,
		timeNow: new Date()
	},
	{
		name: "ct2",
		type: "rd135",
		hours: 2,
		minutes: 20,
		timeNow: new Date()
	},
	{
		name: "ct3",
		type: "rd135",
		hours: 3,
		minutes: 30,
		timeNow: new Date()
	},
]


const s1 = {
	name: "s1",
	type: "gr11",
	hours: 0,
	minutes: 45,
	timeNow: new Date()
}

let myArray = [];



for (var i=0; i<programsList.length; i++) {
	const resultingTime = function  () {
	let resultingHours = programsList[i].timeNow.getHours() + programsList[i].hours;
	let resultingMinutes = programsList[i].timeNow.getMinutes() + programsList[i].minutes;
	if (resultingMinutes >= 60) {
		return (resultingHours + 1) % 24 + ":" + resultingMinutes%60;
	}
	else {
		return resultingHours%24 + ":" + resultingMinutes;
	}
}
	myArray.push(resultingTime());
}

	

	// let totalHours = 0;

	// // function that adds the program hours to current hours
	// function resultingHours (hoursNow, programHours) {
	// 	let totalHours = (programsList[0].timeNow.getHours() + programHours)%24;
	// }

	// // function that adds the program minutes to current minutes
	// function resultingMinutes (minutesNow, programMinutes) {
	// 	let totalMinutes = programsList[0].timeNow.getMinutes() + programMinutes;
	// 	//Convert minutes to hours if minutes > 60
	// if (totalMinutes >= 60) {
	// 	totalMinutes = totalMinutes%60;
	// 	totalHours++;
	// 	return totalMinutes;
	// }
	// }
	
	function findCorrectProgram () {
		console.log(myArray);
	document.getElementById("content").innerHTML = "Toolpath: " + s1.name + "; Tip freza: " + s1.type + ". E gata la ";
	}



 // 