AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        //this.el.addEventListener('touchend', handleClickEvent);
        //this.el.addEventListener('click', handleClickEvent);
        //this.el.addEventListener('showButton', showButtonEvent);

        //this.marker = document.querySelector("a-marker");
        //this.markervisible = false;

        document
            .querySelector(".say-hi-button")
            .style.display = "none"
            .addEventListener("click", function () {
                window.location = 'https://sencom.com.au/';
            })
    },

    /*tick: function () {
        if (!this.marker) return;
        if (this.marker.object3D.visible) {
            if (!this.markervisible) {
                // marker detected
                this.markervisible = true
                document.querySelector(".say-hi-button")
                    .style.display = "block"
            }
        } else {
            if (this.markervisible) {
                // lost sight of the marker
                this.markervisible = false
                document.querySelector(".say-hi-button")
                    .style.display = "none"
            }
        }
    },*/
});



function showButtonEvent() {

}

function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
};