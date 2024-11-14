<script setup>
import "bootstrap/dist/css/bootstrap.css";
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar navbar-custom">
      <a class="navbar-brand" href="#">
        <font-awesome-icon :icon="['fab', 'viacoin']" class="viacoin-icon" />
        KenCoins
      </a>
      <ul class="nav d-flex justify-content-evenly align-items-center w-25">
        <router-link to="/home" class="router_btn">Home</router-link>
        <router-link to="/features" class="router_btn">Features</router-link>
        <router-link to="/pricing" class="router_btn">Pricing</router-link>
        <router-link to="/blog" class="router_btn">Blog</router-link>
      </ul>
      <div class="d-flex justify-content-between align-items-center">
        <router-link to="/signin" class="btn btn-dark me-2">Sign In</router-link>
        <router-link to="/signup" class="btn btn-dark">Help</router-link>
      </div>
    </nav>
  </div>
</template>

<style src="./Navbar.css"></style>
