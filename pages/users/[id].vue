<script setup lang="ts">
definePageMeta({
  layout: "landing",
})
const route = useRoute();
// Get the id from the route
const { id } = useRoute().params;
const user = useUser(id);

</script>

<template>
  <div class="flex justify-center items-center h-screen container">
    <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden w-full max-w-md">
      <div class="backdrop-blur-md bg-opacity-80 backdrop-filter">
        <div class="p-6">
          <p>
            <img class="w-32 h-32 rounded-full mx-auto" :src="user.avatarUrl" />
          </p>
          <h2 class="text-xl font-bold text-gray-800">
            {{ user.name }}
          </h2>
          <p class="text-gray-600 mb-4">
            ID: {{ user.id }}
          </p>
          <p class="text-gray-600">
            Certification Year: {{ user.certificationYear }}
          </p>
          <p class="text-gray-600">
            Certification Expires: {{ user.certificationExpires }}
          </p>
          
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  background: linear-gradient(to bottom, rgb(121, 9, 17), white);
}
</style>
