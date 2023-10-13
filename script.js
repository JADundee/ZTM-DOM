var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");
var deleteButton = document.getElementsByClassName("delete") 





for (var i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", removeParent, false);
}

function removeParent(e) {
	e.target.removeEventListener("click", removeParent, false);
	e.target.parentNode.remove()
}

/* for (let i = 0; i < listItem.length; i++) {
	listItem[i].addEventListener("click", function(){
			listItem[i].classList.toggle("done");
		})
	} */

	ul.onclick = function(e){
		e.target.classList.toggle("done")
	}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "X";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(btn)
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


console.log(listItem)
console.log(ul)





button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
