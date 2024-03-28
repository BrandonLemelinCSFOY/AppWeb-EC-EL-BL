<script setup lang="ts">
import { Song } from "../scripts/song"


let song: Song
let time: number
let audioLenght: number

defineProps<{
  song : Song
}>()

function loadSongTime() {
    const audio = new Audio(song.infosUrl)
    time = audio.currentTime
    audioLenght = audio.duration
}

loadSongTime()
</script>

<template>
    <div class="row p-2">
        <div id="songPlayerTime" class="col-3 offset-3 text-white">
            <p class="p-2 bg-secondary text-center">
                Temps courant: <span id="currentTime">{{ time }}</span><br />
                Durée: <span id="duration">{{ audioLenght }}</span>
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>