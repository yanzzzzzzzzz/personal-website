<template>
  <div class="max-w-5xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
        @click="goToDetail(project.id)"
      >
        <img :src="project.image" alt="Project Image" class="w-full h-48 object-contain">
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">{{ project.name }}</h2>
          <p class="text-gray-600 mt-2">{{ project.shortDescription }}</p>
          <div class="mt-4">
            <span
              v-for="(skill, idx) in project.skills"
              :key="idx"
              class="skill-capsule"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Project {
  id: number;
  name: string;
  shortDescription: string;
  skills: string[];
  image: string;
}

const projects = ref<Project[]>([
  {
    id: 1,
    name: 'Advanced-Color-to-Gray-Conversion',
    shortDescription: 'An implementation of "Song, Yibing & Bao, Linchao & Xu, Xiaobin & Yang, Qingxiong. (2013). Decolorization: Is rgb2gray() out?. SIGGRAPH Asia 2013 Technical Briefs, SA "',
    skills: ['Python', 'gray-conversion'],
    image: 'images/Advanced-Color-to-Gray-Conversion.png',
  },
  {
    id: 2,
    name: 'URL Shortener',
    shortDescription: 'An URL shortener',
    skills: ['Vue', 'TypeScript'],
    image: 'images/short-url.png',
  },
  {
    id: 3,
    name: 'Goose Farm Egg Production Analysis System',
    shortDescription: 'A system for analyzing egg production in a goose farm',
    skills: ['C#', 'Python', 'YOLO'],
    image: 'images/goose-farm.png',
  },
  {
    id: 4,
    name: 'Panel Detection Algorithm Development',
    shortDescription: 'A panel detection algorithm development project',
    skills: ['MATLAB', 'image classification', 'Template Matching'],
    image: 'images/panel-detection.jpg',
  },
  {
    id: 5,
    name: 'Hand Rehabilitation Game',
    shortDescription: 'A hand rehabilitation game',
    skills: ['Unity', 'C#'],
    image: 'images/hand-rehabilitation-game.png',
  },
  {
    id: 6,
    name: 'Indoor Design Project Management System',
    shortDescription: 'An indoor design project management system',
    skills: ['Vue', 'C#', 'MSSQL'],
    image: 'images/indoor-design-project-management-system.png',
  }
]);

const router = useRouter();

const goToDetail = (projectId: number) => {
  router.push({ name: 'ProjectDetail', params: { id: projectId } });
};
</script>

<style scoped>
.skill-capsule {
  display: inline-block;
  background-color: #e0f7fa;
  color: #00796b;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}
</style>