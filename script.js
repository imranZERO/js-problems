"use strict";

function cubeNumber(number) {
	if (typeof number != "number") {
		return "Please enter a number";
	}

	return Math.pow(number, 3);
}
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));

function matchFinder(string1, string2) {
	if (typeof string1 != "string" || typeof string2 != "string") {
		return "Please enter two strings";
	}

	return string1.includes(string2);
}
// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", "Code"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker", "pet"));

function sortMaker(arr) {
	let first = arr[0],
		second = arr[1];

	if (first < 1 || second < 1) {
		return "invalid input";
	} else if (first === second) {
		return "equal";
	} else if (first < second) {
		return [first, second] = [second, first];
	}

	return arr;
}
// console.log(sortMaker([2, 3]));
// console.log(sortMaker([4, 2]));
// console.log(sortMaker([4, 4]));
// console.log(sortMaker([1, 2]));
// console.log(sortMaker([4, -2]));

function findAddress(obj) {
	let result = [];

	if (obj.street != undefined) {
		result.push(obj.street);
	} else {
		result.push("__");
	}

	if (obj.house != undefined) {
		result.push(obj.house);
	} else {
		result.push("__");
	}

	if (obj.society != undefined) {
		result.push(obj.society);
	} else {
		result.push("__");
	}

	return result.join(',');
}
// console.log(findAddress({
// 	street: 10,
// 	house: "15A",
// 	society: "Earth Perfect"
// }));
// console.log(findAddress({
// 	street: 10,
// 	society: "Earth Perfect"
// }));
// console.log(findAddress({
// 	street: 10,
// }));

function canPay(changeArray, totalDue) {
	if (changeArray.length === 0) {
		return "changeArray is empty";
	}

	let sum = 0;

	for (let i = 0; i < changeArray.length; i++) {
		sum += changeArray[i];
	}

	if (sum >= totalDue) {
		return true;
	}

	return false;
}
// console.log(canPay([1,2,5],10));
// console.log(canPay([1,5,5],10));
// console.log(canPay([],10));
