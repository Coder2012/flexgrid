import Vue from 'vue';
import Carousel from './carousel';

const Grid = Vue.component('grid', {
	template: `<section>
	<section class="grid" data-section="grid">
    	<div class="l-container">
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12">
						<h3>Grid</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--md-2">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--md-2">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--md-2">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--md-2">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--md-2">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--md-2">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--md-6">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--sm-6 l-col--lg-3">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--sm-6 l-col--lg-3">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--sm-6 l-col--lg-3">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--sm-6 l-col--lg-3">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-4">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--sm-4">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--sm-4">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-12 l-col--sm-4">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    						<div class="l-col--xs-12 l-col--lg-3">
    							<div class="block block--inner"></div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-6">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
    					</div>
    				</div>
    			</div>
    			<div class="l-col--xs-6">
    				<div class="block">
    					<div class="l-row">
    						<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-2">
	    						<div class="block block--inner"></div>
	    					</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12">
    				<div class="block">
	    				<div class="l-row">
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
							<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    					<div class="l-col--xs-12 l-col--lg-1">
	    						<div class="block block--inner"></div>
	    					</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--lg-1">
    				<div class="block block--inner"></div>
    			</div>
    			<div class="l-col--xs-12 l-col--lg-11">
    				<div class="block block--inner"></div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--lg-2">
    				<div class="block block--inner"></div>
    			</div>
    			<div class="l-col--xs-12 l-col--lg-10">
    				<div class="block block--inner"></div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--lg-3">
    				<div class="block block--inner"></div>
    			</div>
    			<div class="l-col--xs-12 l-col--lg-9">
    				<div class="block block--inner"></div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--lg-4">
    				<div class="block block--inner"></div>
    			</div>
    			<div class="l-col--xs-12 l-col--lg-8">
    				<div class="block block--inner"></div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--lg-5">
    				<div class="block block--inner"></div>
    			</div>
    			<div class="l-col--xs-12 l-col--lg-7">
    				<div class="block block--inner"></div>
    			</div>
    		</div>
    		<div class="l-row row-vsb">
    			<div class="l-col--xs-12 l-col--lg-6">
    				<div class="block block--inner"></div>
    			</div>
    			<div class="l-col--xs-12 l-col--lg-6">
    				<div class="block block--inner"></div>
    			</div>
    		</div>
            <carousel src="http://via.placeholder.com/800x1200" id="c1" mobile="1" tablet="4" desktop="6"></carousel>
            <carousel src="http://via.placeholder.com/800x1200" id="c2" mobile="1" tablet="4" desktop="4"></carousel>
        </div>
        </section>
    </section>`

});

export default Grid;