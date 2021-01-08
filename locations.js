var array = [];
let i = 0;

function addDestination(name, location, category) {
  console.log("test");
  array.push({ name: name, location: location, category: category });
  //addToList(JSON.stringify(array[i]));
  addToList(array[i]);
  i++;
}

function randomDestination() {
  console.log("test1");
  var destination =
    array[Math.floor(Math.random() * Math.floor(array.length))].name;
  document.getElementById("destination").innerHTML =
    "Your next destination: " + destination;
}

function randomDestination(cat, loc) {
  console.log("test1");
  var destination =
    array[Math.floor(Math.random() * Math.floor(array.length))].name;
  document.getElementById("destination").innerHTML =
    "Your next destination: " + destination;
}

function addToList(add) {
  var node = document.createElement("li");
  var span1 = document.createElement("span");
  span1.className = "name";
  var span2 = document.createElement("span");
  span2.className = "location";
  var span3 = document.createElement("span");
  span3.className = "category";
  var textnode1 = document.createTextNode(add.name);
  var textnode2 = document.createTextNode(add.location);
  var textnode3 = document.createTextNode(add.category);
  span1.append(textnode1);
  span2.append(textnode2);
  span3.append(textnode3);
  node.appendChild(span1);
  node.appendChild(span2);
  node.appendChild(span3);
  document.getElementById("list").appendChild(node);
}

let colourList = document.getElementById('colourWallList');
//colourList.length = 0;

colourList.selectedIndex = 0;

const url = 'https://www.benjaminmoore.com/api/colors';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('input');
          option.type = button;
      	  option.text = data[i].name;
      	  option.value = data[i].number;
      	  colourList.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });