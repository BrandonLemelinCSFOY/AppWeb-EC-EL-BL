<script setup lang="ts">
import { ref } from 'vue';
import { Song } from '../scripts/song';
import SongsService from '../scripts/songsService'


const songService = new SongsService()
const songList = ref<Song[]>([])

const emit = defineEmits(['songUpdate'])

async function loadSongs() {
  songList.value = await songService.getSongs()
}

function selectSong(song : Song) {
    emit('songUpdate', song)
}

loadSongs()
</script>

<template>
  <div id="songsList" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary song-zone">
        <div class="row">
            <div class="col">
                <h2>Contrôles de la liste</h2>
                <button id="btnShuffle" type="button" class="btn btn-primary">
                  <i class="bi bi-shuffle"></i> Au hasard!
                </button>
                <button id="btnNext" type="button" class="btn btn-primary">
                  <i class="bi bi-arrow-left-square"></i> Chanson précédente
                </button>
                <button id="btnPrevious" type="button" class="btn btn-primary">
                   Chanson suivante <i class="bi bi-arrow-right-square"></i>
                </button>
            </div>
        </div>  
        <div class="row">
              <div class="col">
                  <h2>Liste des chansons</h2>

                  <ul id="songsList">                    
                    <li v-for="song of songList" @click="selectSong(song)">
                        {{ song.songName }}
                    </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  
</template>

<style scoped>

</style>