<script setup>
import { onMounted, ref } from 'vue';
import getAccounts from '@/composables/getAccounts';

const accounts = ref([])
const selectedAccount = ref('All accounts')
const emit = defineEmits(["accountSelected"])

function onChange(event) {
  emit("accountSelected", event.target.value)
}

onMounted(async () => {
  accounts.value = await getAccounts()
});
</script>

<template>
    <div class="text-end">
    <select
        v-model="selectedAccount"
        @change="onChange"
        class="form-select" 
        aria-label="account select"
    >
        <option selected >All accounts</option>
        <option v-for="account in accounts"
            :key="account.id"
            :value="account.id"
            >{{ account.name }}</option>
        </select>
    </div>
</template>

<style>

</style>