<script setup>
import { ref, computed } from "vue"
import ArticleList from "../components/ArticleList.vue"
import DropDownAccounts from "../components/DropDownAccounts.vue";

const selectedAccount = ref('All accounts')
function handleAccountSelected(id) {
  selectedAccount.value = id
  console.log("Selected account:", id)
}

</script>

<template>

<div class="d-flex justify-content-between mb-3">

  <h2>Recent News</h2>
  <DropDownAccounts 
    @accountSelected="handleAccountSelected"
  />
</div>

<ArticleList :accountId="selectedAccount" :key="selectedAccount" />


</template>

