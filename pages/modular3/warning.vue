
<template>
	<view class="tixing">
		<image class="tupian" src="https://s3.bmp.ovh/imgs/2022/09/06/3308b47fd13ca27d.png"></image>
		<view class="card">
			<view class="jinggao">警告</view>
			<view class="jinggaoyu">
				犯罪分子通过用户的猎奇或好奇心引诱其上当受骗，在案例中用户看似只被骗取了少量的金额但应该网站访问量庞大每天的收入就非常的客观。用户被骗了钱往往只能通过举报网站来泄愤。但诈骗网站通过不停的更改域名就可以一直的存在与互联网之上。
				所以为了您的财产安全和家庭幸福请不要浏览危险网站。
			</view>
			<button class="bth" @click="know()">了解</button>
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
	.tixing{
		text-align:center;
		width: 100vw;
		max-width: 100vw;
		height: auto;
	}
	.tupian{
		height: 30vh;
	}

 .jinggao{
	 color: red;
	 font-size:80rpx; 
	 display: flex;
	 justify-content: center;
	 font-weight:700;
	 }
	 .jinggaoyu{
		 font-size: 20px;
	 }
	.card{
		border-radius: 20px 20px 0px 0px;
		padding: 10px;
		height: 70vh;
		width: auto;
		background-image: linear-gradient(to right top, #3c68ff, #4476fd, #5083fa, #5f8ff5, #6f9af0, #67a7f5, #65b3f7, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
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
