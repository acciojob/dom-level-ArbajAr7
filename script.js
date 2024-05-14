//your JS code here. If required.
function GetLevel(element) {
	let level = 0;
	let current_element = element;
	if(current_element.parentNode)
	{
		level +=1;
		current_element = current_element.parentNode;
	}

	return level;
}

let my_element = document.getElementById.("level");
const level = GetLevel(my_element);
alert("The level of the element is: "+level);
