'use strict';


function getDogImage(numInput){
if(numInput < 3) {
fetch('https://dog.ceo/api/breeds/image/random/3')
	.then(response => response.json())
	.then(responseJson => console.log(responseJson));
}else if (numInput > 50) {
	return alert("Please choose a vaild number i.e 1-50");
}else{
	fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
	.then(response => response.json())
	.then(responseJson => console.log(responseJson));
}
)

function watchForm(){
$('#form-num').submit(event => {
event.preventDefault();
let userNumInput = $('#dog-num').val();
getDogImage(userNumInput);
});
}



$(function() {
console.log('Loaded Please submit');
watchForm();
});
