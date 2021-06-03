 var ourRequest = new XMLHttpRequest();
 ourRequest.open('GET', 'http://localhost:3001/api/products/')

ourRequest.onload = function(){
     if (ourRequest.status >= 200 && ourRequest.status < 400) {
         var data = JSON.parce(ourRequest.responseTest);
        createHTML (data);
        console.log(data)
        console.log("Status 200: Server connected")
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
     const compiledTemplate = Handlebars.compile(rawTemplate);
     const ourGeneratedHTML = compiledTemplate(data);

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