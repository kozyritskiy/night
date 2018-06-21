export default function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12.8,
    center: { lat: 53.9154651, lng: 27.4897809 },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    styles: [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [
          {
            weight: "2.00"
          }
        ]
      },
      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#9c9c9c"
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7b7b7b"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#46bcec"
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#004cd1"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#070707"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      }
    ]
  });
  var img = {
    url: "assets/images/svg/map_marker.svg",
    size: new google.maps.Size(50, 50),
    scaledSize: new google.maps.Size(50, 50)
  };

  var marker = new google.maps.Marker({
    position: { lat: 53.922223, lng: 27.581867 },
    map: map,
    icon: img,
    title: "ул. Gintovta 40"
  });
}
