AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        //this.el.addEventListener('touchend', handleClickEvent);
        //this.el.addEventListener('click', handleClickEvent);
        //this.el.addEventListener('showButton', showButtonEvent);
		/*var m = document.querySelector("a-marker")
		    m.addEventListener("markerFound", (e)=>{
		var text = document.querySelector("text");
			text.innerHTML = "This is a model!";
			text.style.display = "block";
		})*/

        document.querySelector(".say-hi-button")
            .style.display = "none";

        document
            .querySelector(".say-hi-button")
            .addEventListener("click", function () {
                window.location = 'https://sencom.com.au/';
        })
    }
});

function showButtonEvent() {

}

function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
};