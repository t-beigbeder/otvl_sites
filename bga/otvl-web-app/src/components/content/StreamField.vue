<template>

  <span
    v-if="type == 'html'"
    v-html="content">
  </span>

  <p
    v-else-if="type == 'sf-eol'"
  >
  </p>

  <template
    v-else-if="type == 'sf-img'"
  >
    <img
      :src="src"
      :alt=alt
      :title=title
      :class=class_
    />
    <p v-if="credit"><i><a :href=credit.href>{{ credit.text }}</a></i></p>
    <div v-if="class_ == 'v-img-header'" class="md:pt-8"/>
  </template>

  <div
    v-else-if="type == 'sf-photoset'"
  >
    <PhotoSet :meta="meta" :assetsPath="assetsPath" :class_="class_"/>
  </div>

  <template v-else-if="type == 'sf-page-dates'">
    <div
      v-if="meta.creation_date || meta.publication_date || meta.last_update_date"
      class="mt-6"
    />
    <span
      v-if="meta.creation_date"
      class="block text-sm"
    >
      Créée le {{ $utils.intlDate(meta.creation_date) }}
    </span>
    <span
      v-if="meta.publication_date"
      class="block text-sm"
    >
      Publiée le {{ $utils.intlDate(meta.publication_date) }}
    </span>
    <span
      v-if="meta.last_update_date"
      class="block text-sm"
    >
      Mise à jour le {{ $utils.intlDate(meta.last_update_date) }}
    </span>
  </template>

  <div
     v-else-if="type == 'sf-cards'"
     class="v-sf-cards-container"
   >
    <template
      v-for="card in elements"
      :key="card.name"
    >
    <div
      class="v-sf-card-container"
    >
      <div
        class="v-sf-card"
      >
        <h6>{{ card.title }}</h6>
        <div class="v-sf-card-content" v-html="card.content"/>
      </div>
    </div>
    </template>
  </div>

  <pre
    v-else-if="type == 'sf-fiche-technique'"
    class="v-sf-fiche-technique"
  >{{ content }}</pre>

  <span v-else>type unknown: {{ type }}</span>

</template>

<script>
import { ContentMixin } from 'otvl-web-lib'
import PhotoSet from "@/components/content/PhotoSet.vue";

export default {
  components: {PhotoSet},
  mixins: [ContentMixin],

  name: 'StreamField',

  props: {
    src: {
      type: String,
      required: false
    },

    alt: {
      type: String,
      required: false
    },

    title: {
      type: String,
      required: false
    },

    class_: {
      type: String,
      required: false
    },

    credit: {
      type: String,
      required: false
    },

    elements: {
      type: Array,
      required: false
    },

    row_class: {
      type: String,
      required: false
    },

    assetsPath: {
      type: String,
      required: false
    }
  }

}
</script>
