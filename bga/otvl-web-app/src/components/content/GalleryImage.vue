<template>
  <img
    @click="clickImageEvent()"
    :class="class_"
    :src="assetsPath + 'images/projets/' + projectPath + '/' + folder + '/' + gallery[imageIndex]"
  >
</template>

<script>

export default {

  name: 'GalleryImage',

  props: {
    class_: {
      type: String
    },
    gallery: {
      type: Array,
      default: function () { return [] }
    },
    imageIndex: {
      type: Number
    },
    projectPath: {
      type: String
    },
    folder: {
      type: String
    },
    gallerySeen: {
      type: Boolean
    },
    assetsPath: {
      type: String
    }
  },

  methods: {
    clickImageEvent: function() {
      this.$utils.fineDbgLog({GalleryImage: this, 'clickImageEvent': ''})
      this.$emit('clickImage', this)
    }
  }
}
</script>
