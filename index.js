
// Emmas js for side billede galleri  
console.log("emma");

var image_tracker = 'baby';
 
 function change(){
 var image = document.getElementById('image');
 if(image_tracker=='baby'){
 image.src='img/brocoli.jpg';
 image_tracker='brocoli';
 }

 else{
    image.src='img/baby.jpg';
    image_tracker='baby';
 }
 }
 var timer = setInterval ('change(); ',3000);
