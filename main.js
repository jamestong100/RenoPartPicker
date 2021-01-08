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