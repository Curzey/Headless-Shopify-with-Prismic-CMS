<template>
  <div class="collections">

    <section id="shopify-collections">
      <article v-if="collections.length > 1" v-for="collection in collections">
        {{ collection.title }} <br>
      </article>
    </section>

  </div>
</template>

<script>
import client from '@/shopify/api.js';

export default {
  name: 'Collections',

  data() {
    return {
      collections: []
    }
  },

  methods: {
    async getCollections() {
      await client.collection.fetchAllWithProducts().then((collections) => {
        this.collections = collections;
      });
    }
  },

  async created() {
    await this.getCollections();
  }
}
</script>

<style scoped lang="scss">

</style>
