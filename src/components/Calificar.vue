<template>
	<div class="wrap">
		<section>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2>Fotografías sin calificar</h2>
					</div>
					<div class="col-md-12">
						<Photo></Photo>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Photo from '@/components/Photo'
	export default {
		components: { Photo }
	}
</script>