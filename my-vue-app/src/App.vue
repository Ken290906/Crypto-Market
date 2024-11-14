<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import "bootstrap/dist/css/bootstrap.css";

</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <RouterView />
    </main>
    
  </div>
  
</template>

<style scoped>

</style>
