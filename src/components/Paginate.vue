<template>
	<div>
		<questions :questions="questions"></questions>
		<hr />
		<div class="row">
	      <div class="col-md-6">

	        <div class="btn-group pull-left">
	          <router-link :to="((parseInt(pageNumber) - 1) > 1) ? '/page/' + (parseInt(pageNumber) - 1) : '/'" v-if="hasPrevious">
	                <button :href="'/page/' + (parseInt(pageNumber) - 1)" class="btn btn-md btn-danger" style="margin-right:10px;">Previous</button>
	          </router-link>
	          
	          <router-link :to="'/page/' + (parseInt(pageNumber) + 1)">
	                <button :href="'/page/' + (parseInt(pageNumber) + 1)" v-on:click="fetchQuestions" class="btn btn-md btn-success">Next</button>
	          </router-link>
	        </div>
	      </div>
	    </div>
	</div>
</template>

<script>

import Questions from './Questions';

export default {
	name: 'paginate',
	props: [
		'pageFunc',
	],
	components: {
		Questions,
	},
    computed: {
		pageNumber () {
			return (!isNaN(this.$route.params.id)) ? this.$route.params.id : 1;
		},
		hasPrevious () {
			return (this.$route.params.id > 0) ? true : false;
		},
	},
	data () {
		return {
			questions: {}
		}
	},
	methods: {
		fetchQuestions() {
			let API_KEY = this.$store.state.API_KEY;
			let API_URL = this.$store.state.API_URL;

			fetch(`${API_URL}/questions?${API_KEY}page=${parseInt(this.pageNumber) + 1}&pagesize=10&order=desc&sort=activity&tagged=vue.js&site=stackoverflow`, {
			method: 'GET',
			}).then((resp) => {
				return resp.json();
			}).then((obj) => {
				this.questions = obj.items;
			});
		}
	}
}
</script>