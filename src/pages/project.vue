<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12">
        <h1 class="text-h3 font-weight-bold mb-8">My Projects</h1>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4" class="pa-2">
        <v-card class="mx-auto" max-width="500" height="100%" hover>
          <v-carousel height="250" hide-delimiters show-arrows="hover">
            <v-carousel-item v-for="(image, imgIndex) in project.images" :key="imgIndex">
              <v-img :src="image" height="250" contain class="bg-grey-lighten-2" />
            </v-carousel-item>
          </v-carousel>

          <v-card-title class="text-h5 font-weight-bold">
            {{ project.name }}
          </v-card-title>

          <v-card-text>
            <div class="text-body-1 mb-4">
              {{ project.shortDescription }}
            </div>

            <v-chip
              v-for="(skill, idx) in project.skills"
              :key="idx"
              class="ma-1"
              color="primary"
              variant="outlined"
              size="small"
            >
              {{ skill }}
            </v-chip>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" variant="text"> View Details </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  interface Project {
    id: number
    name: string
    shortDescription: string
    skills: string[]
    images: string[]
    periodFrom: Date
    periodTo: Date
  }

  const projects = ref<Project[]>(
    [
      {
        id: 1,
        name: 'Advanced-Color-to-Gray-Conversion',
        shortDescription:
          'An implementation of "Song, Yibing & Bao, Linchao & Xu, Xiaobin & Yang, Qingxiong. (2013). Decolorization: Is rgb2gray() out?. SIGGRAPH Asia 2013 Technical Briefs, SA "',
        skills: ['Python', 'gray-conversion'],
        images: ['images/Advanced-Color-to-Gray-Conversion.png'],
        periodFrom: new Date(2020, 6),
        periodTo: new Date(2020, 8),
      },
      {
        id: 3,
        name: 'Goose Farm Egg Production Analysis System',
        shortDescription: 'A system for analyzing egg production in a goose farm',
        skills: ['C#', 'Python', 'YOLO'],
        images: ['images/goose-farm.png'],
        periodFrom: new Date(2017, 6),
        periodTo: new Date(2019, 8),
      },
      {
        id: 4,
        name: 'Panel Defect Detection System',
        shortDescription: 'A panel defect detection system',
        skills: ['MATLAB', 'image classification', 'Template Matching'],
        images: [
          'images/panel-detection.jpg',
          'images/panel-detection-2.jpg',
          'images/panel-detection-3.jpg',
        ],
        periodFrom: new Date(2017, 9),
        periodTo: new Date(2018, 6),
      },
      {
        id: 5,
        name: 'Hand Rehabilitation Game',
        shortDescription: 'A hand rehabilitation game',
        skills: ['Unity', 'C#'],
        images: ['images/hand-rehabilitation-game.png', 'images/hand-rehabilitation-game-2.png'],
        periodFrom: new Date(2016, 9),
        periodTo: new Date(2017, 6),
      },
      {
        id: 6,
        name: 'Indoor Design Project Management System',
        shortDescription: 'An indoor design project management system',
        skills: ['Vue', 'C#', 'MSSQL'],
        images: [
          'images/indoor-design-project-management-system.png',
          'images/indoor-design-project-management-system-2.png',
          'images/indoor-design-project-management-system-3.png',
        ],
        periodFrom: new Date(2023, 1),
        periodTo: new Date(2023, 3),
      },
      {
        id: 7,
        name: 'Wafer inspection system',
        shortDescription: 'A Wafer inspection system',
        skills: ['C#', 'Motion Control', 'Defect detection', 'SECS/GEM'],
        images: ['images/Wafer-Inspection.jpg', 'images/Wafer-Inspection-1.jpg'],
        periodFrom: new Date(2020, 7),
        periodTo: new Date(2022, 9),
      },
    ].sort((a, b) => b.periodFrom.getTime() - a.periodFrom.getTime())
  )

  // const router = useRouter()

  // const goToDetail = (projectId: number) => {
  //   router.push({ name: 'ProjectDetail', params: { id: projectId } })
  // }
</script>

<style scoped>
  .v-card {
    transition: transform 0.3s ease;
  }

  .v-card:hover {
    transform: translateY(-5px);
  }

  .v-col {
    padding: 8px !important;
  }

  .v-carousel {
    border-radius: 4px 4px 0 0;
  }

  .v-img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
