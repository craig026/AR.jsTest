AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);
    }
});

function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
}