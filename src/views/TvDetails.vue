<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const show = ref(null)
const loading = ref(true)

const API_KEY = "9a7da082db1aaf1a3d543ef8882edeb6"

async function fetchDetails() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${route.params.id}?api_key=${API_KEY}&language=pt-BR`
  )
  show.value = await response.json()
  loading.value = false
}

onMounted(fetchDetails)
</script>

<template>
  <div v-if="loading" class="loading">Carregando...</div>

  <div v-else class="details">
    <h1>{{ show.name }}</h1>

    <img
      :src="`https://image.tmdb.org/t/p/w500${show.poster_path}`"
      :alt="show.name"
    />

    <p><strong>Lançamento:</strong> {{ show.first_air_date }}</p>
    <p class="overview">{{ show.overview }}</p>
  </div>
</template>

<style scoped>
.details {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

img {
  width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.overview {
  margin-top: 20px;
  line-height: 1.6;
}
</style>
