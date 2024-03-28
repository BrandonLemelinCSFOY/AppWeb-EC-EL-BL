<script setup lang="ts">

import SongPlayer from './components/SongPlayer.vue'
import SongInfo from './components/SongInfo.vue'
import SongList from './components/SongList.vue'
import Song from './scripts/song';
import { ref } from 'vue'

let selectedSong = ref<Song>()

function handleSongClicked(song:Song) {
  console.log(song.name)
  selectedSong.value = song
}
</script>

<template>
  <header class="container-fluid bg-dark text-light p-4 text-center">
    <h1>Lecteur de musique Élie Lajeunesse</h1>
  </header>
  <main>
    
    <SongPlayer :song="selectedSong"/>

    <SongInfo :song="selectedSong"/>

  <Suspense>
     <SongList @emitSongClicked="handleSongClicked"/>
  </Suspense>  

  </main>
  <footer class="container-fluid bg-secondary text-light p-1">
    <p class="text-center">Copyright Élie Lajeunesse</p>
  </footer>
  
</template>

<style scoped>
</style>