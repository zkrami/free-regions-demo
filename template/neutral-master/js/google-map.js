
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(34.7988293, 36.7584179);
    // 39.399872
    // -8.224454

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };



    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var addresses = [
        {
            p:
            {
                lat: 33.5092117,
                lng: 36.277994
            },
            name: "المنطقة الحرة"
        },
        {
            p: {
                lat:34.8945656,
                lng:35.8720865,
            },
            name: "طرطوس"
        } ,
        {
            p: {
                lat:33.6036036,
                lng:36.506727,
            },
            name: "عدرا"
        },
        {
            p:{
                lat:34.4095414,
                lng:36.7478354
            },
            name:"حسياء"
        },
        {
            p:{
                lat:36.3262492,
                lng:37.203758
            },
            name:"حلب"
        },
        {
            p:{
                lat:35.5374843,
                lng:35.7681738
            },
            name:"اللاذقية"
        }
    ];
    for (let x of addresses) {
        var p = x.p;
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        new google.maps.Marker({
            position: latlng,
            map: map,
            title: x.name,

        });

    }


}
google.maps.event.addDomListener(window, 'load', init);