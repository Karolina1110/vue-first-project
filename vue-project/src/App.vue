<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand"><router-link class="nav-link" to="/">Account News</router-link></a>

    <div class="navbar-nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/accounts">Accounts</router-link>
    </div>
  </div>
</nav>

<div class="container mt-4">
  <RouterView />
</div>

</template>

<style scoped>

</style>