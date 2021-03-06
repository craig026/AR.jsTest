AFRAME.registerComponent('markerhandler', {

    init: function () {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");
        const button = document.querySelector(".show-details-button");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function (ev, target) {
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (animatedMarker.object3D.visible) {
            if (aEntity && intersectedElement === aEntity && animatedMarker.object3D.visible) {
                button.style.display = 'block';
                //window.location = 'https://sencom.com.au/';
                //const scale = aEntity.getAttribute('scale');
                //Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                //aEntity.setAttribute('scale', scale);
                }
            }
        });
    }
});