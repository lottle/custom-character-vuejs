<template>
  <div class="container">
    <div class="left-panel">
      <CharacterForm />
    </div>
    <div class="right-panel">
      <AvatarScene />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CharacterForm from '../components/CharacterForm.vue'
import AvatarScene from '../components/AvatarScene.vue'

export default defineComponent({
  components: {
    CharacterForm,
    AvatarScene
  }
})
</script>

<style>
.container {
  display: flex;
  height: 100vh;
  width: 100%;
}
.left-panel,
.right-panel {
  padding: 20px;
}
.left-panel {
  flex: 1;
  background-color: #f0f0f0;
}
.right-panel {
  flex: 1;
  background-color: #fff;
}
</style>
