// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/login');
//     } else {
//       alert(response.statusText);
//     }
//   };

console.log ("andrew-test.js is being loaded")

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'http://localhost:3001/api/products/')

// ourRequest.onload = function(){
//   console.log("API Called")
//      if (ourRequest.status >= 200 && ourRequest.status < 400) {
//         console.log("Status 200: Server connected");
//         console.log(ourRequest.responseText);
//          //var data = JSON.parce(ourRequest.responseText);
//         createHTML (ourRequest.responseText);
//         //console.log(data)
        
//      } else {
//          console.log("We connected to the server, but it returned an error");
//      }
//  };  

//  ourRequest.onerror = function() {
//      console.log("Connection error");
//  };

//  ourRequest.send();

//  function createHTML(data) {
//      const rawTemplate = document.getElementById("postTemplate").innerHTML;
//      console.log(rawTemplate)
//      const compiledTemplate = Handlebars.compile(rawTemplate);

//      console.log(compiledTemplate)
//      const ourGeneratedHTML = compiledTemplate(data);
//      //console.log (data)

//     //console.log (ourGeneratedHTML);
//      const postContainer = document.getElementById("post-container");
//      postContainer.innerHTML = ourGeneratedHTML;
//  }