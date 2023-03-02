
<template>
	<view class="content">
		<view class="popup-content">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			know(){
				uni.switchTab({
				       url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style>
	.content{
		background-color: #f1f1f1;
		width: 100vw;
		height: 100vh;
		max-width: 100vw;
		padding: 20px;
	}
	.popup-content{
		background-color: #0064bd;
		width: 100%;
		height: 100%;
	}
	.bth{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align:center;
		margin-top: 50px;
		height: 50px;
		width: 200px;
		border: 1px solid #328ce5;
		padding: 10px 20px;
		color: #fff;
		background-image: linear-gradient(to right top, #104eab, #0064bd, #0079ce, #008fdd, #12a4eb);
		font-size: 20px;
		cursor: pointer;
		animation-name: pulse;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	@keyframes pulse {
		25% {
			transform: scale(1.1);
		}
	
		75% {
			transform: scale(.9);
		}
	}
</style>
