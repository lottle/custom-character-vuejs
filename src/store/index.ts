import { createStore } from 'vuex'

import type { CharacterForm } from '../data/character-form-types'
import { hairFileLocation } from '../data/avatar-scene'

const store = createStore<CharacterForm>({
  state: {
    name: null,
    hairStyle: 'mid-length',
    hairColour: '#18A058',
    clothing: null,
    hairStylePath: `${hairFileLocation}mid-length.fbx`
  },
  mutations: {
    setName(state: CharacterForm, name: string | null) {
      state.name = name
    },
    setHairStyle(state: CharacterForm, hairStyle: string | null) {
      state.hairStyle = hairStyle
    },
    setHairColour(state: CharacterForm, hairColour: string | null) {
      state.hairColour = hairColour
    },
    setClothing(state: CharacterForm, clothing: string | null) {
      state.clothing = clothing
    },
    setHairStylePath(state: CharacterForm, hairStylePath: string | null) {
      state.hairStylePath = hairStylePath
    }
  },
  actions: {
    updateName({ commit }, name: string | null) {
      commit('setName', name)
    },
    updateHairStyle({ commit }, hairStyle: string | null) {
      commit('setHairStyle', hairStyle)
      commit('setHairStylePath', `${hairFileLocation}${hairStyle}.fbx`)
    },
    updateHairColour({ commit }, hairColour: string | null) {
      commit('setHairColour', hairColour)
    },
    updateClothing({ commit }, clothing: string | null) {
      commit('setClothing', clothing)
    }
  },
  getters: {
    name: (state: CharacterForm) => state.name,
    hairStyle: (state: CharacterForm) => state.hairStyle,
    hairColour: (state: CharacterForm) => state.hairColour,
    clothing: (state: CharacterForm) => state.clothing,
    hairStylePath: (state: CharacterForm) => state.hairStylePath
  }
})

export default store
