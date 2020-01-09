<template>
  <div class="get-ticket">
    <div class="choice">
      <ball-btn 
        v-for="number in allNumbers"
        v-bind:key="number"
        v-bind:num="number"
        v-bind:isChosen="check(number)"
        v-bind:action="'add'"
      >
        {{number}}
      </ball-btn>
    </div>

    <div class="ticket">
      <ball-btn 
        v-for="number in tempTicket"
        v-bind:key="number"
        v-bind:num="number"
        v-bind:isChosen="true"
        v-bind:action="'remove'"
      >
        {{number}}
      </ball-btn>
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
  methods: {
    check(val) {
      if(this.tempTicket.includes(val))
        return true;
      else
        return false;
    }
  }
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
    justify-content: center;
    align-content: center;
    grid-gap: 5vh;
  }

  .ticketStatus {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-content: center;
    grid-gap: 5vh;
  }
</style>