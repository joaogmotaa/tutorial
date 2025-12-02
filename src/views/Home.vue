<template>
  <div class="home">
    <header class="hero">
      <h1>Melhores Filmes de Comédia</h1>
      <p>Os mais bem avaliados do cinema para você rir sem parar!</p>
    </header>

    <section class="movies-section">
      <div class="movies-grid">
        <div 
          class="movie-card" 
          v-for="movie in comedyTop" 
          :key="movie.id"
          @click="goToMovieDetails(movie.id)"
        >
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
          <h3>{{ movie.title }}</h3>
          <p class="rating">⭐ {{ movie.vote_average.toFixed(1) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      comedyTop: [],
    };
  },
  methods: {
    fetchComedyTopRated() {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=9a7da082db1aaf1a3d543ef8882edeb6&with_genres=35&sort_by=vote_average.desc&vote_count.gte=1000&language=pt-BR&page=1"
      )
        .then((response) => response.json())
        .then((data) => {
          this.comedyTop = data.results;
        });
    },
    goToMovieDetails(id) {
      this.$router.push({ name: 'HomeDetails', params: { id } });
    },
  },
  mounted() {
    this.fetchComedyTopRated();
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  color: #ffffff;
}

.hero {
  text-align: center;
  margin-bottom: 25px;
}

.hero h1 {
  font-size: 2.3rem;
  font-weight: bold;
  color: #111;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  color: #111;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 40px;
  justify-items: center;
}

.movie-card {
  background: #111;
  padding: 10px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: 0.25s;
  width: 160px;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 10px rgba(255,255,255,0.2);
}

.movie-card img {
  width: 100%;
  border-radius: 10px;
}

.movie-card h3 {
  margin-top: 10px;
  font-size: 0.95rem;
  min-height: 40px;
}

.rating {
  margin-top: 5px;
  font-size: 0.9rem;
  color: #f5c518;
  font-weight: bold;
}
</style>
