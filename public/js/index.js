 var ourRequest = new XMLHttpRequest();
 ourRequest.open('GET', 'http://localhost:3001/api/products/')

ourRequest.onload = function(){
  console.log("API Called")
     if (ourRequest.status >= 200 && ourRequest.status < 400) {
        console.log("Status 200: Server connected");
        console.log(ourRequest.responseText);
         //var data = JSON.parce(ourRequest.responseText);
        createHTML (ourRequest.responseText);
        //console.log(data)
        
     } else {
         console.log("We connected to the server, but it returned an error");
     }
 };  

 ourRequest.onerror = function() {
     console.log("Connection error");
 };

 ourRequest.send();

 function createHTML(data) {
     const rawTemplate = document.getElementById("postTemplate").innerHTML;
     console.log(rawTemplate)
     const compiledTemplate = Handlebars.compile(rawTemplate);

     console.log(compiledTemplate)
     const ourGeneratedHTML = compiledTemplate(data);
     //console.log (data)

    //console.log (ourGeneratedHTML);
     const postContainer = document.getElementById("post-container");
     postContainer.innerHTML = ourGeneratedHTML;
 }

// Log In / Register overlay
$(window, document, undefined).ready(function() {

    $('.input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });
    
    });
  
  
  $('#tab1').on('click' , function(){
      $('#tab1').addClass('login-shadow');
     $('#tab2').removeClass('signup-shadow');
  });
  
  $('#tab2').on('click' , function(){
      $('#tab2').addClass('signup-shadow');
     $('#tab1').removeClass('login-shadow');
  
  
  });