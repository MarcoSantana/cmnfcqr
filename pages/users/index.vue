<script setup lang="ts">
definePageMeta({
  layout: "landing",
})
const users = useUsers();
</script>
<template>
  <table class="mx-5 table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead>
      <tr>
        <th scope="col">NOMBRE</th>
        <th scope="col">AÑO DE CERTIFICACIÓN</th>
        <th scope="col">VIGENCIA DE CERTIFICACIÓN</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user of users" :key="user.id">
        <td class="text-start">{{ user.name }}</td>
        <td class="text-start">{{ user.certificationYear }}</td>
        <td class="text-start">{{ user.certificationExpires }}</td>
      </tr>
    </tbody>
  </table>
</template>
