function myFunction() {
    document.getElementById("dropCnt").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.burger')) {
      var dropdowns = document.getElementsByClassName("dropdownCnt");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }