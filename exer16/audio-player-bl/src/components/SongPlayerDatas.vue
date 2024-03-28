<script setup lang="ts">

const props = defineProps({
    songName: String,
    artistName: String
})

//var currentSongId = Math.floor(Math.random() * 13 + 1)
//var currentSong = await songService.getSong(props.songId)
//var currentArtist = await songService.getArtist(currentSong.artistId)

/*if (props.songId == 0) {
    currentSong.songName = 'Nom de la chanson'
    currentArtist.name = "Nom de l'artiste"
}*/
        
</script>

<template>
<div id="songPlayerDatas" class="col-12">
    <p id="songName" class="bg-secondary text-white p-2 border border-3 border-dark">
        {{ props.songName }}
    </p>
    <p id="artistName" class="bg-secondary text-white p-2 border border-3 border-dark">
        {{ props.artistName }}
    </p>
  </div>
</template>

<style></style>