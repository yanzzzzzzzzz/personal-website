<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Experience</h1>
    <div v-for="(experience, index) in experiences" :key="index" class="mb-8">
      <div class="flex items-start gap-4">
        <div class="mt-1">
          <span class="text-blue-600">🏢</span>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-800">{{ experience.title }}</h2>
          <p class="text-gray-600">{{ experience.company }} | {{ experience.period }}</p>
          <h3 class="text-lg font-medium text-gray-700 mt-2">Responsibilities include:</h3>
          <ul class="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li v-for="(responsibility, idx) in experience.responsibilities" :key="idx">
              {{ responsibility }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h1 class="text-3xl font-bold text-gray-800 mb-8">Education</h1>
    <div v-for="(education, index) in educations" :key="index" class="mb-8">
      <div class="flex items-start gap-4">
        <div class="mt-1">
          <span class="text-blue-600">🎓</span>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-800">{{ education.title }}</h2>
          <p class="text-gray-600">{{ education.institution }} | {{ education.period }}</p>
          <p class="text-gray-600 mt-2">{{ education.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Experience {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

interface Education {
  title: string
  institution: string
  period: string
  description: string
}

const experiences = ref<Experience[]>([
  {
    title: 'Senior Frontend Developer',
    company: 'TechNova',
    period: 'March 2022 - Present',
    responsibilities: [
      '開發和維護公司主網站，使用 Vue.js 和 Tailwind CSS',
      '優化前端性能，提升頁面加載速度 30%',
      '與後端團隊合作，實現 RESTful API 整合'
    ]
  },
  {
    title: 'Junior Web Developer',
    company: 'WebSolutions Inc.',
    period: 'June 2019 - February 2022',
    responsibilities: [
      '參與公司內部工具的前端開發，使用 HTML、CSS 和 JavaScript',
      '維護現有網站，修復 bug 並提升用戶體驗',
      '學習並應用新技術如 TypeScript 和 Vue.js'
    ]
  }
])

const educations = ref<Education[]>([
  {
    title: "Master’s in Computer Science",
    institution: 'National Taiwan University',
    period: 'September 2016 - June 2019',
    description: 'Thesis: "Optimizing Web Performance with Modern JavaScript Frameworks." Supervised by Prof. Chen Wei.'
  },
  {
    title: "Bachelor’s in Information Technology",
    institution: 'National Cheng Kung University',
    period: 'September 2012 - June 2016',
    description: 'Focused on web development and software engineering. Graduated with honors.'
  }
])
</script>

<style scoped>
</style>