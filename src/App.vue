<script setup>
</script>

<template>
  <header>
    <img class="logo" src="@/assets/logo.png" alt="ComedyFlix Logo" />

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/movies">Filmes de Comédia</router-link>
      <router-link to="/tv">Programas de TV</router-link>
      <router-link to="/favorites">Favoritos</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Sobre</h4>
        <p>Projeto de filmes de comédia usando TMDB API.</p>
      </div>

      <div class="footer-section">
        <h4>Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/movies">Filmes</router-link></li>
          <li><router-link to="/tv">TV</router-link></li>
          <li><router-link to="/favorites">Favoritos</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contato</h4>
        <p>Email: contato@comedyflix.com</p>
        <p>Telefone: +55 4700000</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 ComedyFlix. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
header {
  width: 100%;
  height: 6rem;
  background-color: #000;
  color: #fff;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
}

.logo {
  height: 3rem;
  width: auto;
  object-fit: contain;
  margin-left: 50rem;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  transition: 0.3s;
}

nav a:hover {
  color: #e5c409;
}

main {
  padding-top: 1rem;
}

.footer {
  background-color: #000;
  color: #fff;
  padding: 40px 20px 20px;
  font-family: sans-serif;
  margin-top: 50px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: bold;
}

.footer-section p,
.footer-section li {
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #333;
  padding-top: 10px;
  font-size: 0.85rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    text-align: center;
  }
}
</style>
