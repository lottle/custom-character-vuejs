import { createStore } from 'vuex';

export interface State {
  inputValue: string
}

export default createStore<State>({
  state: {
    inputValue: ''
  },
})
