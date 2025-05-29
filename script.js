function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const texts = [
  "Duale Studentin an der DHBW",
  "Freemoverin an der BFH",
  "Content Creatorin",
  "Business Analysitin",
];

const textElement = document.getElementById("typing-text");
let index = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentText = texts[index];

  if (!deleting) {
    textElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      index = (index + 1) % texts.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();

// bobo.html
function initMap() {
  var options = {
    zoom: 12,
    center: { lat: 46.948998594, lng: 7.437170775 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  // Markierungen setzten mit Array und Loop
  var marker = [
    {
      coords: { lat: 46.941957, lng: 7.403097 },
      content: "<h1> BOBO </h1>",
    },
  ];

  for (var i = 0; i < marker.length; i++) {
    addMarker(marker[i]);
  }

  // Markierungen hinzufügen - Funktion
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
