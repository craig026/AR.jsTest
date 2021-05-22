AFRAME.registerComponent('markerhandler', {

    init: function () {
        const animatedMarker = document.querySelector("#sentient");
        const aEntity = document.querySelector("#truck");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                //window.location = 'https://sencom.com.au/';
            }
            
        });
    }
});