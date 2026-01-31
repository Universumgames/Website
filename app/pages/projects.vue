<template>
  <div class="project-list">
    <ProjectShowcase
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </div>
</template>

<script lang="ts" setup>
import { projects } from '~/assets/data/projects';
import ProjectShowcase from '~/components/ProjectShowcase.vue';

definePageMeta({
  layout: 'default',
})
</script>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  margin: min(4rem, 1vw);
  gap: 2rem;
}
</style>