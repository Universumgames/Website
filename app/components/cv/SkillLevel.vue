<template>
  <tr>
    <td>
      <strong>{{ skill.name }}</strong>
    </td>
    <td>
      <span v-for="n in 5" :key="n">
        <span v-if="n <= skill.level">★</span><span v-else>☆</span>
      </span>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import type { CVSkill } from '~/assets/data/cv';

defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>