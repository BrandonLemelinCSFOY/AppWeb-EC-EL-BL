<script setup lang="ts">

</script>

<template>
    <div id="songPlayerTime" class="col-3 offset-3 text-white">
            <p class="p-2 bg-secondary text-center">
              Temps courant: <span id="currentTime">{{ formattedSongCurrentTime }}</span><br />
              Durée: <span id="duration">{{ formattedSongDuration }}</span>
            </p>
          </div>
</template>