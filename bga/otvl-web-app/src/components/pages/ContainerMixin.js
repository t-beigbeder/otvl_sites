import { PageMixin } from 'otvl-web-lib'
import StreamField from '../content/StreamField.vue'

export default {

  mixins: [PageMixin],

  components: {
    StreamField
  },

  watch: {
    loadedStreamFields() {
      this.$utils.fineDbgLog({'ContainerMixin loadedStreamFields': this})
      for ( let lsf of this.loadedStreamFields ) {
        this.streamFields.push(lsf)
      }
    }
  },

  computed: {
    assetsPath() {
      this.$utils.fineDbgLog({'ContainerMixin assetsPath': this.$state.serverSide})
      if (this.$state.serverSide && 'assets_url' in this.$state.serverSide) {
        return this.$state.serverSide.assets_url
      } else {
        return "/assets/"
      }
    }
  }

}
