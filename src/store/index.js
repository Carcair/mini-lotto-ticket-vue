import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tempTicket: [],
    socket: io('localhost:3000')
  },
  mutations: {
    mutate_tempTicket(state, argument) {
      switch(argument[0]) {
        case 'add':
          if(state.tempTicket.length < 6 && !state.tempTicket.includes(argument[1]))
            state.tempTicket.push(argument[1]);
          break;
        case 'remove':
          state.tempTicket.splice(state.tempTicket.indexOf(argument[1]), 1);
          break;
        case 'reset':
          state.tempTicket = [];
          break;
        case 'send':
          if(state.tempTicket.length == 6){
            // First ticket combination will be sent to server, where it will get it's id and be stored on server
            // then the ticket combination and id will be sent back for printing
            state.socket.emit('TICKET', state.tempTicket);
            state.tempTicket = [];
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
