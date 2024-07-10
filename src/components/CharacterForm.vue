<template>
    <n-layout>
      <n-layout-header>
        <h2>Customise Your Character</h2>
      </n-layout-header>
      <!-- Character Name -->
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          Character Name:
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
            <n-input v-model:value="name" type="text" placeholder="" />
        </n-layout-content>
      </n-layout>
      <!-- Hair Configs -->
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          Hair Style:
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
            <n-select v-model:value="hairStyle" :options="hairOptList" />
        </n-layout-content>
      </n-layout>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          Hair Colour:
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
            <n-color-picker v-model:value="model.hairColor" :show-alpha="false" />
        </n-layout-content>
      </n-layout>
      <!-- Clothing -->
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          Clothing:
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
            <n-select v-model:value="clothing" :options="clothingOptList" />
        </n-layout-content>
      </n-layout>
      <n-layout-footer>
        <n-button>Submit</n-button>
      </n-layout-footer>
    </n-layout>
    
</template>
  
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import { NInput, NLayoutHeader, NLayout, NLayoutSider, NLayoutContent, NLayoutFooter, NButton, NSelect, NColorPicker, type SelectOption } from 'naive-ui'
  import { hairOptions, clothingOptions } from '../data/character-form'
  
  export default defineComponent({
    components: {
      NInput,
      NLayoutHeader,
      NLayout, 
      NLayoutSider, 
      NLayoutContent,
      NLayoutFooter,
      NButton,
      NSelect,
      NColorPicker
    },
    setup () {
      const hairOptList:SelectOption[] = hairOptions;
      const clothingOptList:SelectOption[] = clothingOptions;
      const model = reactive({
        hairColor: '#18A058'
      })
      return {
        name: ref(null),
        hairStyle: ref(null),
        hairColour: ref(null),
        clothing: ref(null),
        hairOptList,
        clothingOptList,
        model
      }
    }
  })
</script>

<style scoped>
.n-layout-header {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}
.n-layout-footer {
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}
</style>