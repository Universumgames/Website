<script setup lang="ts">
import IconGithub from '~/assets/svg/github.svg'
import IconTwitter from '~/assets/svg/twitter.svg'
import IconWeb from '~/assets/svg/website.svg'
import IconMail from '~/assets/svg/mail.svg'
import { cvSkills, cvProjects, CVProjectType } from '~/assets/data/cv'
import SkillLevel from '~/components/cv/SkillLevel.vue'
import SkillList from '~/components/cv/SkillList.vue'

const { t } = useI18n()

definePageMeta({
    layout: 'homepage',
})
</script>

<style lang="scss">
@use '~/assets/css/connectionsStyle.scss';
@use '~/assets/css/homepage_main.scss';
</style>

<template>
    <div class="snapping">
        <div id="frontPage">
            <div id="centerContent">
                <h1>UniversumGames</h1>

                <div id="connectives">
                    <a href="/github.html" target="_blank" id="github">
                        <IconGithub />
                    </a>
                    <a href="/twitter.html" target="_blank" id="twitter">
                        <IconTwitter />
                    </a>
                    <a href="/index.html" id="website">
                        <IconWeb />
                    </a>
                    <a href="/mail.html" target="_blank" id="mail">
                        <IconMail />
                    </a>
                </div>
            </div>
        </div>
        <div id="content">
            <div id="headline">
                <h2 style="margin-bottom: 0.2rem">UniversumGames</h2>
                <small>- {{ t("cv.shortDescription") }}</small>
            </div>

            <div id="cv">
                <div id="projects">
                    <h3>{{ t("cv.projects.typeTitles.own") }}</h3>
                    <ul>
                        <li v-for="project in cvProjects.filter(p => p.type === CVProjectType.Personal)" :key="project.name">
                            <a :href="project.link">{{ project.name }}</a> - {{ t(project.descriptionKey) }}
                        </li>
                    </ul>
                    <h3>{{ t("cv.projects.typeTitles.university") }}</h3>
                    <ul>
                        <li v-for="project in cvProjects.filter(p => p.type === CVProjectType.Uni)"
                            :key="project.name">
                            <a :href="project.link">{{ project.name }}</a> - {{ t(project.descriptionKey) }}
                        </li>
                    </ul>
                    <h3>{{ t("cv.projects.typeTitles.contribution") }}</h3>
                    <ul>
                        <li v-for="project in cvProjects.filter(p => p.type === CVProjectType.Contribution)"
                            :key="project.name">
                            <a :href="project.link">{{ project.name }}</a> - {{ t(project.descriptionKey) }}
                        </li>
                    </ul>
                </div>

                <SkillList/>
                <div id="freetime">
                    <h3>{{ t("cv.hobbies.title") }}</h3>
                    <ul>
                        <li>{{ t("cv.hobbies.items.sailing") }}</li>
                        <li>{{ t("cv.hobbies.items.programming") }}</li>
                        <li>{{ t("cv.hobbies.items.student") }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <svg
            style="position: fixed; top: 0; width: fit-content; height: fit-content; z-index: -100; visibility: hidden">
            <defs>
                <linearGradient id="githubDesktopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="20%" stop-color="#862C94" />
                    <stop offset="95%" stop-color="#522F7F" />
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>