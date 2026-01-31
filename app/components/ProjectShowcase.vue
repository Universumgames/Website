<template>
  <a class="project-showcase" :href="project.link">
    <NuxtImg :src="project.imagePath" :alt="project.name" class="project_icon" />
    <div>
      <h2>{{ project.name }}</h2>
      <p>{{ t(project.detailedDescriptionKey) }}</p>
    </div>
  </a>
</template>

<script lang="ts" setup>
import type { ProjectInfo } from '~/assets/data/projects';

const { t } = useI18n();

defineProps({
  project: {
    type: Object as () => ProjectInfo,
    required: true,
  },
});

</script>

<style scoped>
.project-showcase {
  padding: min(2rem, 5vw);
  border-radius: 2em;
  background-color: var(--bg-color-dimmed);
  gap: 0rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 min(3rem, 5vw);
  flex-wrap: wrap;
  flex-direction: row;
}

.project-showcase h4 {
  margin: 0 0 0.5rem 0;
}

.project-showcase p {
  margin: 0 0 1rem 0;
  font-style: normal;
  font-weight: normal;
  color: var(--text-color);
  font-size: larger;
  max-width: max(50ch, 50vw);
  line-height: 1.25;
}

@media only screen and (max-width: 600px) {
  .project-showcase p {
    font-size: medium;
  }
}

.project_icon {
  width: max(min(50%, 20em), 15ch);
  height: auto;
  object-fit: contain;
  border-radius: 1rem;
}
</style>