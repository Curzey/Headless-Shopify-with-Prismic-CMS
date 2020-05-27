import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'headless-curzey.myshopify.com',
  storefrontAccessToken: process.env.VUE_APP_STOREFRONT_TOKEN
});

export default client
