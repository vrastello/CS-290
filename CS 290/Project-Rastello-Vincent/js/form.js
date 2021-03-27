document.getElementById('post_submit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = {inputEmail:null, inputMessage:null};
    payload.inputEmail = document.getElementById('inputEmail').value;
    payload.inputMessage = document.getElementById('inputMessage').value;
    req.open('POST', 'https://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          var response = JSON.parse(req.responseText);
          //Check Console for confirmation POST is working 
          console.log(response)
          var Thanks = "Thanks for your request, we will get back to you as soon as possible."
          document.getElementById('response').appendChild(document.createTextNode(Thanks))
        } else {
          console.log("Error in network request: " + req.statusText);
        }});
    req.send(JSON.stringify(payload));
    event.preventDefault();
  });