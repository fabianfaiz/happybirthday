// file: music.js

let audio;

// Jika sudah ada data di sessionStorage, baca
const savedTime = sessionStorage.getItem("music_time");
const savedPlay = sessionStorage.getItem("music_playing");

function startMusic() {
    if (!audio) {
        audio = new Audio("monolog.mp3");
        audio.loop = true;

        // jika ada waktu tersimpan → lanjut
        if (savedTime) audio.currentTime = parseFloat(savedTime);

        // jika sebelumnya sedang play → lanjut play
        if (savedPlay === "true") {
            audio.play();
        } else if (!savedPlay) {
            // halaman pertama → auto play
            audio.play();
        }
    }
}

// Simpan waktu musik setiap 500 ms
setInterval(() => {
    if (audio) {
        sessionStorage.setItem("music_time", audio.currentTime);
        sessionStorage.setItem("music_playing", !audio.paused);
    }
}, 500);

startMusic();
