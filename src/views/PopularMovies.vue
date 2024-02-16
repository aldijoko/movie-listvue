<template>
    <div class="w-full">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl text-gray-500 uppercase">Popular Movies</h1>
        <div className="h-8 mt-3 mb-3 flex justify-between items-center py-1 px-1 relative border border-gray-300 rounded-md">
          <input type="text" v-model="searchQuery" class="outline-none focus:outline-none px-2" placeholder="Search movies">
          <div className="cursor-pointer">
            <Icon icon="material-symbols:search" />
          </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-5 gap-x-4 gap-y-8 py-5">
            <router-link v-for="movie in filteredMovies" :key="movie.id" :to="'/detail-movie/' + movie.id">
                <MovieCard :movie="movie" :recommended="isRecommended(movie)"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
import axios from 'axios';
import { Icon } from '@iconify/vue';

export default {
  components: {
    MovieCard,
    Icon,
  },
  data() {
    return {
      movies: [],
      searchQuery: ''
    };
  },
  async mounted() {
        this.fetchPopularMovies();
    },
    methods: {
        async fetchPopularMovies() {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        api_key: '70bde69caffef0294416c72116362f3d',
                        language: 'en-US',
                        page: 1
                    }
                });
                this.movies = response.data.results;
                console.log(response.data.results)
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        },
        isRecommended(movie) {
            return movie.vote_average >= 8 && movie.vote_count >= 1000;
        },
        async searchMovies() {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '70bde69caffef0294416c72116362f3d',
                        language: 'en-US',
                        query: this.searchQuery,
                        page: 1
                    }
                });
                this.movies = response.data.results;
            } catch (error) {
                console.error('Error searching movies:', error);
            }
        }
    },
    computed: {
        filteredMovies() {
            if (!this.searchQuery) {
                return this.movies;
            }
            return this.movies.filter(movie => movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    }
};

</script>

<style scoped>

</style>
