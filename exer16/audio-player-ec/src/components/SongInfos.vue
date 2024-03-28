<script setup lang="ts">
import { Artist } from "../scripts/artist";
import { Song } from "../scripts/song"

let song: Song
let artist: Artist

defineProps<{
  song : Song
  artist : Artist
}>()

</script>

<template>
<div id="songInfos" class="p-3">
    <div class="container p-3 bg-dark text-light shadow border border-5 border-primary song-zone">
        <div class="row">
            <div class="col">
            <h2>Informations de la chanson</h2>
            <p id="songDesc">{{ song.desc }}</p>
            <p id="artistDesc">{{ artist.desc }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>