AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);
    },
    /*tick: function () {
        hideSpeechBubbleIfNoMarker();
    }*/
});

/*function hideSpeechBubbleIfNoMarker() {
    var speechBubble = document.querySelector(".speech-bubble");
    if (speechBubble.style.display === 'none' || !speechBubble.style.display) return;

    var shouldHide = true;
    builders.forEach(function (builder) {
        var builderMarker = document.querySelector("#" + builder.name);
        if (builderMarker && builderMarker.object3D.visible) shouldHide = false;
    });

    if (shouldHide) speechBubble.style.display = 'none';
};*/

function handleClickEvent() {
    /*builders.forEach(function (builder) {
        var builderMarker = document.querySelector("#" + builder.name);
        if (builderMarker && builderMarker.object3D.visible) {
            toggleSpeechBubble(builder.dialogue);
        }

    });*/
    var background = document.querySelector(".arjs-loader");
        background.style.display = 'block';
        background.innerHTML = "Marker Found!";
}

/*function toggleSpeechBubble(dialogue) {
    var speechBubble = document.querySelector(".speech-bubble");
    if (speechBubble.style.display === 'none' || !speechBubble.style.display) {
        speechBubble.innerHTML = dialogue;
        speechBubble.style.display = 'block';
    } else {
        speechBubble.style.display = 'none';
    }

};*/