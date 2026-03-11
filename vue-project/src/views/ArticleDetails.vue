<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import axios from 'axios';

const route = useRoute()
const articleId = route.params.id
const article = ref({})

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:4000/articles/${articleId}`);
    article.value = response.data;
  } catch (error) {
    console.error('Error fetching article', error);
  }
});

function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString()
}

function highlightMentions(text, indices, type) {
    
    if (!indices) return text

    let highlights = []

    Object.values(indices).forEach(arr => {
        arr[type].forEach(i => highlights.push(i))
    })

    let result = ""
    let lastIndex = 0
    highlights.forEach(h => {
        result += text.slice(lastIndex, h[0])

        result += `<span class="bg-warning px-1">
        ${text.slice(h[0], h[1])}
        </span>`

        lastIndex = h[1]
    })

    result += text.slice(lastIndex)

    return result
}
</script>

<template>

<div v-if="article" class="container mt-4">

  <div class="card shadow">

    <div class="card-body">

      <h2 
        class="card-title mb-3"
        v-html="highlightMentions(article.title, article.indices, 'title')">
      </h2>

      <div class="mb-3 text-muted">
        <strong>{{ article.outlet }}</strong>
        {{ formatDate(article.timestamp) }}
      </div>

      <hr>

      <p
        class="article-text"
        v-html="highlightMentions(article.text, article.indices, 'text')"
      ></p>

    </div>

  </div>

</div>

</template>