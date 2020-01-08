<template>
  <div class="ticketBtn">
    <button v-on:click="mutate_tempTicket([action])"><slot></slot></button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'ticketBtn',
  props: ['action'],
  methods: {
    ...mapMutations([
      'mutate_tempTicket'
    ])
  }
}
</script>

<style scoped>
  button {
    height: 8vh; width: 20vh;
    border: none;
    border-radius: 2vh;
    background-color: #C1839F;
    color: #3C3C3C;
    font-size: 3vh;
    transition: background-color 1s;
  }

  button:hover {
    background-color: #F5F5F5;
  }
</style>