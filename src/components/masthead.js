import Vue from 'vue';

const Masthead = Vue.component('masthead', {
	template: `<header class="masthead">
	<div class="masthead__inner">
		<h2 class="masthead__title">Design System</h2>
		<section class="masthead__menu">
	  		<router-link class="masthead__link" to="/grid">Grid</router-link>
	  		<router-link class="masthead__link" to="/typography">Typography</router-link>
	  		<router-link class="masthead__link" to="/colours">Colours</router-link>
	  		<router-link class="masthead__link" to="/links-buttons">Links &amp; Buttons</router-link>
	  		<router-link class="masthead__link" to="/forms">Forms &amp; Tables</router-link>
<!-- 	  		<router-link class="masthead__link" to="/tables">Tables</router-link>
	  		<router-link class="masthead__link" to="/errors">Errors</router-link>
	  		<router-link class="masthead__link" to="/images">Images</router-link> -->
	  	</section>
	</div>
	</header>`
});

export default Masthead;