AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);
        this.el.addEventListener('markerFound', showText);
    }
});

function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
};

function showText() {
    var marker = document.querySelector("pattern-logo");
    if (marker && marker.object3D.visible) {
        setUpButton();
    }
};

function setUpButton() {
    var button = document.querySelector(".button");
    if (button.style.display === 'none' || !button.style.display) {
        button.innerHTML = "This is a model!";
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};