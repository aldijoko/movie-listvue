<template>
    <div class="w-full p-5">
      <div class="flex items-center gap-2">
          <h1 class="text-2xl text-gray-500 uppercase">Movie Details: {{ movieDetails.title || movieDetails.name }}</h1>
      </div>
      <div class="py-10">
          <div class="w-full rounded-xl">
              <img class="rounded-xl" :src="'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path" :alt="movieDetails.title">
          </div>
          <div class="mt-5 px-5 w-full gap-5">
              <h2 class="text-2xl font-bold text-black">{{ movieDetails.original_title || movieDetails.original_name }}</h2>
              <div class="w-full flex gap-5">
                  <div class="w-1/2">
                      <div class="w-1/2 flex justify-between items-center mt-2">
                          <p class="flex gap-2 text-base items-center">
                              <Icon icon="mdi:clock-time-three-outline" :style="{ fontSize: '24px', color: 'black' }"/>
                              {{ movieDetails.runtime }}
                              Minutes
                          </p>
                          <p class="flex gap-2 text-base items-center">
                              <Icon icon="material-symbols:star" :style="{ fontSize: '24px', color: 'black' }"/>
                              {{ movieDetails.vote_average }}
                          </p>
                      </div>
                      <div class="w-full mt-2">
                          <div class="w-full flex item text-xl gap-3">
                              <p class="font-medium">Release Date :</p>
                              <p>{{ movieDetails.release_date || movieDetails.last_air_date }}</p>
                          </div>
                          <div class="w-full flex text-xl gap-2 mt-2">
                              <p class="font-medium">Genre :</p>
                              <div class="grid grid-cols-4 gap-4">
                                  <div v-for="(genre, index) in movieDetails.genres" :key="index" class="w-full bg-white rounded-md px-2 py-1 text-black flex justify-center items-center">
                                      <p class="text-sm">{{ genre.name }}</p>
                                  </div>
                              </div>
                              
                          </div>
                          <div class="w-full flex items-center text-xl gap-3 mt-5">
                              <p class="font-medium">Status :</p>
                              <div class=" bg-white rounded-md px-3 py-1 text-black flex justify-center items-center">
                                  <p class="text-sm">{{ movieDetails.status }}</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="w-full mt-5">
                      <h3 class="text-xl font-bold mb-2">Overview:</h3>
                      <p>{{ movieDetails.overview }}</p>
                      <button @click="addToWatchlist" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Add to Watchlist</button>
                  </div>
              </div> 
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon
    },
  data() {
    return {
      movieDetails: []
    };
  },
  mounted() {
    const movieId = this.$route.params.id; 
    // console.log("id",movieId)
    this.fetchMovieDetails(movieId);
  },
  methods: {
    async fetchMovieDetails(movieId) {
      try {
        let response = null;

        if (this.$route.path.includes('detail-movie')) {
        response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            language: 'en-US',
            api_key: '70bde69caffef0294416c72116362f3d'
          },
          headers: {
            Accept: 'application/json'
          }
        });
      } else if (this.$route.path.includes('detail-tvshows')) {
        response = await axios.get(`https://api.themoviedb.org/3/tv/${movieId}`, {
          params: {
            language: 'en-US',
            api_key: '70bde69caffef0294416c72116362f3d'
          },
          headers: {
            Accept: 'application/json'
          }
        });
      } else {
        response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            language: 'en-US',
            api_key: '70bde69caffef0294416c72116362f3d'
          },
          headers: {
            Accept: 'application/json'
          }
        });
      }

        // console.log(response.data);
        this.movieDetails = response.data;
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    },
    addToWatchlist() {
      try {
        const accountId = '17353149';
        const sessionId = 'd93e9559a811e1eb92371b476c1e6b77d9bde62c'; 
        const movieId = this.$route.params.id;

        let mediaType = 'movie';
        if (this.$route.path.includes('tvshows')) {
          mediaType = 'tv';
        }
        axios.post(`https://api.themoviedb.org/3/account/${accountId}/watchlist`, {
          media_type: mediaType,
          media_id: movieId,
          watchlist: true
        }, {
          params: {
            api_key: '70bde69caffef0294416c72116362f3d',
            session_id: sessionId
          }
        });
        // console.log('Added to watchlist');
        alert('Added to watchlist');
      } catch (error) {
        console.error('Error adding to watchlist:', error);
      }
    }
  }
};
</script>

<style scoped>

</style>
