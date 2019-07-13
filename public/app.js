document.addEventListener("DOMContentLoaded", function() { 
	//AJAX calls to get a country, state and city data(use XMLHttp Request)
	var myObj=
{
	init:function()
	{
		var that = this;
		this.loadCountry();
		document.getElementById('country').addEventListener('focus', function(){
			that.loadState(this.value);
		});
		document.getElementById('state').addEventListener('focus', function(){
			that.loadCity(this.value);
		});
	},
	loadCountry:function()
	{
		document.getElementById('country').innerHTML='';
		var xhr = new XMLHttpRequest();
		xhr.open('GET','https://koalua80-gdicm-debug.run.goorm.io/countries',true);
		xhr.onload=function(){
			var countries=JSON.parse(xhr.responseText);
			countries.forEach(function(value){
				var option = document.createElement('option');
				option.innerText= value.name;
				option.setAttribute('value', value.id);
				document.getElementById('country').appendChild(option);
			});
		};
		xhr.send();
	},
	loadState:function(id)
	{
		document.getElementById('state').innerHTML='';
		var xhr = new XMLHttpRequest();
		xhr.open('GET','https://koalua80-gdicm-debug.run.goorm.io/states',true);
		xhr.onload=function(){
			state.style.display='block';
			var countries=JSON.parse(xhr.responseText);
			countries.forEach(function(value){
				var option = document.createElement('option');
				option.innerText= value.name;
				option.setAttribute('value', value.id);
				document.getElementById('state').appendChild(option);
				});
	};
		xhr.send();	
	},
	loadCity: function(id)
	{
		document.getElementById('city').innerHTML='';
		var xhr = new XMLHttpRequest();
		xhr.open('GET','https://koalua80-gdicm-debug.run.goorm.io/cities',true);
		xhr.onload=function(){
			city.style.display='block';
			var countries=JSON.parse(xhr.responseText);
			countries.forEach(function(value){
				var option = document.createElement('option');
				option.innerText= value.name;
				option.setAttribute('value', value.id);
				document.getElementById('city').appendChild(option);
				});
	};
		xhr.send();		
	}
};
myObj.init();
	
	//URL to API/mock server(use fetch)
  var url="https://koalua80-gdicm-debug.run.goorm.io/users";
	//AJAX call to get the user data
  fetch(url)
	.then(handleErrors)
	.then(function(res){
	  return res.json();
	  })
	.then(updateProfile)
	.catch(displayErrors);  
});
 


function handleErrors(req){
	if(!req.ok){
		throw Error(req.status);
	}
	return req;
}

function updateProfile(data){
	for (var {name: n, email: e, phone_number: p, createdAt: c, country_id: x, state_id: y, city_id: z} of data) {
		q.innerHTML+='Name: '+n+'<br>'+' Email: '+e+'<br>'+' Phone Number: '+p+'<br>'+'Created At: '+c+'<br>'+'Country ID: '+x+'<br>'+'State ID: '+y+'<br>'+'City ID: '+z+'<br>'+'<hr>';
		}
}

function displayErrors(err){
	console.log("Inside display Errors!");
	console.log(err);
}

//POST AJAX call
function newUser(){	
var url="https://koalua80-gdicm-debug.run.goorm.io/users";
fetch(url,{
	method:'POST',
	headers: new Headers({
		'Content-Type':'application/json'
	})	
})
	.then(updateProfile)
	.then(handleErrors)
	.catch(displayErrors);	
}
var button=document.querySelector("button");
button.addEventListener("click", newUser);

