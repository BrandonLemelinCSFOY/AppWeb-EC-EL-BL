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
    <div class="row p-2">
        <div id="songPlayerDatas" class="col-12">
            <p id="songName" class="bg-secondary text-white p-2 border border-3 border-dark">
                {{ song.songName }}
            </p>
            <p id="artistName" class="bg-secondary text-white p-2 border border-3 border-dark">
                {{ artist.name }}
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>