var map = L.map('map', {
    center: [21.943044, 78.548192], // EDIT coordinates to re-center map
    zoom: 5,  // EDIT from 1 (zoomed out) to 18 (zoomed in)
    scrollWheelZoom: true,
    tap: false,
  });

  L.tileLayer(
    'https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=M8Jjwhal838wKJDWdh8b', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }).addTo(map);

var osmGeocoder = new L.Control.OSMGeocoder({placeholder: 'Search location...'});
map.addControl(osmGeocoder);

var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(29.412811, 77.250285),
		L.latLng(9.726395, 77.602082)
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true,
	reverseWaypoints: true,
	showAlternatives: true,
	altLineOptions: {
		styles: [
			{color: 'black', opacity: 0.15, weight: 9},
			{color: 'white', opacity: 0.8, weight: 6},
			{color: 'blue', opacity: 0.5, weight: 2}
		]
	}
})).addTo(map);

// L.Routing.errorControl(control).addTo(map);
var map2 = new L.TileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=M8Jjwhal838wKJDWdh8b', {minZoom: 0, maxZoom: 13, attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' });
var miniMap = new L.Control.MiniMap(map2, { toggleDisplay: true }).addTo(map);

L.control.coordinates({
	position:"bottomleft",
	useDMS:true,
	labelTemplateLat:"N {y}",
	labelTemplateLng:"E {x}",
	useLatLngOrder:true,
	enableuserInput:false
}).addTo(map);

var history = new L.HistoryControl({
	maxMovesToSave: 3
}).addTo(map);

lc = L.control.locate({
    strings: {
        title: "Your Location"
    }
}).addTo(map);

