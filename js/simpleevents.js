AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        //this.el.addEventListener('touchend', handleClickEvent);
        //this.el.addEventListener('click', handleClickEvent);
        //this.el.addEventListener('showButton', showButtonEvent);


        //document.querySelector(".say-hi-button")
            

        document
            .querySelector(".say-hi-button")
            .style.display = "none"
            .addEventListener("click", function () {
                window.location = 'https://sencom.com.au/';
                })

        document.querySelector("a-marker")
            .addEventListener("markerFound", (e) => {
                document.querySelector(".say-hi-button")
                .style.display = "block";
            })

    }
});

function showButtonEvent() {

}

function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
};