<script setup lang="ts">

import SongsService from '../scripts/songsService.ts'

var songService = new SongsService();

var songsList = await songService.getSongs();
var id:number = 1;
var currentSong = songsList[id-1];
var artist = await songService.getArtist(currentSong.artistId);

console.log(currentSong.artistId)
console.log(artist.name)

//currentSong.songName
const selectedSong = Object({
      song: currentSong.songName,
      desc: currentSong.desc,
      artistName: artist.name,
      artistDesc: artist.desc
    })

function shuffle () {
    id = Math.floor(Math.random() * 13 + 1);
    //console.log(songId)
    return id;
    console.log(id);
}
/*
const selectSong = (songId:number) => {
  id = songId
  console.log(id)
}*/
const emit = defineEmits<{
  (event: 'change-song', newSong: object): void
}>()

function changeSong(id:number) {
  currentSong = songsList[id-1]
  console.log(artist.name)
  emit('change-song', currentSong)
}

</script>

<template>
    <div id="songsList" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary song-zone">
        <div class="row">
            <div class="col">
                <h2>Contrôles de la liste</h2>
                <button @click="shuffle" id="btnShuffle" type="button" class="btn btn-primary">
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
                    <li v-for="song in songsList">
                      <a @click="changeSong(song.id)">
                        {{ song.songName }}
                      </a>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</template>

<style></style>