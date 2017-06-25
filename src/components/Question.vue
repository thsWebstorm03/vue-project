<template>
	<div style="text-align: left;">
		<home-button></home-button>
		<hr />
		<question-details :details="questionDetails"></question-details>
		<hr />
		<question-answers :answers="questionAnswers"></question-answers>
	</div>
</template>

<script>
import QuestionDetails from './QuestionDetails';
import QuestionAnswers from './QuestionAnswers';
import HomeButton from './HomeButton';

export default {
	name: 'question',
	data() {
		return {
			questionDetails: {},
			questionAnswers: {},
		}
	},
	components: {
		QuestionDetails,
		QuestionAnswers,
		HomeButton,
	},
	created() {
		this.fetchQuestionDetail();
		this.fetchQuestionAnswers();
	},
	methods: {
		fetchQuestionDetail() {
			let questionId = this.$route.params.id;
			let API_KEY = this.$store.state.API_KEY;
			let API_URL = this.$store.state.API_URL;

			fetch(`${API_URL}/questions/${questionId}?${API_KEY}site=stackoverflow&filter=withbody`, {
				method: 'GET',
			}).then((resp) => {
				return resp.json();
			}).then((obj) => {
				this.questionDetails = obj.items[0]
			})
		},
		fetchQuestionAnswers() {
			/*https://api.stackexchange.com/2.1/questions/44739229/answers?key=YPhXg2u40MGLTCDFBO74wA((&order=desc&sort=activity&site=stackoverflow&filter=withbody*/
			let questionId = this.$route.params.id;
			let API_KEY = this.$store.state.API_KEY;
			let API_URL = this.$store.state.API_URL;

			fetch(`${API_URL}/questions/${questionId}/answers?${API_KEY}site=stackoverflow&filter=withbody`, {
				method: 'GET',
			}).then((resp) => {
				return resp.json();
			}).then((obj) => {
				this.questionAnswers = obj.items
			})
		}
	}
}
</script>