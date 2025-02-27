<!-- src/components/Header.vue -->
<template>
  <header>
    <nav class="nav-container">
      <router-link to="/bio" class="nav-item">Bio</router-link>
      <router-link to="/blog" class="nav-item">Blog</router-link>
      <router-link to="/experience" class="nav-item">Experience</router-link>
      <router-link to="/project" class="nav-item">Project</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.nav-item:hover {
  color: #007bff;
}

.router-link-active {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}
</style>