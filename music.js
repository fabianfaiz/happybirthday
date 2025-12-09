// --- Global Music Player ---

// Cek apakah musik sudah dibuat
if (!window.globalMusic) {
    window.globalMusic = new Audio("monolog.mp3");
    window.globalMusic.loop = true;
    window.globalMusic.volume = 1.0;
}

// Autoplay setelah user berinteraksi
function startMusic() {
    window.globalMusic.play().catch(() => {});
}

document.addEventListener("click", startMusic, { once: true });
