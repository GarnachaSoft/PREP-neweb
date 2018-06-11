<template>
	<div>
		<div v-if="photo">
			<div class="row">
				<div class="col-md-3">
					<button class="btn btn-success btn-block" 
					@click="approve(dataPhoto.photo.templateId, likes)">Aprobar</button>
				</div>
				<div class="col-md-6">
					<div v-if="imageSrc"><img id="algo" class="img-fluid" :src="imageSrc"></div>
					<div v-else><p>Cargando imagen</p></div>
				</div>
				<div class="col-md-3">
					<button class="btn btn-danger btn-block" @click="dismiss(dataPhoto.photo.templateId, unlikes)">Rechazar</button>
				</div>
			</div>
		</div>
		<span v-text="likes"></span>
	</div>
</template>

<script>
import { db, st } from '@/services/firebase'

export default {
	mounted () {
		const res = db.ref('/templates')
		res.orderByChild('status').equalTo(1).limitToFirst(10).on('value', snapshot => {
			const templates = snapshot.val()
			const authuid = 'asdasd'
			const templatesWOLikes = Object.values(templates).filter((t) => !t.likes.includes(authuid))
			this.templatesWOLikes = templatesWOLikes
			this.render(templatesWOLikes[this.currentTemplate])
		})

		res.orderByChild('status').equalTo(1).limitToFirst(1).on('value', snapshot => {
			if (snapshot.val() === null) {
				this.status = null
				this.likes = null
				this.photo = null
				this.imageSrc = null
			}
		})
	},
	data () {
		return {
			status: null,
			likes: null,
			unlikes: null,
			photo: null,
			imageSrc: null,
			templatesWOLikes: null,
			currentTemplate: 0
		}
	},
	computed: {
		dataPhoto () {
			return {
				photo: this.photo
			}
		}
	},
	methods: {
		approve (templateId, likes) {
			this.likes = likes + 1
			if (this.likes >= 3) {
				this.status = 2
			} else {
				this.status = 1
			}
			db.ref('/templates/' + templateId).update({
				likes: this.likes,
				status: this.status
			}).then(() => {
				this.render(this.templatesWOLikes[++this.currentTemplate])
			})
		},
		dismiss (templateId, unlikes) {
			this.unlikes = unlikes + 1
			if (this.unlikes >= 3) {
				this.status = 3
			} else {
				this.status = 1
			}
			db.ref('/templates/' + templateId).update({
				unlikes: this.unlikes,
				status: this.status
			}).then((result) => {
				console.log()
			})
		},
		render (template) {
			console.log(template.image)
			const result = template
			const sref = st.ref()
			const imgref = sref.child('images')
			this.photo = result
			const image = imgref.child(this.photo.image)
			this.likes = this.photo.likes
			this.status = this.status

			image.getDownloadURL().then((url) => {
				this.imageSrc = url
			}).catch((error) => {
				switch (error.code) {
				case 'storage/object_not_found':
					console.log('file doesnt exist')
					break
				case 'storage/unauthorized':
					console.log('not permissions')
					break
				}
			})
		}
	}
}
</script>
