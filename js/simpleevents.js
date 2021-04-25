AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);

		/*var m = document.querySelector("a-marker")
		    m.addEventListener("markerFound", (e)=>{
		var text = document.querySelector("text");
			text.innerHTML = "This is a model!";
			text.style.display = "block";
		})*/
    }
});

/*function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
};*/