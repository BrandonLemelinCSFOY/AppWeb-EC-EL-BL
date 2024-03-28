<script setup lang="ts">
import Song from '../scripts/song';

const props = defineProps({song: Audio})

const emit = defineEmits<{
  (event: 'emitInitAudio'): void
}>()

let isPlaying = false

function playSong() {
  if(isPlaying == false || props.song?.currentTime >= props.song?.duration) {
    emit('emitInitAudio')
  }  

  props.song?.play()
  isPlaying = true
}

function pauseSong() {
  props.song?.pause()
}

function stopSong() {
  pauseSong();
  props.song?.load()
  isPlaying = false
}
</script>

<template>
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
</template>