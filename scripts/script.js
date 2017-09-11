function myMap() {
  georgia = new google.maps.LatLng(33.875536, -84.459455);
  var mapOptions = {
    center: georgia,
    zoom: 12,
    scrollwheel: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

  var marker = new google.maps.Marker({
    position: georgia,
  });
  marker.setMap(map);
}

function openCalc(evt, calcName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("calc");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-green", "");
  }
  document.getElementById(calcName).style.display = "block";
  evt.currentTarget.className += " w3-green";
}

function mort(amount, rate, period) {
  var i = (rate) / 100 / 12;
  var n = period * 12;
  var p = amount;
  var c = p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  var t = c * n;

  var cOut = Math.round(c * 100) / 100;
  var tOut = Math.round(t * 100) / 100;

  document.getElementById('mortresults').innerHTML =
    "<div><p>TOTAL COST: " + tOut +
    "</p></div><div><p>MONTHLY PAYMENTS: " + cOut +
    "</p></div>";
}

function loanmax(mon, rate, period) {
  var i = (rate) / 100 / 12;
  var n = period * 12;
  var p = mon * (Math.pow(1 + i, n) - 1) / (i * (Math.pow(1 + i, n)));
  var t = mon * n;

  var pOut = Math.round(p * 100) / 100;
  var tOut = Math.round(t * 100) / 100;

  document.getElementById('monresults').innerHTML =
    "<div><p>TOTAL COST: " + tOut +
    "</p></div><div><p>YOU CAN BORROW: " + pOut +
    "</p></div>";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function moveToQuiz(index) {
  if (index == 0) {
    window.location.assign("mainQuiz.html");
  } else if (index == 1) {
    window.location.assign("refinance.html");
  } else {
    window.location.assign("purchase.html");
  }
}