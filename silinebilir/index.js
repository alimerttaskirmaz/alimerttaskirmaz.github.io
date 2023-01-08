
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 40, lng: 26 },
    mapTypeId: "terrain",
  });
  const flightPlanCoordinates = [
    { lat: 42.718, lng: 24.356 },
    { lat: 40.565, lng: 26.845 },
    { lat: 38.839, lng: 27.282 },
    { lat: 30.646, lng: 29.034 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 4,
  });

  flightPath.setMap(map);
}
  
window.initMap = initMap;
  