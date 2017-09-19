function initMap() {
    // Create a map object and specify the DOM element for display.
    var myLatLng = {
        lat: 59.3367674
        , lng: 18.0747851
    };
    var styledMapType = new google.maps.StyledMapType(
        //"Gowalla"           
[
            {
                "featureType": "administrative.land_parcel"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    }
            , {
                "featureType": "landscape.man_made"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    }
            , {
                "featureType": "poi"
                , "elementType": "labels"
                , "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    }
            , {
                "featureType": "road"
                , "elementType": "labels"
                , "stylers": [
                    {
                        "visibility": "simplified"
            }
                    , {
                        "lightness": 20
            }
        ]
    }
            , {
                "featureType": "road.highway"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "hue": "#f49935"
            }
        ]
    }
            , {
                "featureType": "road.highway"
                , "elementType": "labels"
                , "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    }
            , {
                "featureType": "road.arterial"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "hue": "#fad959"
            }
        ]
    }
            , {
                "featureType": "road.arterial"
                , "elementType": "labels"
                , "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    }
            , {
                "featureType": "road.local"
                , "elementType": "geometry"
                , "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    }
            , {
                "featureType": "road.local"
                , "elementType": "labels"
                , "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    }
            , {
                "featureType": "transit"
                , "elementType": "all"
                , "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    }
            , {
                "featureType": "water"
                , "elementType": "all"
                , "stylers": [
                    {
                        "hue": "#a1cdfc"
            }
                    , {
                        "saturation": 30
            }
                    , {
                        "lightness": 49
            }
        ]
    }
], {
            name: 'Styled Map'
        });
    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng
        , zoom: 15
        , mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain'
                    , 'styled_map']
        }
    });
    var marker = new google.maps.Marker({
        position: myLatLng
    });
    marker.setMap(map);
    marker.setMap(map);
    marker.setMap(map);
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}