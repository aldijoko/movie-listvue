<template>
    <div class="w-full">
      <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl text-gray-500 uppercase">Popular TV Shows</h1>
        <div className="h-8 mt-3 mb-3 flex justify-between items-center py-1 px-1 relative border border-gray-300 rounded-md">
          <input type="text" v-model="searchQuery" @input="searchTvShows" class="outline-none focus:outline-none px-2" placeholder="Search TV Shows">
          <div className="cursor-pointer">
            <Icon icon="material-symbols:search"/>
          </div>
        </div>
      </div>
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
import { Icon } from '@iconify/vue';

export default {
  components: {
    MovieCard,
    Icon
  },
  data() {
    return {
      movies: [],
      searchQuery: ''
    };
  },
  async mounted() {
        this.fetchPopularTvShows();
    },
    methods: {
        async fetchPopularTvShows() {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/tv/popular', {
                    params: {
                        api_key: '70bde69caffef0294416c72116362f3d',
                        language: 'en-US',
                        page: 1
                    }
                });
                this.movies = response.data.results;
                // console.log(response.data.results)
            } catch (error) {
                console.error('Error fetching tv shows:', error);
            }
        },
        isRecommended(movie) {
            return movie.vote_average >= 8 && movie.vote_count >= 1000;
        },
        async searchTvShows() {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '70bde69caffef0294416c72116362f3d',
                        language: 'en-US',
                        query: this.searchQuery,
                        page: 1
                    }
                });
                this.movies = response.data.results;
                console.log(response.data.results)
            } catch (error) {
                console.error('Error searching movies:', error);
            }
        }
    },
    computed: {
        filteredMovies() {
          console.log(this.searchQuery)
            if (!this.searchQuery) {
                return this.movies;
            }
            return this.movies.filter(movie => movie.original_name.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    }
};

</script>

<style scoped>

</style>
