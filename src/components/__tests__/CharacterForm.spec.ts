import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { describe, it, expect } from 'vitest'
import CharacterForm from '@/components/CharacterForm.vue'

// example store for testing
const createVuexStore = () => {
  return createStore({
    state: {
      name: null,
      hairStyle: 'mid-length',
      hairColour: '#18A058',
      clothing: null
    }
  })
}

// test cases
describe('CharacterForm.vue', () => {
  it('renders the form and allows user input', async () => {
    const store = createVuexStore()
    const wrapper = mount(CharacterForm, {
      global: {
        plugins: [store]
      }
    })

    // Check if the form is rendered correctly
    expect(wrapper.find('h2').text()).toBe('Customise Your Character')

    const nameInput = wrapper.find('input[type="text"]')
    await nameInput.setValue('Test Name')
    expect(store.state.name).toBe('Test Name')

    const hairStyleSelect = wrapper.findComponent({ name: 'NSelect:nth-of-type(0)' })

    await hairStyleSelect.vm.$emit('update:value', 'bangs')
    expect(store.state.hairStyle).toBe('bangs')

    const hairColourPicker = wrapper.findComponent({ name: 'NColorPicker' })
    await hairColourPicker.vm.$emit('update:value', '#FF0000')
    expect(store.state.hairColour).toBe('#FF0000')

    const clothingSelect = wrapper.findComponent({ name: 'NSelect:nth-of-type(1)' })
    await clothingSelect.vm.$emit('update:value', 'dress')
    expect(store.state.clothing).toBe('dress')
  })
})
