<script setup>
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value);
});
</script>

<template>
  <a v-for="loc in availableLocales" :key="loc.code" @click="setLocale(loc.code)">
    {{ loc.name }}
    </a>
</template>
