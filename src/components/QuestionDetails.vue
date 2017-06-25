<template>
	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-primary">
			  <div class="panel-heading">{{details.title}}</div>
			  <div class="panel-body" v-html="details.body">
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'QuestionDetails',
	props: [
		'details',
	],
	data() {
		return {
		}
	}
}
</script>