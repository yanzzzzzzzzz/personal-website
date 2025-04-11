<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12">
        <h1 class="text-h3 font-weight-bold mb-8">My Projects</h1>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4" class="pa-2">
        <v-card class="mx-auto" max-width="500" height="100%" hover @click="goToDetail(project.id)">
          <v-carousel
            v-if="project.images && project.images.length > 0"
            height="250"
            hide-delimiters
            show-arrows="hover"
          >
            <v-carousel-item v-for="(image, imgIndex) in project.images" :key="imgIndex">
              <v-img :src="image" height="250" contain class="bg-grey-lighten-2" />
            </v-carousel-item>
          </v-carousel>
          <v-img v-else :src="project.image" height="250" contain class="bg-grey-lighten-2" />

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
            <v-btn color="primary" variant="text" @click.stop="goToDetail(project.id)">
              View Details
            </v-btn>
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
    image: string
    images?: string[]
  }

  const projects = ref<Project[]>([
    {
      id: 1,
      name: 'Advanced-Color-to-Gray-Conversion',
      shortDescription:
        'An implementation of "Song, Yibing & Bao, Linchao & Xu, Xiaobin & Yang, Qingxiong. (2013). Decolorization: Is rgb2gray() out?. SIGGRAPH Asia 2013 Technical Briefs, SA "',
      skills: ['Python', 'gray-conversion'],
      image: 'images/Advanced-Color-to-Gray-Conversion.png',
      images: [
        'images/Advanced-Color-to-Gray-Conversion.png',
        'images/Advanced-Color-to-Gray-Conversion-2.png',
        'images/Advanced-Color-to-Gray-Conversion-3.png',
      ],
    },
    {
      id: 2,
      name: 'URL Shortener',
      shortDescription: 'An URL shortener',
      skills: ['Vue', 'TypeScript'],
      image: 'images/short-url.png',
      images: ['images/short-url.png', 'images/short-url-2.png', 'images/short-url-3.png'],
    },
    {
      id: 3,
      name: 'Goose Farm Egg Production Analysis System',
      shortDescription: 'A system for analyzing egg production in a goose farm',
      skills: ['C#', 'Python', 'YOLO'],
      image: 'images/goose-farm.png',
      images: ['images/goose-farm.png', 'images/goose-farm-2.png', 'images/goose-farm-3.png'],
    },
    {
      id: 4,
      name: 'Panel Detection Algorithm Development',
      shortDescription: 'A panel detection algorithm development project',
      skills: ['MATLAB', 'image classification', 'Template Matching'],
      image: 'images/panel-detection.jpg',
      images: [
        'images/panel-detection.jpg',
        'images/panel-detection-2.jpg',
        'images/panel-detection-3.jpg',
      ],
    },
    {
      id: 5,
      name: 'Hand Rehabilitation Game',
      shortDescription: 'A hand rehabilitation game',
      skills: ['Unity', 'C#'],
      image: 'images/hand-rehabilitation-game.png',
      images: ['images/hand-rehabilitation-game.png', 'images/hand-rehabilitation-game-2.png'],
    },
    {
      id: 6,
      name: 'Indoor Design Project Management System',
      shortDescription: 'An indoor design project management system',
      skills: ['Vue', 'C#', 'MSSQL'],
      image: 'images/indoor-design-project-management-system.png',
      images: [
        'images/indoor-design-project-management-system.png',
        'images/indoor-design-project-management-system-2.png',
        'images/indoor-design-project-management-system-3.png',
      ],
    },
  ])

  const router = useRouter()

  const goToDetail = (projectId: number) => {
    router.push({ name: 'ProjectDetail', params: { id: projectId } })
  }
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
