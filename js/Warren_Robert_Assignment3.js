/*
Robert Warren
02/06/2013
Project 2
Teen Super Sleuth
Chapter 2 "The Plan"
github: https://github.com/grindnmosh/Warren_Robert_Assignment2
*/

var me = "Robert",
	myFriend = 'Sam',
	locale = 'gym\'s locker room.',
	success = 'stay hidden and catch the thief in the act.',
	failure = 'I was unable to ' + success,
	team = 2,
	hidden = true,
	thieves = 'people working as a team',
	numOfThieves = 5,
	kidsHit = ["Michael", "Brandon", "Luke"],
	kidsRepeated =["Michael", "Luke"],
	timePerLocker = [30, 30, 30, 60, 30, 60],
	stayHidden = false,
	kidsWatched = ["Marcus", "Rick", "Chris", "Michael", "Brandon", "Luke"],
	lockerHit = "Eric";
		

var lockers = function (name) {
	var student = (name)
	var lockerHold = [];
	var lockerNumber = function (number){};
	var lockerLoad = function (item) {
		if (item !== kids.name) {
				lockerHold.push(item);
				console.log(name + " has placed a " + item + " in the locker.")
			} else {
				console.log("Not allowed to load students.")
			}	
		};
	var lockerUnload = function (item) {
		lockerHold.pop(item);
		console.log(item + " has been removed from the locker.")
	};
	var lockerList = function () {
		for (var n = 0; n < lockerHold.length; n++) {
		console.log("Locker " + n + ": " + lockerHold[n] + ".");
	};
};
	var getNumber = function () { return number; };
	var getName = function () { return name; };
		return {
		"student": getName,
		"lockerNumber": getNumber, 
		"lockerLoad": lockerLoad,
		"lockerUnload": lockerUnload,
		"lockerList": lockerList
		};
};

var attemptToStayHidden = function(whoIsHiding, whoIsLookingOut) {
	if (whoIsHiding === "Robert") 
	{
			console.log("So it's decided " + whoIsHiding + " will go in and plant  cameras while " + whoIsLookingOut + " sets up the laptop behind the bleachers to start to monitor the cameras.");
		if (stayHidden === true) {
			console.log(whoIsHiding + " will stay hidden and change the 2 cameras when the time is right.");
		} else if (stayHidden === false) {
			console.log(whoIsHiding + " will ask to go to the bathroom about 30 minutes into class and move the cameras");
		};
	} else if (whoIsHiding === "Sam") {
		console.log("So it's decided " + whoIsHiding + " will go in and plant the cameras while " + whoIsLookingOut + " sets up the laptop behind the bleachers to start to monitor the cameras.");
		if (stayHidden = true) {
			console.log(whoIsHiding + " will stay hidden and change the 2 cameras when the time is right.");
		} else if (stayHidden = false) {
			console.log(whoIsHiding + " will ask to go to the bathroom about 30 minutes into class and move the cameras");
		};
	};
}; // procedure

var actingOnPlanTwo = function(laptopInCameraRange, roomOnHardrive) {
	console.log(myFriend + " asks if it is true that we are in range of the spycams and " + me + " tells him that it is " + laptopInCameraRange + ".");
	if (laptopInCameraRange === true) {
		console.log(me + " tells " + myFriend + " ok I am picking up the camera signals");
		if (roomOnHardrive === true) {
			console.log("We have plenty of harddrive space to record the cameras on.")
		} else if (roomOnHardrive === false) {
			console.log("I am going to have to delete some stuff to make room on the hardrive.")
		};
	} else if (laptopInCameraRange === false) {
		console.log(me + " tells " + myFriend + " that it's back to the drawing board.");
		if (roomOnHardrive === true) 
		{
			console.log("We have plenty of harddrive space to record the cameras on if we can get close enough.");
		} else if (roomOnHardrive === false) 
		{
			console.log("I am going to have to delete some stuff to make room on the hardrive as well.");
		};
	};
	useOfTool = laptopInCameraRange;
	return laptopInCameraRange; 
}; //bolean function

var	useOfCameras = function(cameraNum) {
var	cameraNumbers = [1, 2, 3, 4],
	wherePlaced = ["north", "east", "south", "west"],
	camera = 1,
	lockersForRepeater = 2,
	cameraTimeAvailRepeater = 120,
	cameraRepeaterPer = cameraTimeAvailRepeater/lockersForRepeater,
	CameraTimeRemaining = 120,
	lockersRemaining = 4,
	cameraRemainingPer = CameraTimeRemaining/lockersRemaining,
	cameraTotal = 4;
	console.log("So we are watching " + cameraRepeaterPer + " minutes each for the lockers that have been hit multiple times.");
	console.log("The remaining lockers will be watched " + cameraRemainingPer + " minutes each.");
		while (camera <= cameraNumbers.length) 
		{
		console.log("We have placed and are recording from camera " + camera + " at a strategic point to watch specific lockers in the " + locale);
		camera++;
		};
	plan = cameraTotal;
	return plan; 
};// number function

