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

<script setup lang="ts">

</script>

<style scoped>
header {
  background-color: #f8f9fa; /* 淺灰背景 */
  padding: 1rem; /* 內距 */
  position: sticky; /* 固定在頂部 */
  top: 0;
  z-index: 1000; /* 確保在最上層 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 輕微陰影 */
}

.nav-container {
  display: flex;
  justify-content: center; /* 置中排列 */
  gap: 2rem; /* 每個連結間距 */
}

.nav-item {
  text-decoration: none; /* 移除底線 */
  color: #333; /* 文字顏色 */
  font-weight: 500; /* 字體粗細 */
  font-size: 1.1rem; /* 字體大小 */
  transition: color 0.3s; /* 顏色過渡效果 */
}

.nav-item:hover {
  color: #007bff; /* 滑鼠懸停時變藍 */
}

.router-link-active {
  color: #007bff; /* 當前頁面連結高亮 */
  border-bottom: 2px solid #007bff; /* 底線標示 */
}
</style>