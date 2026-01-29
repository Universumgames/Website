<script setup lang="ts">
//const { t } = useI18n()

onMounted(() => {
    function getBrowserPresetLang() {
        if (navigator.languages != undefined) return navigator.languages[0]
        return navigator.language
    }

    if (getBrowserPresetLang().includes("de")) window.location = "/de"
    else window.location = "/en"
});

</script>

<template>
    <NuxtPage page-key="en"/>
</template>