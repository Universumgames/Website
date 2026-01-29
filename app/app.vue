<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

function setMode() {
  const htmlBody = document.body
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    htmlBody.classList.add("darkmode")
    htmlBody.classList.remove("lightmode")
  } else {
    htmlBody.classList.add("lightmode")
    htmlBody.classList.remove("darkmode")
  }
}

onMounted(() => {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    //const newColorScheme = e.matches ? "dark" : "light";
    setMode()
  })
  setMode()
});

</script>