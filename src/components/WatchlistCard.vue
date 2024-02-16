<template>  
    <div class="relative">
    <div class="w-full">
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
    </div>

    <div class="p-2">
      <p class="text-lg text-black leading-5 mb-2">{{ movie.title || movie.name }}</p>
      <p class="text-gray-400 text-sm inline-flex gap-2">
        <Icon icon="fluent:movies-and-tv-16-regular" :style="{ fontSize: '24px', color: 'black' }" />
        {{ movie.release_date || movie.first_air_date }}
      </p>
      <button @click="removeFromWatchlist" class="bg-red-500 text-white px-3 py-1 rounded-md mt-2">Remove from Watchlist</button>
    </div>
  </div>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue';
  import { defineProps } from 'vue';
  import axios from 'axios';
  
  const props = defineProps({
    movie: Object,
  });
  
  const removeFromWatchlist = async () => {
  try {
    const accountId = '17353149'; // Replace with the user's account ID
    const sessionId = 'd93e9559a811e1eb92371b476c1e6b77d9bde62c'; // Replace with the user's session ID

    // Make a DELETE request to remove the movie from the watchlist
    const response = await axios.delete(`https://api.themoviedb.org/3/account/${accountId}/watchlist`, {
      params: {
        api_key: '70bde69caffef0294416c72116362f3d',
        session_id: sessionId,
        media_id: props.movie.id, // Assuming the movie object contains id property
      },
    });

    console.log('Movie removed from watchlist:', props.movie);
    // Optionally, you can also update the UI to reflect the removal of the movie from the watchlist
  } catch (error) {
    console.error('Error removing movie from watchlist:', error);
  }
};
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  