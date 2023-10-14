//october 1 MAP JS//
mapboxgl.accessToken = 'pk.eyJ1Ijoiam11cnBoeTYiLCJhIjoiY2wzMDM5bDl6MDkwOTNlbzVwaGhqeWpjNiJ9.n13daIQpHjVjr0igVuOwTQ';


const map5 = new mapboxgl.Map({
container: 'map5', // container ID
style: 'mapbox://styles/jmurphy6/cl3u61yci002016ms1xlwjtr6', // style URL
center: [-82.558,35.589], // starting position [lng, lat]
zoom: 11 // starting zoom
});

var geojson =
{
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.542818,35.62127 ]
    },
    "properties": {
    "name":"Grove Park Inn",
    "maxsize":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.554087,35.619748 ]
    },
    "properties": {
    "name":"Merrimon Ave",
    "maxsize":150
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.553749,35.596709 ]
    },
    "properties": {
    "name":"Rankin Ave",
    "maxsize":0
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.536944,35.563139 ]
    },
    "properties": {
    "name":"Forestry Camp",
    "maxsize":400
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.554864,35.597521 ]
    },
    "properties": {
    "name":"Civic Center",
    "maxsize":50
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.623081,35.565192 ]
    },
    "properties": {
    "name":"Asheville School",
    "maxsize":0
    }
  }
]
}
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
    
  new mapboxgl.Marker(el)
    
  .setLngLat(feature.geometry.coordinates)
    
  .setPopup(
    new mapboxgl.Popup({ offset: 15 }) // add popups
      .setHTML(
        `<h2>${feature.properties.name}</h2>
        <p>Max size of roost: ${feature.properties.maxsize} swifts</p>`
      )
  )
  .addTo(map5);
}
map5.scrollZoom.disable();
map5.addControl(new mapboxgl.NavigationControl());