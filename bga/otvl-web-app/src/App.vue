<template>

  <div class="app-style">

    <MenuBar
      :menu="menu"
      :touch-menu-seen="touchMenuSeen"
      @touch-menu-state="touchMenuStateEvent"
      class="block md:hidden"
    />

    <TouchMenu
      :menu="menu"
      :touch-menu-seen="touchMenuSeen"
      @click-outside-nav="clickOutsideNavEvent"
      @click-nav="clickNavEvent"
    />

    <div class="flex flex-wrap h-screen">
      <div class="hidden md:block w-1/6 flex-grow bg-menuGray">
        <DesktopMenu
          :menu="menu"
        />
      </div>
      <div class="w-full md:w-5/6 pt-16 md:pt-2 px-6 page-content">

        <router-view/>

      </div>

    </div>

  </div>

</template>

<script>
import { AppMixin, otvlWebLibId } from 'otvl-web-lib'
import MenuBar from './components/navig/MenuBar.vue'
import TouchMenu from './components/navig/TouchMenu.vue'
import menu from './app/menu.js'
import apputils from './app/apputils.js'
import DesktopMenu from './components/navig/DesktopMenu.vue'

export default {
  mixins: [AppMixin],

  components: {
    DesktopMenu,
    MenuBar,
    TouchMenu
  },

  name: 'App',

  data: function () {
    return {
      menu,
      touchMenuSeen: false
    }
  },

  created: function () {
    this.getStaticConfiguration()
    this.$utils.dbgLog({'App created': this, otvlWebLibId})
    this.$utils.fineDbgLog( { 'isTouchEnabled': this.$utils.isTouchEnabled() } )
    this.fetchConfiguration()
    apputils.scrollStatus = this.$state.scrollStatus
  },

  methods: {
    getStaticConfiguration: function() {
      var dApp = document.getElementById('app')
      var apiServerUrl = dApp.getAttribute('api-server-url')
      if (apiServerUrl !== 'default_api_server_url') {
        apputils.configuration.apiServerUrl = apiServerUrl
      }
      var webServerUrl = dApp.getAttribute('web-server-url')
      if (webServerUrl !== 'default_web_server_url') {
        apputils.configuration.webServerUrl = webServerUrl
      }
    },

    touchMenuStateEvent(state) {
      this.touchMenuSeen = state
      this.$utils.fineDbgLog({App: this, touchMenuSeen: this.touchMenuSeen})
    },

    clickOutsideNavEvent() {
      this.$utils.fineDbgLog({clickOutsideNavEvent: this})
      this.touchMenuStateEvent(false)
    },

    clickNavEvent() {
      this.$utils.fineDbgLog({clickNavEvent: this})
      this.touchMenuStateEvent(false)
    }
  }
}
</script>
