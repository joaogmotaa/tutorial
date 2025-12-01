<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || [])

function openDetails(item) {
  router.push(`/${item.type}/${item.id}`)
}

function removeFavorite(id) {
  favorites.value = favorites.value.filter(f => f.id !== id)
  localStorage.setItem("favorites", JSON.stringify(favorites.value))
}
</script>

<template>
  <div class="container">
    <h1>⭐ Meus Favoritos</h1>

    <div v-if="favorites.length === 0" class="empty">
      Você ainda não favoritou nada 😢  
    </div>

    <div class="grid">
      <div v-for="item in favorites" :key="item.id" class="card">

        <img :src="`https://image.tmdb.org/t/p/w500${item.poster}`"
             @click="openDetails(item)"
        />

        <h3>{{ item.title }}</h3>

        <button class="remove-btn" @click="removeFavorite(item.id)">
          Remover ❌
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 30px;
  text-align: center;
  color: #fff;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.card {
  cursor: pointer;
  transition: 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
img {
  width: 100%;
  border-radius: 10px;
}
.remove-btn {
  margin-top: 10px;
  background-color: #c7383c;
  border: none;
  color: #fff;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
}
.empty {
  font-size: 1.3rem;
  opacity: 0.8;
}
</style>
