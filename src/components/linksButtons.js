import Vue from 'vue';

const LinksButtons = Vue.component('linksButtons', {
	template: `<section class="l-container">
		<div class="l-row row-vsb">
			<div class="l-col--sm-3">
				<button type="button" class="primary-cta">View collection</button>
				<button type="button" class="primary-cta primary-cta--inactive" disabled>View collection</button>
			</div>
			<div class="l-col--sm-3">
				<button type="button" class="primary-cta primary-cta--large">View collection</button>
				<button type="button" class="primary-cta primary-cta--large primary-cta--inactive" disabled>View collection</button>
			</div>
			<div class="l-col--sm-3">
				<button type="button" class="secondary-cta">View collection</button>
				<button type="button" class="secondary-cta secondary-cta--inactive" disabled>View collection</button>
			</div>
			<div class="l-col--sm-3">
				<a href="#" class="link">Link</a>
			</div>
			<div class="l-col--sm-3">
				<span class="input-container">
					<input class="input-container__input" type="text" placeholder="Input" />
				</span>
				<span class="input-container input-container--error">
					<input class="input-container__input" type="text" placeholder="Input" />
				</span>
			</div>
		</div>
	</section>`
});

export default LinksButtons;