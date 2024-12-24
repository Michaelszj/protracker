const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4" // 你可以添加更多视频链接
];

let currentVideoIndex = 0;

function updateVideo() {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
}