<template>

  <h6 class="mt-4">Projets</h6>
  <nav class="mt-4 flex flex-wrap justify-start space-x-2 md:space-x-4 lg:space-x-6">
    <AppLink
      v-for="(projects_category, index) in projectsCategories()"
      :key="index"
      :to="(projects_category.key === '__ALL__' ? '/projets' : '/projets?projects_category=' + projects_category.key)"
      :class="projects_category.key === projectsCategory ? 'v-projects-category-sel' : 'v-projects-category'"
    >
      {{ projects_category.label }}
    </AppLink>
  </nav>

  <div class="pt-6 px-12 v-projects-index-container">

    <AppLink
      v-for="project in categoryProjects()"
      :key="project.name"
      :to="`/projets/${project.name}`"
      class="v-projects-index-box"
    >
      <img :src="`${assetsPath}images/projets/${project.name}/0-LOGO/${project.name}.png`">
    </AppLink>

  </div>

</template>

<script>
import ContainerMixin from './ContainerMixin.js'
import { IndexMixin } from 'otvl-web-lib'
import AppLink from '../navig/AppLink.vue'

export default {

  mixins: [ ContainerMixin, IndexMixin ],

  name: 'XPage',

  components: {
    AppLink
  },

  data: function () {
    return {
      projectsCategory: '__ALL__'
    }
  },

  created() {
    this.$utils.fineDbgLog({'XPage created': this, 'this.$route': this.$route})
    this.$watch(
      () => this.$route.query,
      () => {
        this.$utils.fineDbgLog({
          'watch in XPage': 'this.$route.query',
          '$route.query': this.$route.query
        })
        this.projectsCategory = ('projects_category' in this.$route.query) ? this.$route.query.projects_category : '__ALL__'
      },
      { deep: true }
    )
  },

  methods: {
    projectsCategories() {
      return (
        this.$state.serverSide && 'projects_categories' in this.$state.serverSide ?
          this.$state.serverSide.projects_categories : []
      )
    },

    categoryProjects() {
      this.$utils.fineDbgLog({'categoryProjects': this})
      var pl = (this.$state.loadedIndex && 'index' in this.$state.loadedIndex) ?
        this.$state.loadedIndex.index : []

      pl = pl.filter(p => this.projectsCategory === '__ALL__' || ('categories' in p.meta && p.meta.categories.indexOf(this.projectsCategory) >= 0))
      pl.sort((p1, p2) => {
        const getPriorite = (p) => { return ('meta' in p && 'priorite' in p.meta) ? p.meta.priorite : '' }
        return (getPriorite(p1) < getPriorite(p2)) ? -1 : 1
      })
      return pl
    }

  }

}
</script>
