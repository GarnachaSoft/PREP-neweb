<template>
	<div>
		<Styles></Styles>
		<Header></Header>
		<router-view></router-view>
	</div>
</template>

<script>
import Styles from './components/Styles'
import Header from './components/Template/Header'

export default{
	components: {Header, Styles}
}
</script>