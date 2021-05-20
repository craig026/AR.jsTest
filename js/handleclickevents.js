AFRAME.registerComponent('markerhandler', {

    init: function () {
        const animatedMarker = document.querySelector("#sentient");
        const aEntity = document.querySelector("#truck");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function (ev, target) {
            window.location = 'https://sencom.com.au/';
        });
    }
});