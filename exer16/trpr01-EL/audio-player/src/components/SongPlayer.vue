<script setup lang="ts">
import Song from '../scripts/song';

const props = defineProps({song: Song})

let selectedSong = new Audio()

let songDuration: number
let formattedSongCurrentTime : String = formatTime(selectedSong.currentTime)
let formattedSongDuration: String

let isPlaying = false

function initAudio() {
  selectedSong.src = './src/assets/songs/' + props.song?.fileName

  selectedSong.onloadedmetadata = () => {
    songDuration = selectedSong.duration
    
    formattedSongDuration = formatTime(songDuration)
  }
  selectedSong.load()
}

function formatTime(time :number) : string {
  let minutes : any = Math.floor(time / 60)
    let extraSeconds : any = Math.floor(time % 60)
    minutes = minutes < 10 ? "0" + minutes : minutes
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds
    return minutes + ":" + extraSeconds
}

function playSong() {
  if(isPlaying == false || selectedSong.currentTime >= selectedSong.duration) {
    initAudio()
  }  

  selectedSong.play()
  isPlaying = true
}

function pauseSong() {
  console.log(formattedSongDuration)
  selectedSong.pause()
}

function stopSong() {
  pauseSong();
  selectedSong.load()
  isPlaying = false
}

</script>

<template>

    <div id="songPlayer" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary">

        <div class="row p-2">
          <div id="songPlayerDatas" class="col-12">
            <p id="songName" class="bg-secondary text-white p-2 border border-3 border-dark">
              {{ song?.name }}
            </p>
            <p id="artistName" class="bg-secondary text-white p-2 border border-3 border-dark">
              {{ song?.artist.name }}
            </p>
          </div>
        </div>

        <div class="row p-2">
          <div id="songPlayerControls" class="col-6">
            <button id="btnPlay" type="button" class="btn btn-primary" @click="playSong()">
              <i class="bi bi-play-fill"></i> Jouer
            </button>
            <button id="btnPause" type="button" class="btn btn-primary" @click="pauseSong()">
              <i class="bi bi-pause-fill"></i> Pause
            </button>
            <button id="btnStop" type="button" class="btn btn-primary" @click="stopSong()">
              <i class="bi bi-stop-fill"></i> Stop
            </button>
          </div>
          <div id="songPlayerTime" class="col-3 offset-3 text-white">
            <p class="p-2 bg-secondary text-center">
              Temps courant: <span id="currentTime">{{ formattedSongCurrentTime }}</span><br />
              Durée: <span id="duration">{{ formattedSongDuration }}</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
</template>