<script setup lang="ts">

import { ref } from 'vue'
import SongPlayerDatas from './components/SongPlayerDatas.vue'
import SongPlayerControls from './components/SongPlayerControls.vue';
import SongPlayerTime from './components/SongPlayerTime.vue';
import SongInfos from './components/SongInfos.vue';
import SongsList from './components/SongsList.vue';

var selectedSong = ref({
      songName: '',
      songDesc: '',
      artistName: '',
      artistDesc: ''
    });

function changeSong(newSong:object) {
  selectedSong.value = newSong;
  selectedSong.value.songDesc = newSong.desc;
  //selectedSong.value.artistName = newSong.artistName;
  //selectedSong.value.artistDesc = newSong.artistDesc;
  console.log(selectedSong.value.songName)
  console.log(selectedSong.value.songDesc)
  console.log(selectedSong.value.artistName)
  console.log(selectedSong.value.artistDesc)
}
</script>

<template>
  <header class="container-fluid bg-dark text-light p-4 text-center">
    <h1>Lecteur de musique Spotifette</h1>
  </header>
  <main>
    <div id="songPlayer" class="p-3">
      <div class="container p-3 bg-dark text-light shadow border border-5 border-primary">

        <div class="row p-2">
          <Suspense>
            <SongPlayerDatas :songName="selectedSong.songName" :artistName="selectedSong.artistName"/>
          </Suspense>
        </div>

        <div class="row p-2">
          <SongPlayerControls />
          <SongPlayerTime />
        </div>
        
      </div>
    </div>

    <Suspense>
      <SongInfos :songDesc="selectedSong.songDesc" :artistDesc="selectedSong.artistDesc"/>
    </Suspense>

    <Suspense>
      <SongsList @change-song="changeSong"/>
    </Suspense>

  </main>
  <footer class="container-fluid bg-secondary text-light p-1">
    <p class="text-center">Copyright Brandon Lemelin</p>
  </footer>
  
</template>

<style scoped>
</style>