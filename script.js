window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Ptera',
            location: {
                lat: 35.150387,
                lng: 129.134514,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${35.150387}; longitude: ${129.134514};`);
        model.setAttribute('gltf-model', './assets/ptera.gltf');
        model.setAttribute('rotation', '0 65 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '1.2 1.2 1.2');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
