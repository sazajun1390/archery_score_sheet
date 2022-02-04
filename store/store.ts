import Vue from 'vue'
import Vuex from 'vuex'

interface AccountSate{
    login:boolean,
    email:string,
    pass:string,
}

Vue.use(Vuex)
const accountState: AccountSate = {
  login: false,
  email: '',
  pass: ''
}

export default new Vuex.Store({
  state: {
    accountState
  }
})
