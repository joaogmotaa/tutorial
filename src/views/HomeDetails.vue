<template>
  <div v-if="movie" class="movie-details">
    <h1>{{ movie.title }}</h1>
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
    <p>{{ movie.overview }}</p>
    <p><strong>Data de lançamento:</strong> {{ movie.release_date }}</p>
    <p><strong>Avaliação:</strong> ⭐ {{ movie.vote_average.toFixed(1) }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeDetails",
  props: ["id"],
  data() {
    return {
      movie: null,
    };
  },
  methods: {
    fetchMovieDetails() {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=9a7da082db1aaf1a3d543ef8882edeb6&language=pt-BR`
      )
        .then((res) => res.json())
        .then((data) => {
          this.movie = data;
        });
    },
  },
  mounted() {
    this.fetchMovieDetails();
  },
};
</script>

<style scoped>
.movie-details {
  padding: 20px;
  color: #fff;
  text-align: center;
}

.movie-details img {
  max-width: 300px;
  border-radius: 10px;
  margin: 20px 0;
}

.movie-details h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.movie-details p {
  font-size: 1rem;
  margin-bottom: 5px;
}
</style>
