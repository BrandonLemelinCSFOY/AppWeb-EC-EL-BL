<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { ref } from 'vue'
import SongList from './components/SongList.vue'
import SongInfos from "./components/SongInfos.vue";
import { Song } from "./scripts/song";
import { Artist } from "./scripts/artist";
import SongsService from "./scripts/songsService";

let selectedSong = ref<Song>()
let selectedArtist = ref<Artist>()
const songService = new SongsService()

function handleUpdate(song: Song){
  selectedSong.value = song
  selectedArtist = songService.getArtist(song.artistId)
}
</script>

<template>
  <header class="container-fluid bg-dark text-light p-4 text-center">
    <!-- TODO Changer le h1 pour le nom du lecteur et effacer ce commentaire -->
    <h1>Lecteur de musique LimeWire</h1>
  </header>
  <main>
        <SongPlayer :song="selectedSong" :artist="selectedArtist"/>

    <Suspense>
      <SongInfos :song="selectedSong" :artist="selectedArtist"/>
    </Suspense>
    <Suspense>
      <SongList @songUpdate="handleUpdate"/>
    </Suspense>
    
  </main>
  <footer class="container-fluid bg-secondary text-light p-1">
    <p class="text-center">Copyright Élie Caron</p>
  </footer>
  
</template>

<style scoped>
</style>