import type { SelectOption } from 'naive-ui'
import type { CharacterForm } from './character-form-types'

// select list for all hair options
export const hairOptions: SelectOption[] = [
  {
    label: 'Mid Length',
    value: 'mid-length'
  },
  {
    label: 'Bangs',
    value: 'bangs'
  }
]

// select list for all clothing options
export const clothingOptions: SelectOption[] = [
  {
    label: 'dress',
    value: 'dress'
  },
  {
    label: 'pants',
    value: 'pants'
  }
]

// form submit action
export async function submitCharacter(characterData: CharacterForm) {
  // Simulate a POST request
  const response = await fetch('myapi/character-form', {
    method: 'POST',
    body: JSON.stringify(characterData),
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    // implement error handling to display on screen
  }
}
