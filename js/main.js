mapboxgl.accessToken = 'pk.eyJ1Ijoiam11cnBoeTYiLCJhIjoiY2wzMDM5bDl6MDkwOTNlbzVwaGhqeWpjNiJ9.n13daIQpHjVjr0igVuOwTQ';


const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/jmurphy6/cl3km97am001315o548rgqe7w', // style URL
center: [-82.554229,35.588752], // starting position [lng, lat]
zoom: 13 // starting zoom
});

var geojson =
{
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.556686,35.595481 ]
    },
    "properties": {
    "name":"Grove Arcade",
    "image":"css/images/grovearcade_bebettes.jpg",
    "description":"photo by ",
    "maxsize":3000,
    "height":19.8,
    "volume":30.888,
    "distance":1450,
    "canopy":0,
    "url":"https://grovearcade.com/blog/bebettes-first-anniversary/",
    "shorturl":"Grove Arcade"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.549424,35.58094 ]
    },
    "properties": {
    "name":"Mission Hospital",
    "image":"css/images/missionhospital.jpg",
    "maxsize":3000,
    "height":15.7,
    "volume":28.26,
    "distance":1595,
    "canopy":0,
    "url":"https://blog.mission-health.org/2019/10/08/st-josephs-facility-a-continuation-of-our-history-a-blessing-for-our-future/",
    "shorturl":"Mission Health Blog"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.554864,35.597521 ]
    },
    "properties": {
    "name":"Thomas Wolfe Auditorium",
    "image":"css/images/thomaswolfe.jpg",
    "maxsize":1785,
    "height":26.4,
    "volume":79.2,
    "distance":1655,
    "canopy":0,
    "url":"https://www.romanticasheville.com/civic_center.htm",
    "shorturl":"Romantic Asheville"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.542818,35.62127 ]
    },
    "properties": {
    "name":"Grove Park Inn",
    "image":"css/images/groveparkinn.jpg",
    "maxsize":1560,
    "height":24.8,
    "volume":214.272,
    "distance":1890,
    "canopy":0.1,
    "url":"https://www.omnihotels.com/hotels/asheville-grove-park",
    "shorturl":"Omni Hotels"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.546189,35.6 ]
    },
    "properties": {
    "name":"Park Place",
    "image":"css/images/parkplace.jpg",
    "maxsize":1200,
    "height":18.2,
    "volume":54.6,
    "distance":2450,
    "canopy":0.1,
    "url":"https://www.leslieandassoc.com/commercials/north-downtown-asheville/park-place-office-building-70-woodfin-pl",
    "shorturl":"Leslie and Associates, Inc."
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.553749,35.596709 ]
    },
    "properties": {
    "name":"Rankin Ave (Noble)",
    "image":"css/images/rankinavenoble.jpg",
    "maxsize":975,
    "height":12.4,
    "volume":12.4,
    "distance":1740,
    "canopy":0,
    "url":"https://www.noblecider.com/noble-downtown",
    "shorturl":"Noble Cider"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.55482,35.591382 ]
    },
    "properties": {
    "name":"Buncombe County Tax Dept.",
    "image":"css/images/buncombetax.jpg",
    "maxsize":950,
    "height":10.4,
    "volume":8.736,
    "distance":1415,
    "canopy":0,
    "url":"https://wlos.com/news/local/buncombe-co-tax-department-encourages-other-ways-to-pay-versus-in-office",
    "shorturl":"WLOS"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.554229,35.588752 ]
    },
    "properties": {
    "name":"Lofts at South Slope",
    "image":"css/images/loftssouthslope.jpg",
    "maxsize":600,
    "height":13.4,
    "volume":0,
    "distance":1265,
    "canopy":0,
    "url":"https://www.loftsatsouthslope-nc.com/",
    "shorturl":"The Lofts at South Slope"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.554087,35.619748 ]
    },
    "properties": {
    "name":"Sherwin Williams",
    "image":"css/images/sherwinwilliams.jpg",
    "maxsize":600,
    "height":9.8,
    "volume":6.86,
    "distance":1505,
    "canopy":0,
    "url":"https://www.google.com/maps/uv?pb=!1s0x8859f4b62982f5d3%3A0xdbd845e16b7c704a!3m1!7e115!4s%2Fmaps%2Fplace%2Fsherwin%2Bwilliams%2Bmerrimon%2F%4035.6195776%2C-82.5543099%2C3a%2C75y%2C74.3h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sF90OiU9IOwZSiJdyKdHsXw*212e0*214m2*213m1*211s0x8859f4b62982f5d3%3A0xdbd845e16b7c704a%3Fsa%3DX%26hl%3Den!5ssherwin%20williams%20merrimon%20-%20Google%20Search!15sCgIgARICCAI&imagekey=!1e2!2sF90OiU9IOwZSiJdyKdHsXw&hl=en&sa=X&ved=2ahUKEwjJ4trj1fv3AhW5oI4IHQUHDowQpx96BAhaEAg",
    "shorturl":"Google Maps Street View"
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
    "image":"css/images/forestrycamp.jpg",
    "maxsize":500,
    "height":14.8,
    "volume":25.012,
    "distance":755,
    "canopy":0.15,
    "url":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.citizen-times.com%2Fstory%2Fentertainment%2F2021%2F08%2F18%2Fdining-review-outpost-forestry-camp-asheville-restaurant-near-me-river-arts-district%2F5557964001%2F&psig=AOvVaw0zTra1nPLEsc5p2ukXBr02&ust=1653603492360000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC9wpnX-_cCFQAAAAAdAAAAABAJ",
    "shorturl":"Asheville Citizen-Times"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.550034,35.629949 ]
    },
    "properties": {
    "name":"Jones Elementary School",
    "image":"css/images/joneselementary.jpg",
    "maxsize":350,
    "height":12.5,
    "volume":14,
    "distance":770,
    "canopy":0.2,
    "url":"https://wlos.com/news/local/covid-19-cluster-ira-b-jones-elementary-school-buncombe-county",
    "shorturl":"WLOS"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.551679,35.596102 ]
    },
    "properties": {
    "name":"Amanda's Hair Studio",
    "image":"css/images/amandahairstudio.jpg",
    "maxsize":300,
    "height":9.5,
    "volume":4.655,
    "distance":1840,
    "canopy":0,
    "url":"https://www.facebook.com/amandashairstudioelkin/",
    "shorturl":"Facebook"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.623081,35.565192 ]
    },
    "properties": {
    "name":"Asheville School I",
    "description":"photo by ",
    "image":"css/images/ashevilleschool.jpg",
    "maxsize":300,
    "height":19.4,
    "volume":29.1,
    "distance":1135,
    "canopy":0.25,
    "url":"https://www.ashevilleschool.org/asheville-school-news/~post/asheville-school-celebrates-119th-opening-day-with-record-enrollment-and-campus-improvements-20180817",
    "shorturl":"Asheville School"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.601022,35.577399 ]
    },
    "properties": {
    "name":"Lucy Herring Elementary",
    "image":"css/images/lucyherringelementary.jpg",
    "maxsize":250,
    "height":8,
    "volume":3.92,
    "distance":1160,
    "canopy":0.01,
    "url":"https://www.bpr.org/news/2021-02-02/asheville-city-schools-renames-vance-elementary",
    "shorturl":"Blue Ridge Public Radio News"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.592677,35.577475 ]
    },
    "properties": {
    "name":"Provisions Furniture",
    "image":"css/images/provisions.jpg",
    "maxsize":170,
    "height":8.8,
    "volume":5.28,
    "distance)":1410,
    "canopy":0,
    "url":"https://wlos.com/news/local/asheville-store-opens-in-middle-of-covid-19-pandemic",
    "shorturl":"WLOS"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.6237977,35.5664165 ]
    },
    "properties": {
    "name":"Asheville School II",
    "image":"css/images/ashevilleschool.jpg",
    "description":"photo by ",
    "maxsize":137,
    "height":17.4,
    "volume":26.1,
    "distance":1135,
    "canopy":0.25,
    "url":"https://www.ashevilleschool.org/asheville-school-news/~post/asheville-school-celebrates-119th-opening-day-with-record-enrollment-and-campus-improvements-20180817",
    "shorturl":"Asheville School"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.592529,35.585641 ]
    },
    "properties": {
    "name":"Army Reserve Center",
    "image":"css/images/armyreserve.jpg",
    "maxsize":135,
    "height":14.3,
    "volume":25.74,
    "distance":1870,
    "canopy":0.15,
    "url":"https://www.google.com/maps/place/US+Army+Reserve/@35.5856317,-82.592133,3a,75y,275.39h,90t/data=!3m7!1e1!3m5!1sDung0aQxITbluoDuNucpjQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DDung0aQxITbluoDuNucpjQ%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D275.39386%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m9!1m2!2m1!1sarmy+reserve+center+asheville!3m5!1s0x88598c91bc3a9647:0x6307ba00199487e!8m2!3d35.5856441!4d-82.5923976!15sCh1hcm15IHJlc2VydmUgY2VudGVyIGFzaGV2aWxsZSIDiAEBkgENbWlsaXRhcnlfYmFzZQ?hl=en",
    "shorturl":"Google Street View"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.551712,35.630947 ]
    },
    "properties": {
    "name":"Asheville Catholic School",
    "image":"css/images/ashevillecatholicschool.jpg",
    "maxsize":100,
    "height":9.8,
    "volume":6.272,
    "distance":635,
    "canopy":0.05,
    "url":"https://www.google.com/maps/place/Asheville+Catholic+School/@35.6314561,-82.5514589,3a,75y,248.88h,91.1t/data=!3m7!1e1!3m5!1s3Y0X5E1OQ-k0I1PKDmicTw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D3Y0X5E1OQ-k0I1PKDmicTw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D235.352%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x8859f4d010062157:0xf631193b905d7fe5!8m2!3d35.6312445!4d-82.5518382?hl=en",
    "shorturl":"Google Street View"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.563101,35.593201 ]
    },
    "properties": {
    "name":"Haywood St. Congregation",
    "image":"css/images/haywoodstreetcongregation.jpg",
    "maxsize":60,
    "height":10.2,
    "volume":2.55,
    "distance":850,
    "canopy":0.05,
    "url":"https://www.lifeinthecarolinas.com/hidden-treasures/2021/5/10/haywood-street-congregation-fresco",
    "shorturl":"Carl White's Life in the Carolinas"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.568041,35.616162 ]
    },
    "properties": {
    "name":"UNCA Vance Hall",
    "image":"css/images/vancehall.jpg",
    "maxsize":30,
    "height":4.6,
    "volume":3.22,
    "distance":780,
    "canopy":0.2,
    "url":"https://housing.unca.edu/residence-halls/governors-village/",
    "shorturl":"UNC Asheville"
    }
  }
]
}
// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'blankmarker';

  // make a marker for each feature and add to the map
    
  new mapboxgl.Marker(el)
    
  .setLngLat(feature.geometry.coordinates)
    
  .setPopup(
    new mapboxgl.Popup({ offset: 15 }) // add popups
      .setHTML(
        `<h2>${feature.properties.name}</h2>
        <img width="100%" height="auto" src="${feature.properties.image}"/>
        <p>Max size of roost: ${feature.properties.maxsize} swifts</p>
        <p>Height of chimney: ${feature.properties.height} meters</p>
        <p>Volume of chimney: ${feature.properties.volume} cubic meters</p>
        <p>Distance from water: ${feature.properties.distance} meters</p>
        <p>Canopy cover: ${feature.properties.canopy}</p>
        <p>Photo from: <a href="${feature.properties.url}">${feature.properties.shorturl}</a></p>`
      )
  )
  .addTo(map);
}
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

