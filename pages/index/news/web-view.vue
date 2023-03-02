<template>
	<view>
		<view class="tab">asfa</view>
		<web-view :src="options.url"></web-view>
		
	</view>
	
</template>

<script>
	export default {
	  data() {
	    return {
			options: null,
	    }
	  },
	  onLoad(options) {
		  console.log(options)
		  this.options = options
	  },
	  methods: {
	  	
	  }
	}
</script>

<style>
	.tab{
		background-color: aqua;
		width: 100px;
		height: 100px;
	}
</style>