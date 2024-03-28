<script setup lang="ts">
import { Song } from "../scripts/song"

let song: Song
defineProps<{
  song : Song
}>()

function play() {
    const audio = new Audio(song.infosUrl)
    audio.play
}

function pause() {
    const audio = document.querySelector('audio');

    if (audio) {
        audio.pause();
    }   
}

function stop() {
    const audio = document.querySelector('audio');
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
</script>

<template>
    <div id="songPlayerControls" class="col-6">
        <button id="btnPlay" type="button" class="btn btn-primary" @click="play">
            <i class="bi bi-play-fill"></i> Jouer
        </button>
        <button id="btnPause" type="button" class="btn btn-primary d-none" @click="pause">
            <i class="bi bi-pause-fill"></i> Pause
        </button>
        <button id="btnStop" type="button" class="btn btn-primary d-none" @click="stop">
            <i class="bi bi-stop-fill"></i> Stop
        </button>
    </div>
</template>

<style scoped>

</style>