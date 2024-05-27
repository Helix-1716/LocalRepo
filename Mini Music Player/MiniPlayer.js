const songList = [
    {
        name: "SLAY",
        artist: "Eternxlkz",
        src: "assets/Eternxlkz  SLAY [1].mp3",
        cover: "assets/1.1.jpg"
    },
    {
        name: "EEYUH",
        artist: "Hr",
        src: "assets/eeyuh  hr [3].mp3",
        cover: "assets/3.3.jpg"
    },
    {
        name: "ENOUGH",
        artist: "Eternxlkz",
        src: "assets/Enough eternxlkz[2].mp3",
        cover: "assets/2.2.jpg"
    }
];

const artistName = document.querySelector('.artist-name');
const musicName = document.querySelector('.song-name');
const fillBar = document.querySelector('.fill-bar');
const time = document.querySelector('.time');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prog = document.querySelector('.progress-bar');

let song = new Audio();
let currentSong = 0;
let playing = false;

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', togglepalyPause);
    prog.addEventListener('click', seek);
});

function loadSong(index) {
    const { name, artist, src, cover: thumb } = songList[index];
    artistName.innerText = artist;
    musicName.innerText = name;
    song.src = src;
    cover.style.backgroundImage = `url(${thumb})`;
}

function updateProgress() {
    if(song.duration){
        const pos = (song.currentTime / song.duration) * 100;
        fillBar.style.width = `${pos}%`;

        const duration = formatTime(song.duration);
        const currentTime = formatTime(song.currentTime);
        time.innerText = `${currentTime} - ${duration}`;
    }
}

    


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `$(minutes):${secs < 10 ? '0' : ''}${secs}`;
}

function togglepalyPause() {
    if(playing) {
        song.pause();
    }else {
        song.play();
    }
    playing = !playing;
    playBtn.classList.toggle('fa-pause', playing);
    playBtn.classList.toggle('fa-play', !playing);
    cover.classList.toggle('active', playing);

}

function nextSong(){
    currentSong = (currentSong + 1) % songList.length;
    playMusic();
}

function prevSong() {
    currentSong = (currentSong - 1 + songList.length) % songList.length;
    playMusic();
}

function playMusic() {
    loadSong(currentSong);
    song.play();
    playing = true;
    playBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    cover.classList.add('active');
}

function seek(e) {
    const pos = (e.offsetX / prog.clientWidth) * song.duration;
    song.currentTime = pos;
}