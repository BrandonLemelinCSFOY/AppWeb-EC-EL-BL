<script setup lang="ts">

import Song from '../scripts/song';

const props = defineProps({song: Song})


</script>

<template>
    <div id="songInfos" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary song-zone">
        <div class="row">
          <div class="col">
            <h2>Informations de la chanson</h2>
            <h5>{{ song?.name }}</h5>
            <p id="songDesc">{{ song?.desc }}</p>
            
            <h5>{{ song?.artist.name }}</h5>
            <p id="artistDesc">{{ song?.artist.desc }}</p>
          </div>
        </div>
      </div>
    </div>
</template>