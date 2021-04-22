let panorama;

function initMap() {
  const astorPlace = { lat: 46.17575875148351, lng: 21.318416713981446};
  // Set up the map
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: '7278ba2431ab71b1',
    center: astorPlace,
    zoom: 18,
    streetViewControl: false,
  });
  // Set up the markers on the map
  const cafeMarker = new google.maps.Marker({
    position: { lat: 46.17560272535886, lng: 21.319242833257817},
    map,
    icon:
      "https://i.imgur.com/UsLiMQA.png",
    title: "Cafe",
  });
  const bankMarker = new google.maps.Marker({
    position: { lat: 40.729681, lng: -73.991138 },
    map,
    icon:
      "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=dollar|FFFF00",
    title: "Bank",
  });
  const busMarker = new google.maps.Marker({
    position: { lat: 40.729559, lng: -73.990741 },
    map,
    icon:
      "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=bus|FFFF00",
    title: "Bus Stop",
  });
  cafeMarker.addListener('click', () => {
    toggleStreetView();
  })
  // We get the map's default panorama and set up some defaults.
  // Note that we don't yet set it visible.
  panorama = map.getStreetView(); // TODO fix type
  panorama.setPosition(astorPlace);
  panorama.setPov(
    {
      heading: 265,
      pitch: 0,
    }
  );
}

function toggleStreetView() {
  const toggle = panorama.getVisible();

  if (toggle == false) {
    panorama.setVisible(true);
  } else {
    panorama.setVisible(false);
  }
}

function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
