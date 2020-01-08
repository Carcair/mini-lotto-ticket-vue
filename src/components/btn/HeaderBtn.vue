<template>
  <div class="headerBtn">
    <button><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'HeaderBtn'
}
</script>

<style scoped>
  button {
    height: 8vh; width: 20vh;
    border: none;
    border-radius: 2vh;
    background-color: #FF5A5F;
    color: #3C3C3C;
    font-size: 3vh;
    transition: background-color 1s;
  }

  button:hover {
    background-color: #F5F5F5;
  }
</style>