const albums = document.querySelectorAll(".album");

albums.forEach((album, index) => {
    const audio = document.getElementById(`audio${index + 1}`);
    
    album.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

document.getElementById("video-button").addEventListener("click", () => {
    // Crear un corazón y agregarlo al efecto de corazones
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    document.getElementById("heart-effect").appendChild(heart);

    // Redirigir al video
    window.location.href = "https://youtube.com/shorts/0Vbila8GTVE?feature=share";
});
