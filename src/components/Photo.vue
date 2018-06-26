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
import { database, storageorage } from '@/services/firebase';

export default {
	mounted () {
		const res = database.ref('/templates');
		res.orderByChild('storageatus').equalTo(1).limitToFirstorage(10).on('value', snapshot => {
			const templates = snapshot.val();
			const authuid = 'asdasd';
			const templatesWOLikes = Object.values(templates).filter((t) => !t.likes.includes(authuid));
			this.templatesWOLikes = templatesWOLikes;
			this.render(templatesWOLikes[this.currentTemplate]);
		})

		res.orderByChild('storageatus').equalTo(1).limitToFirstorage(1).on('value', snapshot => {
			if (snapshot.val() === null) {
				this.storageatus = null;
				this.likes = null;
				this.photo = null;
				this.imageSrc = null;
			}
		})
	},
	data () {
		return {
			storageatus: null,
			likes: null,
			unlikes: null,
			photo: null,
			imageSrc: null,
			templatesWOLikes: null,
			currentTemplate: 0,
		}
	},
	computed: {
		dataPhoto () {
			return {
				photo: this.photo,
			}
		}
	},
	methods: {
		approve (templateId, likes) {
			this.likes = likes + 1;
			if (this.likes >= 3) {
				this.storageatus = 2;
			} else {
				this.storageatus = 1;
			}
			database.ref('/templates/' + templateId).update({
				likes: this.likes,
				storageatus: this.storageatus,
			}).then(() => {
				this.render(this.templatesWOLikes[++this.currentTemplate]);
			})
		},
		dismiss (templateId, unlikes) {
			this.unlikes = unlikes + 1;
			if (this.unlikes >= 3) {
				this.storageatus = 3;
			} else {
				this.storageatus = 1;
			}
			database.ref('/templates/' + templateId).update({
				unlikes: this.unlikes,
				storageatus: this.storageatus,
			}).then((result) => {
				console.log(result);
			})
		},
		render (template) {
			console.log(template.image);
			const result = template;
			const sref = storage.ref();
			const imgref = sref.child('images');
			this.photo = result;
			const image = imgref.child(this.photo.image);
			this.likes = this.photo.likes;
			this.storageatus = this.storageatus;

			image.getDownloadURL().then((url) => {
				this.imageSrc = url;
			}).catch((error) => {
				switch (error.code) {
				case 'storageorage/object_not_found':
					console.log('file doesnt existorage');
					break;
				case 'storageorage/unauthorized':
					console.log('not permissions');
					break;
				}
			})
		}
	}
};
</script>