var	watching = function([timePerLocker], totalTimeUsedPerCamera) {
	needToWatch = kidsWatched,
	lockernumbers = [216, 321, 136, 112, 245, 301];
	console.log("We will need to rotate where the camera's are recording.");
	console.log("We will divide the camera time with 2 of the camera's watching  " + kidsRepeated + "'s lockers since they have been broken into multiple times already.");
	console.log("and dive the other 2 cameras between the other 4 lockers for 30 minutes apiece.");
		for (var key in kidsWithValuables.kids) {
		var kids = kidsWithValuables.kids[key];
		console.log(kids.name + " who is assigned locker number " + kids.number + " and has " + kids.valuablesInLocker + " stored in their locker.");
		};
			for (var i=0; i < lockernumbers.length; i++) {
			console.log("We will watch " + lockernumbers[i] + " belonging to " + needToWatch[i] + " for " + [timePerLocker[i]] + " minutes from behind the bleachers so that we are within range.");
	};
	console.log('The locker that has been hit the most times is locker number  ' + lockernumbers.pop() + ' and belongs to ' + kidsRepeated.pop() + ' who stuck his ' + kids.valuablesInLocker + ' in his locker today.');
	console.log("I have a feeling he will be hit again today.");
	lockersToWatch = [216, 321, 136, 112, 245, 301];
	return lockersToWatch;
}; // array function 

var	discovery = function(kidsMonitored, robbed) {
	console.log("We know that " + kidsWatched + " brought there phones and tablets to school today.");
	console.log("We know that none of their lockers were hit while being watched by camera.");
	console.log("We also know that everyones stuff was there when they went back to their locker.");
var	suprise = lockerHit + " came running out with tears running down his face and tells the coach that all of his stuff was gone.";
	return suprise; 
}; // string function

attemptToStayHidden(me, myFriend); // procedure

console.log("So we have determined whose locker will be watched and for how long.");

for (var key in kidsWithValuables.kids) {
	var kids = kidsWithValuables.kids[key];
console.log(kids.name + " is assigned locker number " + kids.number + " and has " + kids.valuablesInLocker + " stored in their locker. We will watch the locker for " + kids.timeToWatch + " minutes.");
}; // JSON 

acting = actingOnPlanTwo(true, true);
console.log(acting); // bolean function

truePlacement = useOfCameras(1);
console.log(truePlacement); 
console.log("That makes " + plan + " cameras total in use.");
console.log("The specific lockers those cameras will record are as follows."); // number function

watch = watching([timePerLocker], 60);
console.log(watch); 
console.log('We are using 60 minutes per camera to watch locker numbers ' + lockersToWatch + '.');
console.log('Though ' + kidsRepeated.pop() + ' is the kid that gets picked on the most.');
console.log('I saw ' + kidsHit.push("Marcus") + ' kids with their cellphones today and 2 with tablets.'); //array function

var marcus = lockers("Marcus");
var	rick = lockers("Rick");
var	chris = lockers("Chris");
var	michael = lockers("Michael");
var	brandon = lockers("Brandon");
var	luke = lockers("Luke");
marcus.lockerLoad("HTC One S");
marcus.lockerLoad("keys");
marcus.lockerLoad("clothes");
console.log("so everything in the locker is : ");
marcus.lockerList();
rick.lockerLoad("iPad 2");
rick.lockerLoad("keys");
rick.lockerLoad("clothes");
console.log("so everything in the locker is : ");
rick.lockerList();
chris.lockerLoad("LG Marquee");
chris.lockerLoad("keys");
chris.lockerLoad("clothes");
console.log("so everything in the locker is : ");
chris.lockerList();
michael.lockerLoad("Samsung Galaxy S2");
michael.lockerLoad("keys");
michael.lockerLoad("clothes");
console.log("so everything in the locker is : ");
michael.lockerList();
brandon.lockerLoad("Samsung Galaxy Note 2");
brandon.lockerLoad("keys");
brandon.lockerLoad("clothes");
console.log("so everything in the locker is : ");
brandon.lockerList();
luke.lockerLoad("Galaxy Tab 10.1");
luke.lockerLoad("keys");
luke.lockerLoad("clothes");
console.log("so everything in the locker is : ");
luke.lockerList();
console.log(marcus);
console.log(rick);
console.log(chris);
console.log(michael);
console.log(brandon);
console.log(luke);

console.log("Unbeknownst to us, Eric had all his toys with him today.");
var eric = lockers("Eric");
eric.lockerLoad("keys");
eric.lockerLoad("clothes");
eric.lockerLoad("iPhone 5");
eric.lockerLoad("iPad Retina");
eric.lockerLoad("PS Vita");
eric.lockerLoad("wallet");
console.log("so everything in the locker is : ");
eric.lockerList();
console.log("His locker was not being watched by us.");
console.log("The thieves did see him load his locker with all his toys."); 
console.log("The thieves entered the locker room and went straight to " + eric.student() + "'s locker and opened it up.");
eric.lockerUnload("iPhone 5");
eric.lockerUnload("iPad Retina");
eric.lockerUnload("PS Vita");
eric.lockerUnload("wallet");
console.log("This left only the following in " + eric.student() + "'s locker:");
eric.lockerList();

shocker = discovery(kidsWatched, lockerHit);
console.log(shocker); // string function

console.log("We will need a wider coverage for our next attempt to catch the thieves.");

