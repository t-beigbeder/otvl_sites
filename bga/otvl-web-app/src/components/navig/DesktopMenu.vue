<template>

  <div class="mx-2 lg:mx-6 flex-shrink">
    <AppLink
      to="/projets"
    >
      <img class="mx-auto" src="/bga.png">
    </AppLink>
  </div>
  <nav>

    <template
      v-for="item in this.menu" :key="item.label"
    >
      <AppLink
        :to="item.targetUrl"
        class="v-desktop-menu-item"
      >
        {{ item.label }}
      </AppLink>

      <AppLink
        v-for="subItem in item.subMenu" :key="subItem.label"
        :to="subItem.targetUrl"
        class="v-desktop-submenu-item"
      >
        {{ subItem.label }}
      </AppLink>
    </template>

  </nav>

</template>

<script>
import AppLink from './AppLink.vue'

export default {
  name: 'DesktopMenu',

  components: {
    AppLink
  },

  props: {
    menu: {
      type: Array
    }
  }
}
</script>
