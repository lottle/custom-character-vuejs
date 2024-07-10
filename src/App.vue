<template>
  <CharacterContainer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CharacterContainer from './views/CharacterContainer.vue'

export default defineComponent({
  name: 'App',
  components: {
    CharacterContainer
  }
})
</script>

<!-- <style>
#app {
  
}
</style> -->
