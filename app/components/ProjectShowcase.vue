<template>
  <div>
    <h4><a :href="project.link">{{ project.name }}</a></h4>
    <p>{{ t(project.detailedDescriptionKey) }}</p>
    <NuxtImg :src="project.imagePath" :alt="project.name" />
  </div>
</template>

<script lang="ts" setup>
import type { ProjectInfo } from '~/assets/data/projects';

const {t} = useI18n();

defineProps({
  project: {
    type: Object as () => ProjectInfo,
    required: true,
  },
});

</script>

<style></style>