<template>
	<web-view src="https://xw.qq.com/cmsid/20220531A05AWZ00"></web-view>
</template>

<script>
	export default {
	  data() {
	    return {
			options: "",
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
	
</style>