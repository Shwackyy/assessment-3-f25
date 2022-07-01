console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("the form has been submitted successfully")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let photo = document.querySelector('img')

photo.addEventListener('mouseover', function(){alert("YOU ARE ONE OF A KIND")}) 
