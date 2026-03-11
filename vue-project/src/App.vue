<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand">Account News</a>

    <div class="navbar-nav">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/accounts">Accounts</RouterLink>
    </div>
  </div>
</nav>

<div class="container mt-4">
  <RouterView />
</div>

</template>

<style scoped>

</style>