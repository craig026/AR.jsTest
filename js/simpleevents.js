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
    <style>
        .buttons {
            position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
      }
  
    .say-hi-button {
            padding: 0.25em;
        border-radius: 4px;
        border: none;
        background: white;
        color: black;
        width: 15em;
        height: 3em;
      }
    </style>
}

function handleClickEvent() {
    window.location = 'https://sencom.com.au/';
};