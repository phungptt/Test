document.addEventListener("DOMContentLoaded", function(event) { 
    var btnPlay = document.getElementById("btn-play"),
        videoPlay = document.getElementById("video-play"),
        videoBackground = document.getElementById("video-background");

    document.getElementById("btn-play").addEventListener('click', function(){
        videoBackground.style.display = 'none';
        videoPlay.style.display = 'block';
    })
});

