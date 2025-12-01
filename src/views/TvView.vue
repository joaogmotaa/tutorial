<script setup>
import { ref, onMounted } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

function goToDetails(id) {
  router.push(`/tv/${id}`)
}


const tvShows = ref([])
const loading = ref(true)
const error = ref(null)

const API_KEY = "9a7da082db1aaf1a3d543ef8882edeb6" // coloque sua key aqui

async function fetchTvShows() {
  loading.value = true
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35&language=pt-BR`
    )

    if (!response.ok) {
      throw new Error("Erro ao carregar séries")
    }

    const data = await response.json()
    tvShows.value = data.results
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchTvShows)
</script>

<template>
  <div class="tv-container">
    <h1>Programas de TV – Comédia</h1>

    <div v-if="loading" class="loading">Carregando...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div class="tv-grid">
      <div class="tv-card"
          v-for="show in tvShows"
          :key="show.id"
          @click="goToDetails(show.id)">
        
        <img :src="`https://image.tmdb.org/t/p/w500${show.poster_path}`"
             :alt="show.name" />

        <h2>{{ show.name }}</h2>
        <p>{{ show.first_air_date }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.tv-container {
  padding: 20px;
  text-align: center;
}

.tv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 5rem;
  margin-top: 20px;
}

.tv-card {
  background: #111;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 15rem;
  height: 28rem;
}

.tv-card:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  border-radius: 10px;
}

h2 {
  font-size: 1rem;
  margin: 10px 0 5px;
}

p {
  opacity: 0.7;
  font-size: 0.9rem;
  color: #ffffff;
}
h2{
  color: #ffffff;
}
</style>
