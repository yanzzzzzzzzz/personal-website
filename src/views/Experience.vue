<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Experience</h1>
    <div v-for="(experience, index) in experiences" :key="index" class="mb-8">
      <div class="flex items-start gap-4">
        <div class="mt-1">
          <span class="text-blue-600">🏢</span>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-800">
            {{ experience.title }}
          </h2>
          <p class="text-gray-600">
            {{ experience.company }} | {{ experience.period }}
          </p>
          <h3 class="text-s font-medium text-gray-400 mt-2">
            <span v-for="(skill, idx) in experience.skills" :key="idx" class="skill-capsule">
              {{ skill }}
            </span>
          </h3>
          <ul class="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li
              v-for="(responsibility, idx) in experience.responsibilities"
              :key="idx"
            >
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
          <h2 class="text-xl font-semibold text-gray-800">
            {{ education.title }}
          </h2>
          <p class="text-gray-600">
            {{ education.institution }} | {{ education.period }}
          </p>
          <p class="text-gray-600 mt-2">{{ education.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  skills:string[];
}

interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
}

const experiences = ref<Experience[]>([
  {
    title: "Back-end Developer",
    company: "Nexify Limited",
    period: "March 2022 - Present",
    responsibilities: [
      "Developed APIs using C# (.NET 8) and Entity Framework with LINQ, optimizing database interactions and enabling multi-signature PDF functionality with DevExpress for accurate, streamlined business processes.",
      "Designed dynamic form generation and processing (text replacement, table duplication, Word-to-PDF conversion, multi-PDF merging) to support legal and financial reporting requirements.",
      "Enhanced frontend functionality using Vue 3 Composition API and PrimeVue, implementing pagination, lazy loading, and dynamic data processing to meet user needs.",
      "Built CI/CD pipelines with Git, MS Build, and PowerShell, integrating Teams API for automated notifications and scheduling tasks to ensure reliable, continuous delivery.",
      "Improved system stability by writing unit tests with MS Test, ensuring robust backend performance and deployment reliability.",
    ],
    skills:["C#",".NET 8","Entity Framework","LINQ","DevExpress","Vue 3 Composition API","PrimeVue","Git","MS Build","PowerShell","MS Test","CI/CD pipelines","Teams API","unit tests"],
  },
  {
    title: "Software Engineer",
    company: "YuanYu Group",
    period: "May 2020 - September 2022",
    responsibilities: [
      "Specialized in optical mechanical systems, motion control, computer vision, and GUI software, contributing to advanced system design and implementation.",
      "Developed and optimized AOI visual inspection equipment, customizing software and hardware to meet specific client needs and improve efficiency.",
      "Tested and validated visual inspection systems, ensuring peak performance and reliability for production environments.",
      "Worked with cross-functional teams, delivering projects on schedule and within budget while meeting quality standards.",
    ],
    skills:["optical mechanical systems","motion control","computer vision","GUI software","AOI visual inspection equipment","cross-functional teams"],
  },
]);

const educations = ref<Education[]>([
  {
    title: "Master’s in Computer Science",
    institution: "National Chin-Yi University of Technology",
    period: "2017 - 2019",
    description:
      'Thesis: "Goose Farm Egg Production Analysis System." Supervised by Prof. Shih-Yen Huang, Jzau-Sheng Lin',
  },
]);
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
