function changeText(){
	debugger;
	var textsArry = ["Text1","Text2","Text3","Text4","Text5"]
	var number = getRandomNumberBetween(0,textsArry.length - 1)
	console.log("Index 2:",number)
	document.getElementById("heading").innerHTML = textsArry[number];
}
function getRandomNumberBetween(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}