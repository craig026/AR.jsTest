AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        //this.el.addEventListener('touchend', handleClickEvent);
        //this.el.addEventListener('click', handleClickEvent);
        this.el.addEventListener('showButton', showButtonEvent);
		/*var m = document.querySelector("a-marker")
		    m.addEventListener("markerFound", (e)=>{
		var text = document.querySelector("text");
			text.innerHTML = "This is a model!";
			text.style.display = "block";
		})*/
    }
});

function showButtonEvent() {
    var m = document.querySelector(".say-hi-button");
    m.addEventListener("click", function () {
        window.location = 'https://sencom.com.au/';
    })
}

function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
};