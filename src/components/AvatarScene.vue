<!-- Avatar Scene -->
<template>
  <TresCanvas v-bind="gl">
    <TresPerspectiveCamera ref="cameraRef" :position="[0, 222, 400]" />
    <OrbitControls />
    <Suspense>
      <FBXModel :path="modelPath" />
    </Suspense>
    <Suspense>
      <FBXModel :path="hairPath" :position="[0, 47, 2]" />
    </Suspense>
    <TresDirectionalLight
      color="white"
      :intensity="1"
      :position="[2, 1, 3]"
      :shadow-mapSize-width="1024"
      :shadow-mapSize-height="1024"
      :shadow-camera-far="50"
      :shadow-camera-left="-10"
      :shadow-camera-right="10"
      :shadow-camera-top="10"
      :shadow-camera-bottom="-10"
      :shadow-bias="-0.000001"
    />
    <TresAmbientLight :intensity="2" />
  </TresCanvas>
</template>

<script lang="ts">
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, FBXModel } from '@tresjs/cientos'
import { avatarFileLocation, hairFileLocation } from '@/data/avatar-scene'
import { defineComponent, ref } from 'vue'
import { mapGetters, useStore } from 'vuex'

export default defineComponent({
  components: {
    FBXModel,
    TresCanvas,
    OrbitControls
  },
  computed: {
    ...mapGetters(['hairStylePath'])
  },
  watch: {
    hairStylePath(newHairStyle, oldHairStyle) {
      console.log(`Hair style changed from ${oldHairStyle} to ${newHairStyle}`)
      //requires re-rendering components
    }
  },
  setup() {
    const modelPath: string = avatarFileLocation
    const store = useStore()
    const hairStyle = ref(store.state.hairStyle)
    const hairPath: string = `${hairFileLocation}${hairStyle.value}.fbx`
    const gl = {
      clearColor: '#096C75',
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    }
    console.log(modelPath)
    console.log(hairPath)

    return {
      gl,
      modelPath,
      hairPath,
      FBXModel,
      TresCanvas,
      OrbitControls
    }
  }
})
</script>

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
