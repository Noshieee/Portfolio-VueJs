import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'
import VueCarousel from 'vue-carousel'
 

const app = createApp( App )
app.use(VueCarousel)
app.use( VueSplide )
app.mount( '#app' )
