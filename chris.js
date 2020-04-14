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