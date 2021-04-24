AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);
        this.el.addEventListener('markerFound', showText);
    }
});

//function handleClickEvent() {
    //window.location = 'https://sencom.com.au/';
//};

function showText() {
    var marker = document.querySelector("pattern-logo");
    var button = document.querySelector(".button");
    if (marker && marker.object3D.visible) {
        button.innerHTML = "This is a model!";
        button.style.display = "block";
    }
};