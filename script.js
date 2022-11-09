function calculateTime() {
    //let array = [1, 8, 3, 10, 7, 6, 3.5, 4.5];
    const array = [
        {
            name: "CT1",
            hours: 1,
            minutes: 10,
            dimensions: "120x45x6"
        },
        {
            name: "CT8",
            hours: 8,
            minutes: 20,
            dimensions: "120x45x6"
        },
        {
            name: "CT3",
            hours: 3,
            minutes: 30,
            dimensions: "120x45x6"
        },
        {
            name: "CT5",
            hours: 5,
            minutes: 40,
            dimensions: "120x45x6"
        },
        {
            name: "CT7",
            hours: 7,
            minutes: 50,
            dimensions: "120x45x6"
        },
        {
            name: "CT6",
            hours: 6,
            minutes: 15,
            dimensions: "120x45x6"
        }
    ]
    let timeNow = new Date();
    let currentHour = 10;
    let currentMinutes = timeNow.getMinutes();
    let newArray = [];
    const container = document.getElementById("container");
    const cnc1 = document.getElementById("cnc1");

    // Get the value of the option selected for material size
    var e = document.getElementById("placa-cnc1");
		var value = e.value;
		var text = e.options[e.selectedIndex].text;

		console.log(text);

		// loop through objects and calculate time for each then push the objects onto a new array according to specific interval
    for (i=0; i<array.length; i++) {
        let resultingHour = (array[i].hours + currentHour) % 24;
        let resultingMinutes = array[i].minutes + currentMinutes;
        if(resultingMinutes / 60 > 1) {
            resultingMinutes = resultingMinutes % 60;
            resultingHour++;
        }
       if(resultingHour <= 16 && resultingHour >= 15){
            newArray.push(`${array[i].name} - ${resultingHour}:${resultingMinutes} PM`);
        }  
    }
    newArray.sort();
    for (i=0; i<newArray.length; i++) {
        let para = document.createElement("p");
        let node = document.createTextNode(`${newArray[i]}`);
        para.appendChild(node);
        cnc1.appendChild(para);
    }
    if (newArray.length === 0) {
        alert("No appropriate toolpath found!")
    }


    
}

//function myFunction()     { 
//document.getElementById("container").innerHTML = calculateTime(15);
// }




























































// // Array containing all the objects for each program
// let programsList = [
// 	{
// 		name: "ct1",
// 		type: "rd135",
// 		hours: 1,
// 		minutes: 10,
// 		timeNow: new Date()
// 	},
// 	{
// 		name: "ct2",
// 		type: "rd135",
// 		hours: 2,
// 		minutes: 20,
// 		timeNow: new Date()
// 	},
// 	{
// 		name: "ct3",
// 		type: "rd135",
// 		hours: 3,
// 		minutes: 30,
// 		timeNow: new Date()
// 	},
// ]


// const s1 = {
// 	name: "s1",
// 	type: "gr11",
// 	hours: 0,
// 	minutes: 45,
// 	timeNow: new Date()
// }

// let myArray = [];
// let hoursArray = [];
// let minutesArray =[];
// const resultingTime = function  () {
// 	let resultingHours = programsList[i].timeNow.getHours() + programsList[i].hours;
// 	let resultingMinutes = programsList[i].timeNow.getMinutes() + programsList[i].minutes;
// 	if (resultingMinutes >= 60) {
// 		return (resultingHours + 1) % 24 + ":" + resultingMinutes%60;
// 	} else {
// 			return resultingHours%24 + ":" + resultingMinutes;
// 		}
// 	hoursArray.push(resultingHours);
// 	minutesArray.push(resultingMinutes);
// 	console.log(hoursArray);
// 	console.log(minutesArray);

// 	}

// for (var i=0; i<programsList.length; i++) {
// 	myArray.push(resultingTime());
// }

	

// 	// let totalHours = 0;

// 	// // function that adds the program hours to current hours
// 	// function resultingHours (hoursNow, programHours) {
// 	// 	let totalHours = (programsList[0].timeNow.getHours() + programHours)%24;
// 	// }

// 	// // function that adds the program minutes to current minutes
// 	// function resultingMinutes (minutesNow, programMinutes) {
// 	// 	let totalMinutes = programsList[0].timeNow.getMinutes() + programMinutes;
// 	// 	//Convert minutes to hours if minutes > 60
// 	// if (totalMinutes >= 60) {
// 	// 	totalMinutes = totalMinutes%60;
// 	// 	totalHours++;
// 	// 	return totalMinutes;
// 	// }
// 	// }
	
// 	function findCorrectProgram () {
// 		console.log(myArray);
// 		console.log(hoursArray);
// 		console.log(minutesArray);
// 	document.getElementById("content").innerHTML = "Toolpath: " + s1.name + "; Tip freza: " + s1.type + ". E gata la ";
// 	}



 // 