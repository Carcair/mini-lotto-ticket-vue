<template>
  <div class="ballBtn">
    <button v-on:click="mutate_tempTicket(['add', num])"><slot></slot></button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: 'ballBtn',
  props: ['num'],
  methods: {
    ...mapMutations([
      'mutate_tempTicket'
    ])
  }
}
</script>

<style scoped>
  button {
    border: none; margin: 0;
    height: 8vh; width: 8vh;
    border-radius: 50%;
    font-size: 3vh;
    font-weight: bold;
    background-color: #F5F5F5;
    color: #3C3C3C;
    transition: all 1s;
  }

  button:hover {
    background-color: #3C3C3C;
    color: #F5F5F5;
  }
</style>