console.log("emma");

var image_tracker = 'baby';
 
 function change(){
 var image = document.getElementById('image');
 if(image_tracker=='baby'){
 image.src='img/brocoli.jpg';
 image_tracker='brocoli';
 }
 if(image_tracker=='brocoli'){
    image.src='img/familie.jpg';
    image_tracker='familie';
 }

 else{
    image.src='img/baby.jpg';
    image_tracker='baby';
 }
 }
 var timer = setInterval ('change(); ',3000);