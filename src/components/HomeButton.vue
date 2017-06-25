<template>
	<div class="row">
		<div class="col-md-12">
		<router-link :to="'/'" class="btn btn-md btn-danger">
            Home
    	</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeButton',
	}
</script>