AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);
    }
});

function handleClickEvent() {
    var marker = document.querySelector("#" + "pattern-logo");
    if (marker.object3D.visible) {
        window.location = 'https://sencom.com.au/'
    };
}