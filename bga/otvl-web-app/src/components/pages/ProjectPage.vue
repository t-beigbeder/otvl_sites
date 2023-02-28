<template>

  <PhotoGallery
    :gallerySeen="gallerySeen"
    :assetsPath="assetsPath"
    :gallery="gallery"
    :projectPath="projectPath"
    :folder="folder"
    :imageIndex="imageIndex"
    @gallery-state="galleryStateEvent"
    @next-image="nextImageEvent"
    class="v-photo-gallery-main"
  />

  <div class="flex flex-wrap py-6">
    <div class="w-full md:w-3/5">
      <h6>{{ content.heading }}</h6>

      <StreamField
        v-for="(stream_field, index) in streamFields"
        v-bind="stream_field"
        :position="index"
        :key="index"
        :meta="meta"
        :brand="content.brand"
      />
    </div>

    <div class="w-full md:w-3/5">
      <div class="v-project-photos-container">
        <div
          v-for="(photo, index) in meta.photos"
          :key="index"
          class="aspect-w-1 aspect-h-1"
        >
          <GalleryImage
            @click-image="clickImageEvent"
            :class_="'object-cover cursor-pointer'"
            :gallery="meta.photos"
            :imageIndex="index"
            :projectPath="projectPath"
            :folder="'1-PHOTOS'"
            :assetsPath="assetsPath"
          />
        </div>
      </div>
    </div>

    <div class="w-full md:w-2/5">
      <div class="v-project-plans-container">
        <div
          v-for="(plan, index) in meta.plans"
          :key="index"
        >
          <GalleryImage
            @click-image="clickImageEvent"
            :class_="'cursor-pointer'"
            :gallery="meta.plans"
            :imageIndex="index"
            :projectPath="projectPath"
            :folder="'2-PLANS'"
            :assetsPath="assetsPath"
          />
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import ContainerMixin from './ContainerMixin.js'
import PhotoGallery from '../content/PhotoGallery.vue'
import GalleryImage from '../content/GalleryImage.vue'

export default {
  mixins: [ContainerMixin],

  name: 'ProjectPage',

  components: {
    PhotoGallery,
    GalleryImage
  },

  data: function () {
    return {
      gallerySeen: false,
      scrollSavedPosition: 0,
      gallery: [],
      folder: '',
      imageIndex: 0
    }
  },

  methods: {
    galleryStateEvent: function(state) {
      this.gallerySeen = state
      this.$utils.fineDbgLog({ProjectPage: this, gallerySeen: this.gallerySeen})
      if (!state) {
        setTimeout(() => {
          this.$utils.fineDbgLog({'galleryStateEvent changed setTimeout': this, 'window.scrollY': window.scrollY, 'scrollSavedPosition': this.scrollSavedPosition})
          window.scrollTo(0, this.scrollSavedPosition)
        }, 100)
      }
    },

    clickImageEvent: function(galleryImage) {
      this.scrollSavedPosition = window.scrollY
      this.gallery = galleryImage.gallery
      this.folder = galleryImage.folder
      this.imageIndex = galleryImage.imageIndex
      this.$utils.fineDbgLog({clickImageEvent: this, galleryImage})
      this.galleryStateEvent(true)
    },

    nextImageEvent: function(photoGallery, isLeft) {
      if( ! isLeft ) {
        if (this.imageIndex == this.gallery.length - 1) {
          this.imageIndex = 0
        } else {
          this.imageIndex++
        }
      } else {
        if (this.imageIndex == 0) {
          this.imageIndex = this.gallery.length - 1
        } else {
          this.imageIndex--
        }
      }
      this.$utils.fineDbgLog({nextImageEvent: this, photoGallery, isLeft})
    }

  },

  computed: {
    projectPath: function() {
      return ('location' in this.$route.params && this.$route.params.location.length? this.$route.params.location[0] : "")
    }
  }

}
</script>
