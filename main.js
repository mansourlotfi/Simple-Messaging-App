var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
  var newmessage = document.createElement("li");
    newmessage.innerHTML = document.getElementById("textbox").value;
    messages.appendChild(newmessage);
    document.getElementById("textbox").value="";
})
