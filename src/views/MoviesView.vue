<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const API_KEY = "9a7da082db1aaf1a3d543ef8882edeb6"
const router = useRouter()

const movies = ref([])
const loading = ref(true)
const error = ref(null)

function openMovie(id) {
  router.push(`/movie/${id}`)
}

async function fetchMovies() {
  loading.value = true
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`
    )

    if (!response.ok) throw new Error("Erro ao carregar filmes")

    const data = await response.json()
    movies.value = data.results
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchMovies)
</script>

<template>
  <div class="movie-container">
    <h1>Filmes de Comédia</h1>

    <div v-if="loading" class="loading">Carregando...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div class="movie-grid">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="movie-card"
        @click="openMovie(movie.id)"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
        />
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.release_date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-container {
  padding: 20px;
  text-align: center;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 5rem;
  margin-top: 20px;
}

.movie-card {
  background: #111;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 15rem;
  height: 28rem;
}

.movie-card:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  border-radius: 10px;
}

h2 {
  font-size: 1rem;
  margin: 10px 0 5px;
  color: #ffffff;
}

p {
  opacity: 0.7;
  font-size: 0.9rem;
  color: #ffffff;
}
</style>
