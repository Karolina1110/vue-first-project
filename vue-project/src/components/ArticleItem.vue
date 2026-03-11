<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  article: Object
})
const router = useRouter()

function formatDate(ts) {
  return new Date(ts * 1000).toLocaleDateString()
}
function onCardClick(id){
  router.push(`/articles/${id}`)
}
</script>

<template>

<div class="card h-100 shadow-sm article-card" @click="onCardClick(article.id)">

  <div class="card-body">

    <h5 class="card-title">
      {{ article.title }}
    </h5>

    <h6 class="card-subtitle mb-2 text-muted">
      {{ article.outlet }}
    </h6>

    <p class="card-text">
      {{ article.text.slice(0,120) }}...
    </p>
    
  </div>

  <div class="card-footer text-muted">
    {{ formatDate(article.timestamp) }}
    
  </div>

</div>

</template>

<style scoped>
.article-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.article-card:hover {
  background-color: #f8f9fa;
  /* box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15); */
}
</style>