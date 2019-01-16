function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  // Hiding tabcontent elements
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // get elements with tablinks by removing active
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // add an active class to open the button (tab)
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}