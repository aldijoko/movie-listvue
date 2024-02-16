<template>
  <div class="w-full">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl text-gray-500 uppercase">My Watchlist Movies</h1>
    </div>
    <div class="w-full grid grid-cols-5 gap-x-4 gap-y-8 py-5">
      <WatchlistCard v-for="movie in watchlist" :key="movie.id" :movie="movie" :mediaType="getMediaType(movie)" />
    </div>
  </div>
</template>

<script>
import WatchlistCard from "../components/WatchlistCard.vue";
import axios from 'axios';

export default {
  components: {
    WatchlistCard,
  },
  data() {
    return {
      watchlist: [],
    };
  },
  mounted() {
    this.fetchWatchlist();
  },
  methods: {
    async fetchWatchlist() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/account/17353149/watchlist/movies', {
          params: {
            session_id: 'd93e9559a811e1eb92371b476c1e6b77d9bde62c',
            language: 'en-US',
            page: 1,
            sort_by: 'created_at.asc'
          },
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGJkZTY5Y2FmZmVmMDI5NDQxNmM3MjExNjM2MmYzZCIsInN1YiI6IjYzZTNiMzg3MTI4M2U5MDA4ZTQ4N2U5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VZa2CLidil6FCz2T4qvV1kzGDXkORyS2qHQOf5LwCfc'
          }
        });
        // console.log(response.data.results)
        this.watchlist = response.data.results;
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    },
    getMediaType(movie) {
      return this.$route.path.includes('tvshows') ? 'tv' : 'movie';
    }
  }
};

</script>

<style scoped>
/* Scoped styles */
</style>
