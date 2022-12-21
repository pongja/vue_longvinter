import { createApp } from 'vue'
import routes from '~/routes'
import App from '~/App.vue'


createApp(App).use(routes).mount('#app')
