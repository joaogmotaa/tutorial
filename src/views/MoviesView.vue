<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const movies = ref([])


const getGenreName = (id) => {
  const genres = { 35: "Comédia" }
  return genres[id] ?? ""
}


const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString('pt-BR') : ''


const listComedyMovies = async () => {
  isLoading.value = true
  const response = await api.get('discover/movie', {
    params: {
      with_genres: 35,
      language: 'pt-BR'
    }
  })
  movies.value = response.data.results
  isLoading.value = false
}

onMounted(() => listComedyMovies())

function openMovie(id) {
  router.push({ name: 'MovieDetails', params: { id } })
}
</script>

<template>
  <h1>Filmes de Comédia</h1>

  <loading v-model:active="isLoading" is-full-page />

  <div class="movie-list">
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
      <div class="movie-details">
        <p class="movie-title">{{ movie.title }}</p>
        <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>

        <p class="movie-genres">
          <span v-for="genre_id in movie.genre_ids" :key="genre_id">
            {{ getGenreName(genre_id) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  margin-left: 4rem;
}
.movie-card {
  width: 16rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000000;
  cursor: pointer;
  transition: 0.3s;
}
.movie-card:hover {
  transform: scale(1.03);
}
.movie-card img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}
.movie-details {
  padding: 0 0.5rem;
}
.movie-genres span {
  background-color: #000000;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: bold;
}
h1 {
  margin-left: 65rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-size: 3rem;
}
</style>
