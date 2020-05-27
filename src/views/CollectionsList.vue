<template>
  <div class="home">
    <Collections />
  </div>
</template>

<script>
// @ is an alias to /src
import Collections from '@/components/Collections.vue'

export default {
  name: 'CollectionsList',
  components: {
    Collections
  }
}
</script>
