<template>
  <header class="app-header">
    <div>
      <h1>{{ title }}</h1>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/fetch">Fetch Example</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'form' }">Form Example</RouterLink>
          </li>
          <li>
            <!-- Add a RouterLink for the new route -->
            <RouterLink to="/prof-home">Prof Home</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script setup>
// import the <RouterLink> component so that we can use it in the template above
import { RouterLink } from "vue-router";

// give this component a title property so that the parent component (app.vue) can set whatever title it wants
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style>
/* give the header itself a background color, a border, and add some padding to the content */
.app-header {
  background-color: #fcfcfc;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem;
}

/* make the title within the header a larger and bolder font */
.app-header h1 {
  font-size: 2rem;
  font-weight: bold;
}

.app-header ul {
  display: flex;
}

.app-header li {
  padding-right: 15px;
}
</style>