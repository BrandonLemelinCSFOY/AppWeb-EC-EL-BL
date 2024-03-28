<script setup lang="ts">
import { Artist } from "../scripts/artist";
import { Song } from "../scripts/song"
import SongPlayerDatas from "./SongPlayerDatas.vue";

let song: Song
let artist: Artist

defineProps<{
  song : Song
  artist : Artist
}>()

</script>

<template>

<div id="songPlayer" class="p-3">
    <div class="container p-3 bg-dark text-light shadow border border-5 border-primary">
        <Suspense>
            <SongPlayerDatas :song="song" :artist="artist"/>
        </Suspense>
        <Suspense>
            <SongPlayerControls :song="song"/>
        </Suspense>
        
        <Suspense>
            <SongPlayerTime :song="song"/>
        </Suspense>
    </div>
</div>
</template>

<style scoped>

</style>