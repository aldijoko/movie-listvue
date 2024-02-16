<!-- <script setup>

import Sidebar from "./components/Sidebar.vue";
import MovieCard from "./components/MovieCard.vue";

import axios from 'axios';
import { ref } from 'vue'; // Import ref from Vue Composition API

const movies = ref([]); // Define a reactive variable to store movie data

// Fetch movie data when the component is mounted
import { onMounted } from 'vue'; // Import onMounted from Vue Composition API
onMounted(async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '70bde69caffef0294416c72116362f3d', // Replace with your TMDb API key
        language: 'en-US',
        page: 1
      }
    });
    movies.value = response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
});

</script>

<template>
  <div class="w-full h-full flex">
    <aside class="w-64 h-full border-r-2 shadow-md fixed " >
      <Sidebar />
    </aside>
    <main class="w-full p-3 ml-64" style="width: calc( 100vw - 256px);">
      <div class="w-full p-5">
        <h1 class="text-2xl text-gray-500 uppercase">Your Recent Movies</h1>
        <div class="w-full grid grid-cols-5 gap-x-4 gap-y-8 py-5">
          <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
      </div>
    </main>
  </div>
  
</template>

<style scoped>

</style> -->

<script setup>
import Sidebar from "./components/Sidebar.vue";

</script>

<template>
  <div class="w-full h-full flex">
    <aside class="w-64 h-full border-r-2 shadow-md fixed " >
      <Sidebar />
    </aside>
    <main class="w-full p-3 ml-64" style="width: calc( 100vw - 256px);">
      <div class="w-full p-5">
        <RouterView />
      </div>
    </main>
  </div>
  
  
</template>

<style scoped>

</style>

