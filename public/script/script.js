document.getElementById("menuBar").addEventListener("click",function () {
	document.getElementById("guide").style.display = "block";
	document.getElementById("menuBar").style.display = "none";
	document.getElementById("close").style.display = "block";
});
document.getElementById("close").addEventListener("click",function () {
	document.getElementById("guide").style.display = "none";
	document.getElementById("menuBar").style.display = "block";
	document.getElementById("close").style.display = "none";
});