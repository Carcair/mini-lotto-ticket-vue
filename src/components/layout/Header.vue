<template>
  <div class="navBar">
    <router-link to="/get-ticket"><header-btn>Get Ticket</header-btn></router-link>
    <header-btn>Check Ticket</header-btn>
  </div>
</template>

<script>
import HeaderBtn from './../btn/HeaderBtn.vue';

export default {
  name: 'navBar',
  components: {
    HeaderBtn
  }
}
</script>

<style scoped>
  .navBar {
    background-color: #3C3C3C;
    width: 100vw;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-content: center;
    grid-gap: 5vh;
  }
</style>