<script setup>
import ArticleItem from "./ArticleItem.vue"
import { RouterLink } from 'vue-router';
import { defineProps, onMounted, ref } from 'vue';
import axios from 'axios';
import getArticles from "@/composables/getArticles";

const props = defineProps({
  accountId: String
});

const limit = ref(12)
const articles = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    articles.value = await getArticles(props.accountId)
  } catch (error) {
    console.error('Error fetching jobs', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>

<div class="row">
  <div v-if="isLoading" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div
    class="col-md-6 col-lg-4 mb-3"
    v-for="article in articles.slice(0,limit)"
    :key="article.id"
  >
    <ArticleItem :article="article" />
  </div>
  <div v-if="limit<articles.length" class="d-grid gap-2 mb-3">
    <button
      class="btn btn-outline-primary"
      @click="limit+=12"
    >
      Load more
    </button>
  </div>
</div>

</template>