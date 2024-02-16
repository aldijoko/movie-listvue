<template>
    <div class="w-full">
        <h1 class="text-2xl text-gray-500 uppercase">Popular TV Shows</h1>
        <div class="w-full grid grid-cols-5 gap-x-4 gap-y-8 py-5">
          <router-link v-for="movie in movies" :key="movie.id" :to="'/detail-tvshows/' + movie.id">
            <MovieCard :movie="movie" :recommended="isRecommended(movie)"/>
          </router-link>
        </div>
    </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
import axios from 'axios';

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      movies: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/tv/popular', {
        params: {
          api_key: '70bde69caffef0294416c72116362f3d',
          language: 'en-US',
          page: 1
        }
      });
    //   console.log(response.data.results);
      this.movies = response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  },
  methods: {
    isRecommended(movie) {
      return movie.vote_average >= 8 && movie.vote_count >= 1000;
    }
  }
};

</script>

<style scoped>

</style>
