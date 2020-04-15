function generator() {

    for (let index = 0; index < 10; index++) {
    var x= Math.floor((Math.random()*5)+1);
    console.log(x);
    document.getElementsById('divImage').innerHTML=`
      <img src="img/genstand${x}.png" style="width:300px;">
      `;
  }
  
