<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold mb-4">Experience</h1>

        <v-timeline density="compact" align="start" class="experience-timeline">
          <v-timeline-item
            v-for="(experience, index) in experiences"
            :key="index"
            :dot-color="'primary'"
            size="small"
            class="timeline-item no-gap"
          >
            <template v-slot:opposite>
              <div class="text-caption">{{ experience.period }}</div>
            </template>

            <v-card class="mb-2" style="background-color: transparent">
              <v-card-title class="text-h5">
                {{ experience.title }}
              </v-card-title>
              <v-card-subtitle class="text-subtitle-1">
                {{ experience.company }}
              </v-card-subtitle>

              <v-card-text>
                <v-chip-group>
                  <v-chip
                    v-for="(skill, idx) in experience.skills"
                    :key="idx"
                    size="small"
                    color="primary"
                    variant="outlined"
                    class="ma-1"
                  >
                    {{ skill }}
                  </v-chip>
                </v-chip-group>

                <v-list density="compact" class="mt-4 transparent">
                  <v-list-item
                    v-for="(responsibility, idx) in experience.responsibilities"
                    :key="idx"
                    :title="responsibility"
                    class="text-body-2"
                  >
                    <template v-slot:prepend>
                      <v-icon icon="mdi-check-circle" color="primary" size="small"></v-icon>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        <h1 class="text-h3 font-weight-bold mb-8 mt-12">Education</h1>

        <v-timeline density="compact" align="start">
          <v-timeline-item
            v-for="(education, index) in educations"
            :key="index"
            :dot-color="'secondary'"
            size="small"
          >
            <template v-slot:opposite>
              <div class="text-caption">{{ education.period }}</div>
            </template>
            <v-card class="no-card-gap same-width-card">
              <v-card-title class="text-h5">
                {{ education.title }}
              </v-card-title>
              <v-card-subtitle class="text-subtitle-1">
                {{ education.institution }}
              </v-card-subtitle>
              <v-card-text class="text-body-1">
                {{ education.description }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  interface Experience {
    title: string
    company: string
    period: string
    responsibilities: string[]
    skills: string[]
  }

  interface Education {
    title: string
    institution: string
    period: string
    description: string
  }

  const experiences = ref<Experience[]>([
    {
      title: 'Back-end Developer',
      company: 'Nexify Limited',
      period: 'March 2022 - Present',
      responsibilities: [
        'Developed APIs using C# (.NET 8) and Entity Framework with LINQ, optimizing database interactions and enabling multi-signature PDF functionality with DevExpress for accurate, streamlined business processes.',
        'Designed dynamic form generation and processing (text replacement, table duplication, Word-to-PDF conversion, multi-PDF merging) to support legal and financial reporting requirements.',
        'Enhanced frontend functionality using Vue 3 Composition API and PrimeVue, implementing pagination, lazy loading, and dynamic data processing to meet user needs.',
        'Built CI/CD pipelines with Git, MS Build, and PowerShell, integrating Teams API for automated notifications and scheduling tasks to ensure reliable, continuous delivery.',
        'Improved system stability by writing unit tests with MS Test, ensuring robust backend performance and deployment reliability.',
      ],
      skills: [
        'C#',
        '.NET 8',
        'Entity Framework',
        'LINQ',
        'DevExpress',
        'Vue 3 Composition API',
        'PrimeVue',
        'Git',
        'MS Build',
        'PowerShell',
        'MS Test',
        'CI/CD pipelines',
        'Teams API',
        'unit tests',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'YuanYu Group',
      period: 'May 2020 - September 2022',
      responsibilities: [
        'Specialized in optical mechanical systems, motion control, computer vision, and GUI software, contributing to advanced system design and implementation.',
        'Developed and optimized AOI visual inspection equipment, customizing software and hardware to meet specific client needs and improve efficiency.',
        'Tested and validated visual inspection systems, ensuring peak performance and reliability for production environments.',
        'Worked with cross-functional teams, delivering projects on schedule and within budget while meeting quality standards.',
      ],
      skills: [
        'optical mechanical systems',
        'motion control',
        'computer vision',
        'GUI software',
        'AOI visual inspection equipment',
        'cross-functional teams',
      ],
    },
  ])

  const educations = ref<Education[]>([
    {
      title: "Master's in Computer Science",
      institution: 'National Chin-Yi University of Technology',
      period: '2017 - 2019',
      description:
        'Thesis: "Goose Farm Egg Production Analysis System." Supervised by Prof. Shih-Yen Huang, Jzau-Sheng Lin',
    },
  ])
</script>

<style scoped>
  .v-timeline-item__body {
    width: 100%;
    padding-bottom: 0 !important;
  }

  .experience-timeline :deep(.v-timeline-item),
  .experience-timeline :deep(.v-timeline-item__body),
  .timeline-item,
  .no-gap {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    min-height: 0 !important;
  }

  .no-card-gap {
    margin-bottom: 0 !important;
    box-shadow: none;
    border-radius: 0;
    padding-bottom: 0 !important;
  }

  .same-width-card {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
</style>
