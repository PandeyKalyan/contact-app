import Vue from 'vue'
import App from './App.vue'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

import { Input, Field, Button, Icon, Snackbar } from 'buefy'
import 'buefy/dist/buefy.css'

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_DB_URL
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(Input)
Vue.use(Field)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Snackbar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
