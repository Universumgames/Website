<template>
  <div id="skills">
    <h3>{{ t("cv.skills.title") }}</h3>
    <h4>{{ t("cv.skills.languages") }}</h4>
    <ul>
      <SkillLevel v-for="skill in cvSkills.filter(s => s.section === CVSection.Languages)" :key="skill.name" :skill="skill" />
    </ul>
    <h4>{{ t("cv.skills.programmingLanguages") }}</h4>
    <ul>
      <SkillLevel v-for="skill in cvSkills.filter(s => s.section === CVSection.Programming_Languages)" :key="skill.name" :skill="skill" />
    </ul>
    <h4>{{ t("cv.skills.frameworksAndLibraries") }}</h4>
    <ul>
      <SkillLevel v-for="skill in cvSkills.filter(s => s.section === CVSection.Frameworks_and_Libraries)" :key="skill.name" :skill="skill" />
    </ul>
    <h4>{{ t("cv.skills.toolsAndPlatforms") }}</h4>
    <ul>
      <SkillLevel v-for="skill in cvSkills.filter(s => s.section === CVSection.Tools_and_Platforms)" :key="skill.name" :skill="skill" />
    </ul>
    <h4>{{ t("cv.skills.otherSkills") }}</h4>
    <ul>
      <SkillLevel v-for="skill in cvSkills.filter(s => s.section === CVSection.Other_Skills)" :key="skill.name" :skill="skill" />
    </ul>
    <p>
      {{ t("cv.footnoteLanguages") }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { CVSection, cvSkills } from '~/assets/data/cv'
import SkillLevel from '~/components/cv/SkillLevel.vue'

const { t } = useI18n()
</script>

<style>

</style>