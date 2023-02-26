<template>

  <div class="flex flex-wrap py-6">
    <div class="w-full md:w-3/5">
      <h5>{{ content.heading }}</h5>
      <StreamField
        v-for="(stream_field, index) in streamFields"
        v-bind="stream_field"
        :position="index"
        :key="index"
        :meta="meta"
        :brand="content.brand"
        :assetsPath="assetsPath"
      />
    </div>
  </div>
</template>

<script>
import ContainerMixin from './ContainerMixin.js'

export default {
  mixins: [ContainerMixin],

  name: 'Page'
}
</script>
