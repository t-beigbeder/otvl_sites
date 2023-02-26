<template>

      <div class="page-content p-2 w-full">
        <div class="py-2 max-w-5xl mx-auto">
          <h2>Une erreur d'origine technique est survenue.</h2>
          <p>Cette erreur sera analysée et corrigée au besoin, merci de votre compréhension.</p>
        </div>

      </div>

</template>

<script>
import { PageMixin } from 'otvl-web-lib'

export default {
  mixins: [PageMixin],

  name: 'Err5xx',

  data: function () {
    return {
      'localTitle': 'Erreur technique'
    }
  }
}
</script>
