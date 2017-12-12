const MapWrapper = function (container, coords, zoomScale) {

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoomScale
  });
  this.markers = [];
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap,
    'click',
    function(event) {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };

      this.addMarker(position);

    }.bind(this));
  };

  // MapWrapper.prototype.addMarkerClick = function (marker) {
  //   google.maps.event.addListener(marker,
  //     'click',
  //     function() {
  //       console.log('clicked');
  //
  // }.bind(this));
  // };

  MapWrapper.prototype.addMarker = function (coords) {
    const marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });

    var infowindow = new google.maps.InfoWindow({
      content: 'hello'
    });
    google.maps.event.addListener(marker,
      'click',
      function() {
        console.log('clicked');
        infowindow.open(this.googleMap, marker);
      });
    };


    MapWrapper.prototype.bounceMarkers = function () {
      this.markers.forEach(function(marker){
        marker.setAnimation(google.maps.Animation.BOUNCE);

        //this is how you remove all markers
      });
    };

    MapWrapper.prototype.westVirginia = function () {
      this.addMarker({lat: 38.5976262 , lng: -80.454902 });
      console.log('take me home, west virigina');
      const newPosition = new google.maps.LatLng(38.5976262, -80.454902);
      this.googleMap.panTo(newPosition);
    };



MapWrapper.prototype.deleteAllMarkers = function () {
  this.markers.forEach(function(marker){
    marker.setMap(null);
  });
  this.markers =[];
};
