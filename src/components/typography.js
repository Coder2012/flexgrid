import Vue from 'vue';

const Typography = Vue.component('typography', {
	template: `<section class="main typography typography--active" data-section="typography">
	  		<nav class="brands-menu" data-brands-menu>
	  			<ul class="brands-menu__items">
	  				<li class="brands-menu__item" data-brands-item="freya"><a href="#" class="active">Freya</a></li>
	  				<li class="brands-menu__item" data-brands-item="wacoal"><a href="#">Wacoal</a></li>
	  				<li class="brands-menu__item" data-brands-item="elomi"><a href="#">Elomi</a></li>
	  				<li class="brands-menu__item" data-brands-item="fantsie"><a href="#">Fantasie</a></li>
	  				<li class="brands-menu__item" data-brands-item="btemptd"><a href="#">b.tempt'd</a></li>
	  				<li class="brands-menu__item" data-brands-item="goddess"><a href="#">Goddess</a></li>
	  			</ul>
	  		</nav>
			  <img class="logo" src="assets/logo.png" alt="Freya logo">
			  <p class="url">freyalingerie.com</p>
			  <p class="para breakpoint">Breakpoint: </p>

			  <div>
		    <h1 class="v-spacing heading heading--xxl"><span class="annotation">Hero Title</span>H1 heading hero</h1>   
		    <h1 class="v-spacing heading heading--xl"><span class="annotation">H1</span>H1 heading</h1>  
		    <h2 class="v-spacing heading heading--l"><span class="annotation">H2</span>H2 heading</h2>   
		    <h3 class="v-spacing heading heading--l"><span class="annotation">H3</span>H3 heading</h3>
		    <h4 class="v-spacing heading heading--m"><span class="annotation">H4</span>H4 heading</h4>
		    
		    <p class="v-spacing para para--l"><span class="annotation">para para--l</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		  tempor incididunt ut labore et dolore magna aliqua.</p>
		    <p class="v-spacing para"><span class="annotation">para</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		  tempor incididunt ut labore et dolore magna aliqua.</p>
		    <p class="v-spacing para para--s"><span class="annotation">para para--s</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		  tempor incididunt ut labore et dolore magna aliqua.</p>
		  </div>

		  <nav class="v-spacing navigation">
		    <span class="annotation">navigation</span>
		    <ul class="navigation__items">
		      <li class="navigation__item">lingerie</li>
		      <li class="navigation__item">swimwear</li>
		      <li class="navigation__item">active</li>
		      <li class="navigation__item">outlet</li>
		      <li class="navigation__item">advice</li>
		      <li class="navigation__item">freya &amp; friends</li>
		    </ul>
		  </nav>

		  <div class="v-spacing breadcrumb">
		    <p class="breadcrumb__title"><span class="annotation">para para--s</span>Back to results</p>
		    <ul class="breadcrumb__items">
		      <li class="breadcrumb__item">Lingerie</li>
		      <li class="breadcrumb__item">All Lingerie</li>
		      <li class="breadcrumb__item">Bras</li>
		      <li class="breadcrumb__item">Balcony Bras</li>
		    </ul>
		  </div>
		</section>`
});

export default Typography;