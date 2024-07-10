<script setup lang="ts">
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { TresCanvas } from '@tresjs/core'
import { useLoader } from '@tresjs/core'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { GLTFModel, FBXModel, OrbitControls } from '@tresjs/cientos'
import Avatar from './Avatar.vue'

const gl = {
  clearColor: '#096C75',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping
}
</script>

<template>
  <TresCanvas v-bind="gl">
    <TresPerspectiveCamera :position="[2, 2, 9]" :look-at="[0, 2, 0]" />
    <OrbitControls />
    <Suspense>
      <Avatar />
    </Suspense>
    <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="1" />
    <TresAmbientLight :intensity="2" />
  </TresCanvas>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  background-color: #000;
}
</style>
