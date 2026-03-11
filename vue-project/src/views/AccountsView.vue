<script setup>
import { onMounted, ref } from 'vue';
import getAccounts from "@/composables/getAccounts"

const accounts = ref([])

onMounted(async () => {
  accounts.value = await getAccounts()
});
</script>

<template>

<div class="container mt-4">

    <h2 class="mb-4">Accounts</h2>

    <table class="table table-striped">

      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Industry</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="account in accounts" :key="account.id">
          <td>{{ account.id }}</td>
          <td>{{ account.name }}</td>
          <td>{{ account.industry }}</td>
          <td>
            <span
              class="badge"
              :class="account.type === 'Customer' ? 'bg-success' : 'bg-secondary'"
            >
              {{ account.type }}
            </span>
          </td>
        </tr>
      </tbody>

    </table>

  </div>

</template>