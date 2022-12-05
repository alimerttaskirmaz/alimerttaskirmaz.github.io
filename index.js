// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 0, lng: -180 },
      mapTypeId: "terrain",
    });
    const flightPlanCoordinates = [
      { lat: 42.718, lng: 24.356 },
      { lat: 40.565, lng: 26.845 },
      { lat: 38.839, lng: 27.282 },
      { lat: 30.646, lng: 29.034 },
      { lat: 23.515, lng: 34.790 },
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    flightPath.setMap(map);
  }
  
  window.initMap = initMap;
  