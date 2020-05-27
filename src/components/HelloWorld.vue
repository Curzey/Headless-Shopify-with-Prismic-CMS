<template>
  <div class="hello">

    <section id="prismic-content">
      <prismic-rich-text v-if="fields.title" :field="fields.title" wrapper="h2"/>
      <prismic-rich-text v-if="fields.welcome_text" :field="fields.welcome_text" wrapper="p"/>
      <prismic-image v-if="fields.welcome_image" :field="fields.welcome_image" />
    </section>

    <section id="shopify-products">
      <prismic-rich-text v-if="fields.products_title" :field="fields.products_title" wrapper="h2"/>
      <article v-if="products.length > 1" v-for="product in products">
        {{ product.title }} <br>
      </article>
    </section>

  </div>
</template>

<script>
import client from '@/shopify/api.js';

export default {
  name: 'HelloWorld',

  data() {
    return {
      fields: {
        title: null,
        welcome_text: null,
        welcome_image: null,
        products_title: null
      },
      products: []
    }
  },

  methods: {
    async getContent() {
     const data = await this.$prismic.client.getSingle('homepage');
     this.fields.title = data.data.title;
     this.fields.welcome_text = data.data.welcome_text;
     this.fields.welcome_image = data.data.welcome_image;
     this.fields.products_title = data.data.products_title;
    },

    async getProducts() {
      await client.product.fetchAll().then((products) => {
        console.log(products);
        this.products = products;
      });
    }
  },

  async created() {
    await this.getContent();
    await this.getProducts();
  }
}
</script>

<style scoped lang="scss">
  img {
    max-width: 100px;
  }
</style>
