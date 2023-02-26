<template>

      <div class="page-content p-2 w-full">
        <div class="py-2 max-w-5xl mx-auto">
          <h2>La page demandée est introuvable.</h2>
          <p>Cette erreur sera corrigée, merci de votre compréhension.</p>
        </div>

      </div>

</template>

<script>
import { PageMixin } from 'otvl-web-lib'

export default {
  mixins: [PageMixin],

  name: 'Err404',

  data: function () {
    return {
      'localTitle': 'Page introuvable'
    }
  }
}
</script>
