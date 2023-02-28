<template>
  <div
    v-show="gallerySeen"
    @keydown.esc="galleryState(false)"
    @mousemove="changeCursor"
    :tabindex="tabindexValue"
    ref="photoGallery"
    class="lr-cursor focus:outline-none"
  >
    <div class="w-full flex justify-end v-photo-gallery-top">
      <a href="#" @click="galleryState(false)">
        <svg class="text-white bg-galleryGray bg-opacity-80 rounded-full inline w-8 mt-4 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>

    <div
      class="flex mx-1 my-1 focus:outline-none"
      :tabindex="tabindexValue"
      @click="clickImageEvent"
    >
      <div class="w-full h-photo-gallery flex flex-col justify-between">
        <div class="max-h-full"></div>

        <img
          v-if="projectPath && folder"
          class="bg-white mx-auto max-h-full"
          :src="assetsPath + 'images/projets/' + projectPath + '/' + folder + '/' + gallery[imageIndex]"
        >

        <div class="max-h-full"></div>
      </div>
    </div>

  </div>
</template>

<script>
import { nextTick } from 'vue'
import Hammer from 'hammerjs'

export default {

  name: 'PhotoGallery',

  props: {
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

  data: function () {
    return {
      isCursorLeft: null,
      tabindexValue: null
    }
  },

  mounted() {
    this.tabindexValue = this.$utils.isTouchEnabled() ? null : "0"
    var hammer = new Hammer(this.$refs.photoGallery)
    this.$utils.fineDbgLog({PhotoGallery: this, isTouchEnabled: this.$utils.isTouchEnabled(), hammer})
    hammer.on("swipeleft swiperight", ev => {
      this.$utils.fineDbgLog({hammer: ev});
      this.$emit('nextImage', this, ev.type === "swiperight")
    });
  },

  methods: {
    galleryState(isOn) {
      this.$utils.fineDbgLog({PhotoGallery: this, galleryState: isOn})
      this.$emit('galleryState', isOn)
    },

    clickImageEvent() {
      this.$emit('nextImage', this, this.isCursorLeft)
    },

    changeCursor(event) {
      var isLeft = (2 * event.clientX < this.$el.clientWidth)
      if (isLeft !== this.isCursorLeft) {
        this.isCursorLeft = isLeft
        //var lr = isLeft ? "left" : "right"
        //this.$el.nextSibling.style.cursor.URL = new URL(`/icons/${lr}.svg`, window.location.origin)
        //this.$utils.fineDbgLog({PhotoGallery: this, isLeft, document, 'origin': window.location.origin})
      }
    }
  },

  watch: {
    gallerySeen(newIsOn) {
      if (newIsOn) {
        nextTick(() => {
          this.$utils.fineDbgLog({PhotoGallery: this, 'watchGallerySeen': 1})
          this.$refs.photoGallery.focus()
        })
      }
    }
  }
}
</script>