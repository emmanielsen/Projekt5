// Emmas js for side billede galleri

console.log("emma");

var image_tracker = 'baby';

 function change(){
 var image = document.getElementById('image');
 if(image_tracker=='baby'){
 image.src='img/mad.jpg';
 image_tracker='brocoli';
 }
 else{
    image.src='img/baby.jpg';
    image_tracker='baby';
 }
 }
 var timer = setInterval ('change(); ',7000);


//Phillips js

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Sletknap
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Nicolai js

// Add Liste
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Husk at tilføje dine vare");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Scan
function myFunction() {

  alert("Du har nu scannet din vare!");

}

function generator() {
  var x= Math.floor((Math.random()*5)+1);
  document.getElementsById('divImage').innerHTML=`
    <img src="img/genstand${x}.png" style="width:300px;">
    `;
}
