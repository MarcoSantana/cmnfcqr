<script setup>
  const menuitems = [
    {
      title: 'Inicio',
      path: '/',
    },
    {
      title: 'Directorio',
      path: '/users',
    },
    {
      title: 'Mesa Directiva',
      path: '/about',
    },
    // {
    //   title: "Contact",
    //   path: "/contact",
    // },
    // {
    //   title: "Users",
    //   path: "/users",
    // }
  ]

  const open = ref(false)
</script>

<template>
  <LandingContainer>
    <header
      class="flex flex-col lg:flex-row justify-between items-center my-5 pa-5"
    >
      <div class="flex w-full lg:w-auto items-center justify-between px-10">
        <a href="/" class="text-lg text-gray-300">CMNFC</a>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0 p-5"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems">
            <a
              :href="item.path"
              class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="#" styleName="muted" block size="md"
            >Ingresar</LandingLink
          >
          <LandingLink href="#" size="md" block>Crear cuenta</LandingLink>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="#">Log in</a>
          <LandingLink href="#" size="md">Sign up </LandingLink>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
<style>
  .header {
    background-color: var(--primary-dark);

    box-shadow: 0 1px 5px var(--divider);

    background: #000;

    background: linear-gradient(
      90deg,
      #000 0%,
      rgba(121, 9, 17, 0.8491771708683473) 77%
    );
  }
</style>
