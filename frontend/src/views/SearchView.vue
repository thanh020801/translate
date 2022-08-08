<template>
	<!-- <Menu /> -->
	<div class="driver"></div>
	<Search />
	
</template>
<script>
	import Menu from '@/components/menu.component.vue'
	import Search from '@/components/search.component.vue'
	export default{

		components:{
			Menu,
			Search,
		}
	}
</script>
<style type="text/css" scoped>
	.driver{
		width: 100%;
		height: 20px;
	}
</style>