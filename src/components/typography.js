import Vue from 'vue';
const Typography = Vue.component('typography', {
template: `<section class="l-container typography typography--active" data-section="typography">
	<h2 class="an">Typography</h2>
	<p class="an-content">Text is the main way that teams visualize content and complete their work, so we've developed a typographic landscape that uses system fonts for all standard typefaces in Atlassian products. This ensures that the UI is optimized to be highly legible, performs well and is frictionless as you move between Atlassian products and the rest of the system.</p>
	<div class="v-spacing">
		<p class="an-title">Hero</p>
		<h1 class="heading heading--xxl hero">ready for Summer?</h1>
	</div>
	<div class="v-spacing">
		<p class="an-title">Heading</p>
		<h1 class="heading heading--xl">Heading <br />with a second line</h1>
	</div>
	<div class="v-spacing">
		<p class="an-title">Quote</p>
		<h1 class="heading heading--l quote">My bestie and I have more in-jokes than Taylor and Selena</h1>
	</div>
	<div class="v-spacing">
		<p class="an-title">Heading</p>
		<h1 class="heading heading--l">Heading <br /> with a second line</h1>
	</div>
	<div class="v-spacing">
		<p class="an-title">Heading</p>
		<h1 class="heading heading--m">New in for SS18</h1>
	</div>
	<div class="v-spacing">
		<p class="an-title">Paragraph - Intro</p>
		<p class=" para para--l">Fusce congue risus nec nisl molestie eleifend cursus nec eros. Integer aliquet dictum urna, convallis pharetra dolor consequat nec. Sed euismod metus ut dolor porttitor pulvinar. Praesent eget posuere purus, vel pharetra urna.</p>
	</div>
	<div class="v-spacing">
		<p class="an-title">Paragraph - Body</p>
		<p class=" para">Fusce congue risus nec nisl molestie eleifend cursus nec eros. Integer aliquet dictum urna, convallis pharetra dolor consequat nec. Sed euismod metus ut dolor porttitor pulvinar. Praesent eget posuere purus, vel pharetra urna.</p>
	</div>
	<div class="v-spacing">
		<p class="an-title">Paragraph - Body</p>
		<p class=" para para--s">Fusce congue risus nec nisl molestie eleifend cursus nec eros. Integer aliquet dictum urna, convallis pharetra dolor consequat nec. Sed euismod metus ut dolor porttitor pulvinar. Praesent eget posuere purus, vel pharetra urna.</p>
	</div>
	<div class="v-spacing">
		<p class="an-title">Navigation</p>
		<nav class="v-spacing navigation">
			<ul class="navigation__items">
				<li class="navigation__item">lingerie</li>
				<li class="navigation__item">swimwear</li>
				<li class="navigation__item">active</li>
				<li class="navigation__item">outlet</li>
				<li class="navigation__item">advice</li>
				<li class="navigation__item">freya &amp; friends</li>
			</ul>
		</nav>
	</div>
	<div class="v-spacing">
		<p class="an-title">Navigation</p>
		<div class="breadcrumb">
			<p class="breadcrumb__title">Back to results</p>
			<ul class="breadcrumb__items">
				<li class="breadcrumb__item">Lingerie</li>
				<li class="breadcrumb__item">All Lingerie</li>
				<li class="breadcrumb__item">Bras</li>
				<li class="breadcrumb__item">Balcony Bras</li>
			</ul>
		</div>
	</div>
</section>`
	});
	export default Typography;