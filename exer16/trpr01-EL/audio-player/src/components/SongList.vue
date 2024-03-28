<script setup lang="ts">
import Artist from '../scripts/artist';
import Song from '../scripts/song';
import SongsService from '../scripts/songsService.ts'

let songsService:SongsService = new SongsService()
let songList = await songsService.getSongs()
let artistsList = await songsService.getArtists()
let selectedSong:Song

const emit = defineEmits<{
  (event: 'emitSongClicked', song:Song): void
}>()

function songClicked(song:any) {
  let artist = new Artist(artistsList[song.artistId-1])
  selectedSong = new Song(song, artist)
  
  emit('emitSongClicked', selectedSong)
}

function randomSong() {
  songClicked(songList[Math.floor(Math.random() * songList.length)])
}

function nextSong(go : boolean) {
  if (go && selectedSong.id < songList.length) {
    songClicked(songList[selectedSong.id])
  } 
  if (go == false && selectedSong.id > 1) {
    songClicked(songList[selectedSong.id-2])
  }
}


</script>

<template>
  <div id="songsList" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary song-zone">
        <div class="row">
            <div class="col">
                <h2>Contrôles de la liste</h2>
                <button id="btnShuffle" type="button" class="btn btn-primary" @click="randomSong()">
                  <i class="bi bi-shuffle"></i> Au hasard!
                </button>
                <button id="btnNext" type="button" class="btn btn-primary" @click="nextSong(false)">
                  <i class="bi bi-arrow-left-square"></i> Chanson précédente
                </button>
                <button id="btnPrevious" type="button" class="btn btn-primary" @click="nextSong(true)">
                   Chanson suivante <i class="bi bi-arrow-right-square"></i>
                </button>
            </div>
        </div>  
        <div class="row">
              <div class="col">
                  <h2>Liste des chansons</h2>
                  <ul id="songsList">
                    <li v-for="song of songList" :key="song.id" @click="songClicked(song)">
                        {{ song.songName }}
                    </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</template>