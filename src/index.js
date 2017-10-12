import Vue from 'vue';
import VueRouter from 'vue-router';

import Grid from './components/grid';
import Typography from './components/typography';
import Colours from './components/colours';
import LinksButtons from './components/linksButtons';
import Forms from './components/forms';
import Tables from './components/tables';
import Errors from './components/errors';
import Images from './components/images';

Vue.use(VueRouter);

const css = require('./scss/styles.scss');

const routes = [
	{ path: '/grid', component: Grid },
	{ path: '/typography', component: Typography },
	{ path: '/colours', component: Colours },
	{ path: '/links-buttons', component: LinksButtons},
	{ path: '/forms', component: Forms},
	{ path: '/tables', component: Tables},
	{ path: '/errors', component: Errors},
	{ path: '/images', component: Images}
]

const router = new VueRouter({
	routes
});

const app = new Vue({
	router
}).$mount('#app');
