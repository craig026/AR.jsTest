AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);
        //this.el.addEventListener('markerFound', showText);
    }
});

function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
};

/*function showText() {
    var marker = document.querySelector("pattern-logo");
    var text = document.querySelector("text");
    if (marker.object3D.visible == true) {
        text.innerHTML = "This is a model!";
        text.style.display = "block";
    }
};*/