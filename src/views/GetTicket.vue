<template>
  <div class="get-ticket">
    <div class="choice">
      <ball-btn v-for="number in allNumbers" v-bind:key="number" v-bind:num="number">{{number}}</ball-btn>
    </div>

    <div class="ticket">
      <ball-btn v-for="number in tempTicket" v-bind:key="number">{{number}}</ball-btn>
    </div>
    
    <div class="ticketStatus">
      <ticket-btn v-bind:action="'send'">Send</ticket-btn>
      <ticket-btn v-bind:action="'reset'">Reset</ticket-btn>
    </div>
  </div>
</template>

<script>
import BallBtn from './../components/btn/BallBtn.vue';
import TicketBtn from './../components/btn/TicketBtn.vue';
import {mapState} from 'vuex';

export default {
  name: 'home',
  components: {
    BallBtn,
    TicketBtn
  },
  data() {
    return {
      allNumbers: []
    }
  },
  computed: {
    ...mapState([
      'tempTicket'
    ])
  },
  mounted() {
    for(let i = 1; i <= 45; i++) {
      this.allNumbers.push(i);
    }
  },
}
</script>

<style scoped>
  .get-ticket {
    display: grid;
    grid-template-rows: 60vh 10vh 10vh;
  }

  .choice {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
    justify-content: space-evenly;
    align-content: space-around;
  }

  .ticket {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    justify-content: space-evenly;
    align-content: center;
  }

  .ticketStatus {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    align-content: center;
  }
</style>