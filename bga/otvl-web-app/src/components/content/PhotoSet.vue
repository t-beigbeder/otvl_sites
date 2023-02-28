<template>
  <div class="v-photo-set-container">
    <div
      v-for="(photo, index) in meta.photos"
      :key="index"
    >
      <img
        :src="assetsPath + photo.path + '/' + photo.nom"
        :alt="photo.alt"
        :title="photo.title"
        :class="class_"
      >
    </div>
  </div>
</template>

<script>
import {ContentMixin} from "otvl-web-lib";

export default {
  mixins: [ContentMixin],
  name: "PhotoSet",
  props: {
    assetsPath: {
      type: String,
      required: false
    },
    class_: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>