
console.log("spck editor teste")





const progressBar = document.querySelector('.progress');
const playButton = document.querySelector('.bi-play-fill').parentNode;
const skipStartButton = document.querySelector('.bi-skip-start-fill').parentNode;
const skipEndButton = document.querySelector('.bi-skip-end-fill').parentNode;
const audio = document.getElementById('meuAudio');
const heartButton = document.querySelector('.bi-heart');
const currentTimeElement = document.getElementById('current-time');
const totalTimeElement = document.getElementById('total-time');

// Selecionar todos os botões
const botoes = document.querySelectorAll('button');
console.log(botoes);

// Selecionar todos os elementos com a classe "btn"
const elementosComClasseBtn = document.querySelectorAll('.btn');
console.log(elementosComClasseBtn);

// Selecionar todos os elementos da página
const todosElementos = document.querySelectorAll('*');
console.log(todosElementos);

let isPlaying = false;

function playMusic() {
  isPlaying = true;
  audio.play();
}

function pauseMusic() {
  isPlaying = false;
  audio.pause();
}

playButton.addEventListener('click', () => {
  if (isPlaying) {
    pauseMusic();
    playButton.innerHTML = '<i class="bi bi-play-fill"></i>';
  } else {
    playMusic();
    playButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
  }
});

skipStartButton.addEventListener('click', () => {
  audio.currentTime = 0;
});

skipEndButton.addEventListener('click', () => {
  if (isFinite(audio.duration)) {
    audio.currentTime = audio.duration;
  }
});

heartButton.addEventListener('click', () => {
  heartButton.classList.toggle('bi-heart-fill');
  heartButton.classList.toggle('bi-heart');
});

audio.addEventListener('loadedmetadata', () => {
  const totalMinutes = Math.floor(audio.duration / 60);
  const totalSeconds = Math.floor(audio.duration % 60);
  totalTimeElement.textContent = `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  currentTimeElement.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
});

audio.addEventListener('error', (e) => {
  console.log('Erro ao carregar o arquivo de áudio:', e);
});

audio.addEventListener('canplay', () => {
  console.log('Arquivo de áudio carregado corretamente');
});