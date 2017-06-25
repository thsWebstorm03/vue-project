<template>
	<div class="row">
		<div class="col-md-12">
			<h1>Answers</h1>
		</div>
		<div class="col-md-12">
			<div :class="(answer.is_accepted ? 'panel-success': '')" class="panel panel-default" v-for="answer in answers">
				<div class="panel-heading">
					<img :src="answer.owner.profile_image" class="profile-image">
					<router-link :href="answer.owner.link" :to="answer.owner.link" target="_blank" class="">
						@{{answer.owner.display_name}}
					</router-link>
					<div v-if="answer.is_accepted" class="check pull-right">&#10004;</div>
				</div>
				<div class="panel-body" v-html="answer.body">
				</div>
				<div class="panel-footer">
					<router-link :href="'https://stackoverflow.com/a/' + answer.answer_id + '/'" :to="'https://stackoverflow.com/a/' + answer.answer_id + '/'" target="_blank" class="btn btn-md btn-primary">
						Go to answer
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'QuestionAnswers',
	props: [
		'answers',
	],
}
</script>

<style scoped>
	.owner-title {
		color:#fff;
	}
	.profile-image {
		width: 32px;
		height: 32px;
	}
	.check {
		font-size: 24px;
	}
</style>