<script setup lang="ts">
import { ref } from 'vue'
import { useAnimations, useFBX } from '@tresjs/cientos'

const model = await useFBX('./default.fbx')
</script>

<template>
  <primitive :object="model" />
</template>
