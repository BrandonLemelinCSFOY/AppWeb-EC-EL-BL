<script setup lang="ts">

var playingSong:Boolean = false;

var song = new Audio('../src/assets/songs/Chrono_Trigger_Back_2_Skala_OC_ReMix.mp3')

function playSong() {
  document.getElementById("btnPlay")?.classList.add("d-none");
  song.load();
  song.play();
  document.getElementById("btnPause")?.classList.remove("d-none");
  playingSong = true;
}

function pauseSong() {
  document.getElementById("btnPlay")?.classList.remove("d-none");
  song.pause();
  document.getElementById("btnPause")?.classList.add("d-none");
  playingSong = false;
}

function stopSong() {
  if (playingSong) {
    document.getElementById("btnPlay")?.classList.remove("d-none");
    song.pause();
    song.load();
    document.getElementById("btnPause")?.classList.add("d-none");
  }
}
</script>

<template>
    <div id="songPlayerControls" class="col-6">
            <button @click="playSong()" id="btnPlay" type="button" class="btn btn-primary">
              <i class="bi bi-play-fill"></i> Jouer
            </button>
            <button @click="pauseSong()" id="btnPause" type="button" class="btn btn-primary d-none">
              <i class="bi bi-pause-fill"></i> Pause
            </button>
            <button @click="stopSong()" id="btnStop" type="button" class="btn btn-primary ">
              <i class="bi bi-stop-fill"></i> Stop
            </button>
          </div>
</template>

<style></style>