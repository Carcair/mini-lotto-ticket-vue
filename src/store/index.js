import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tempTicket: []
  },
  mutations: {
    mutate_tempTicket(state, argument) {
      switch(argument[0]) {
        case 'add':
          if(state.tempTicket.length < 6 && !state.tempTicket.includes(argument[1]))
            state.tempTicket.push(argument[1]);
          break;
        case 'reset':
          state.tempTicket = [];
          break;
        case 'send':
          if(state.tempTicket.length == 6){
            // First ticket combination will be sent to server, where it will get it's id and be stored on server
            // then the ticket combination and id will be sent back for printing
          }
          break;
      }
      
    },
  },
  actions: {
  },
  modules: {
  }
})
