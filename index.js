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

// Tjekfunktion
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

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

// Nicolai js
// Scan
function myFunction() {

  alert("Du har nu scannet din vare!");

}
  // Christopher js
  // Tip


  function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }



  function getSelectValue()
  {
      var selectedValue = document.getElementById("list").value;
      console.log(selectedValue);
  }
  getSelectValue();


  function myFunction() {


      document.getElementById("mælktekst").style.color = "#7DAEDB";

      document.getElementById("tomattekst").style.color = "#90AE3C";

    }

//præmie side med Random Image Generator
    <!--
    // Array with random image links is created. You can add as many links as you want/need.

    // Regular Array

    var randomImage = new Array();

    randomImage[0] = "http://url.com/image01.jpg";
    randomImage[1] = "http://url.com/image02.jpg";
    randomImage[2] = "http://url.com/image03.jpg";
    randomImage[3] = "http://url.com/image04.jpg";
    randomImage[4] = "http://url.com/image05.jpg";

    function getRandomImage() {
    var number = Math.floor(Math.random()*randomImage.length);
    document.write('<img src="'+randomImage[number]+'" />');
    }
    getRandomImage()
    //-->
