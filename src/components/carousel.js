import Vue from 'vue';
import $ from 'jquery';
import slick from 'slick-carousel';

const Carousel = Vue.component('carousel', {
	template: `<section>
					<header>
						<div class="l-row row-vsb">
		    			<div class="l-col--xs-12">
								<h3>Grid Based Component</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		    			</div>
		    		</div>
					</header>
					<section :id="id" class="l-row">
            <div class="product product__first">
	            <div class="product__inner">
	                <img class="product__img" :src="src" alt="placeholder image">
	                <h3 class="product__title">title</h3>
	                <p class="product__subtitle">subtitle</p>
	                <p class="product__text">a paragraph of text</p>
	            </div>
            </div>
            <div class="product">
	            <div class="product__inner">
	                <img class="product__img" :src="src" alt="placeholder image">
	                <h3 class="product__title">title</h3>
	                <p class="product__subtitle">subtitle</p>
	                <p class="product__text">a paragraph of text</p>
	            </div>
            </div>
            <div class="product">
	            <div class="product__inner">
	                <img class="product__img" :src="src" alt="placeholder image">
	                <h3 class="product__title">title</h3>
	                <p class="product__subtitle">subtitle</p>
	                <p class="product__text">a paragraph of text</p>
	            </div>
            </div>
            <div class="product">
	            <div class="product__inner">
	                <img class="product__img" :src="src" alt="placeholder image">
	                <h3 class="product__title">title</h3>
	                <p class="product__subtitle">subtitle</p>
	                <p class="product__text">a paragraph of text</p>
	            </div>
            </div>
            <div class="product">
	            <div class="product__inner">
	                <img class="product__img" :src="src" alt="placeholder image">
	                <h3 class="product__title">title</h3>
	                <p class="product__subtitle">subtitle</p>
	                <p class="product__text">a paragraph of text</p>
	            </div>
            </div>
            <div class="product product__last">
	            <div class="product__inner">
	                <img class="product__img" :src="src" alt="placeholder image">
	                <h3 class="product__title">title</h3>
	                <p class="product__subtitle">subtitle</p>
	                <p class="product__text">a paragraph of text</p>
	            </div>
            </div>
        </section>
      </section>`,
  data () {
  	return {
  		img: 'http://via.placeholder.com/800x600'
  	}
  },
  props: ['id', 'src', 'mobile', 'tablet', 'desktop'],
	mounted () {
		let vm = this;

		console.log(vm.id);

		$(`#${vm.id}`).slick({
			arrows: false,
			autoplay: false,
			dots: true,
			slidesToShow: parseInt(vm.desktop),
			slidesToScroll: parseInt(vm.desktop),
			responsive: [{
				breakpoint: 768,
				settings: {
					dots: true,
					infinite: false,
					slidesToShow: parseInt(vm.mobile),
					slidesToScroll: parseInt(vm.mobile)
				}
			},
			{
				breakpoint: 1007,
				settings: {
					dots: true,
					infinite: false,
					slidesToShow: parseInt(vm.tablet),
					slidesToScroll: parseInt(vm.tablet)
				}
			}]
		});
	}
});

export default Carousel;