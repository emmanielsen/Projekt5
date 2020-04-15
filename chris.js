
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