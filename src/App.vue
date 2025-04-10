<template>
  <v-app>
    <v-app-bar
      color="primary"
      prominent
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>Jack's Portfolio</v-toolbar-title>

      <v-spacer />

      <v-btn
        to="/"
        variant="text"
      >
        Home
      </v-btn>
      <v-btn
        to="/blog"
        variant="text"
      >
        Blog
      </v-btn>
      <v-btn
        to="/experience"
        variant="text"
      >
        Experience
      </v-btn>
      <v-btn
        to="/project"
        variant="text"
      >
        Project
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
