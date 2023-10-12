var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for (let i = 0; i < listItem.length; i++) {
listItem[i].addEventListener("click", function(){
		listItem[i].classList.toggle("done")
	})
}






button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




console.log(li)
console.log()