<template>  
        <div class="relative">
            <div class="w-full">
                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
            </div>
    
            <div class="p-2">
                <p class="text-lg text-black leading-5 mb-2">{{ movie.title || movie.name }}</p>
                <p class="text-gray-400 text-sm inline-flex gap-2">
                <Icon icon="fluent:movies-and-tv-16-regular" :style="{ fontSize: '24px', color: 'black' }"/>
                {{ movie.release_date || movie.first_air_date }}
                </p>
            </div>
            <div v-if="recommended" class="absolute top-0 right-0 p-2 bg-gray-800 text-white rounded-bl-md">
                <p class="text-sm font-semibold">Recommended</p>
            </div>
        </div>
        
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue';

  const props = defineProps({
    movie: Object,
    recommended: Boolean
  });

  
  </script>
  
  <style scoped>
  </style>
  