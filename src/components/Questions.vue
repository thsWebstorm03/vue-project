<template>
	<div>
		<div class="row">
			<router-link :to="'/'">
				<h1>Vue.JS Questions</h1>
			</router-link>
		</div>
		<hr />
		<div class="row">
	      <div v-for="question in questions" class="col-md-12"><br />
	        <router-link :to="'/question/' + question.question_id">
	                <a :href="'/question/' + question.question_id" class="btn btn-primary btn-md pull-left">{{question.title}}</a>
	        </router-link>
	      </div>
	    </div>
	</div>
</template>

<script>

export default {
	name: 'questions',
	props: [
		'questions',
	],
	data () {
		return {
			questionList: {},
		}
	},
	created() {
		this.fetchQuestions();
	},
	computed: {
		pageNumber () {
			return (!isNaN(this.$route.params.id)) ? this.$route.params.id : 1;
		},
		hasPrevious () {
			return (this.$route.params.id > 0) ? true : false;
		},
	},
	methods: {
		fetchQuestions() {
			let API_KEY = this.$store.state.API_KEY;
			let API_URL = this.$store.state.API_URL;
			
			fetch(`${API_URL}/questions?${API_KEY}page=${parseInt(this.pageNumber)}&pagesize=10&order=desc&sort=activity&tagged=vue.js&site=stackoverflow`, {
			method: 'GET',
			}).then((resp) => {
				return resp.json();
			}).then((obj) => {
				this.questions = obj.items;
			});
		},
	}
}
</script>