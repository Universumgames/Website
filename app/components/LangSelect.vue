<template>
  <div>
    <header>
      <nav class="langSelect">
        <NuxtLink to="/de">DE</NuxtLink>
        <NuxtLink to="/en">EN</NuxtLink>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.langSelect {
  position: fixed;
  left: 0;
  top: 0;
  padding: 1ch;
  z-index: 100;
}
</style>