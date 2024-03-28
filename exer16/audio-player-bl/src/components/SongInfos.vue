<script setup lang="ts">

//import SongsService from '../scripts/songsService.ts'

const props = defineProps({
  songDesc: String,
  artistDesc: String
})

//Math.floor(Math.random() * 13 + 1)
/*
var songService = new SongsService();
var song = await songService.getSong(props.songId);
var artist = await songService.getArtist(song.artistId);
*/


</script>

<template>
    <div id="songInfos" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary song-zone">
        <div class="row">
          <div class="col">
            <h2>Informations de la chanson</h2>
            <p id="songDesc">Desc de la chanson :
                {{ props.songDesc }}</p>
            <p id="artistDesc">Desc de l'artiste :
                {{ props.artistDesc }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<style></style>