<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
const route = useRoute();
// Get the id from the route
const { id } = useRoute().params;
const user = useUser(id);
const events = useEvents();

const uE = user.events;
const userEvents = useUserEvents(id);
console.log("Events", events);

const myEvents = user.value.events.map((userEvent) => {
  return events.value.filter((event) => event.id === userEvent)[0];
});
</script>

<template>
  <div class="flex justify-center items-center h-screen container">
    <div
      class="bg-gray-100 rounded-lg shadow-md overflow-hidden w-full max-w-md"
    >
      <div class="backdrop-blur-md bg-opacity-80 backdrop-filter">
        <div class="p-6">
          <p>
            <img class="w-32 h-32 rounded-full mx-auto" :src="user.avatarUrl" />
          </p>
          <h2 class="text-xl font-bold text-gray-800">
            {{ user.name }}
            <small class="text-gray-600 mb-4"> ID: {{ user.id }} </small>
          </h2>
          <p class="text-gray-600">
            Año de Certificación: {{ user.certificationYear }}
          </p>
          <p class="text-gray-600">
            Vigencia de Certificación: {{ user.certificationExpires }}
          </p>
          <!-- Table of events -->
          <table
            class="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead>
              <tr>
                <th class="py-3 px-6">Nombre del Evento</th>
                <th class="py-3 px-6">Fecha</th>
                <th class="py-3 px-6">Puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event of myEvents" :key="event.id">
                <td class="py-3 px-6">
                  {{ event.name }}
                </td>
                <td class="py-3 px-6">
                  {{ event.date }}
                </td>
                <td class="py-3 px-6">
                  {{ event.certificationPoints }}
                </td>
              </tr>
            </tbody>
          </table>
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
