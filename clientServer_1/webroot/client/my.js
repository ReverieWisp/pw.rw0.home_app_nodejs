// Variables
var domain   = "http://home.rw0.pw";
var filepath = "/serverTest";
var socket = io(domain, { path: filepath + "/socket.io" });


// Called to change the text in the relevant h4 element
function changeText(){
  var input = document.getElementById("toSend").value;
  console.log("Attempting to send: " + input);
  socket.emit('messageEvent', { data: input });
  document.getElementById("toChange").innerHTML = "Sent: " + input;
}
