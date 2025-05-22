mapboxgl.accessToken = mapBoxToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({ color: "#FF0000" }) // create a new marker
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${listing.title}</h3><p>Exact location will be provided after booking.</p>` // add popups
    )) // add popups
    .setLngLat(listing.geometry.coordinates) // Listing.geometry.coordinates
    .addTo(map); // add marker to the map