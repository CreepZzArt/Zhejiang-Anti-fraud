<template>
	<view class="content">
		<swiper class="swiper" 
		:autoplay="autoplay" 
		:duration="duration">
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/guide/1.png" mode="aspectFit"></image></view>
				</view>
				<view class="text"  @tap="launchFlag()">{{jumpover}}</view>
				<view class="jump-over"  @tap="launchFlag()"></view>

			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/guide/2.png" mode="aspectFit"></image></view>
					
				</view>
				<view class="text"  @tap="launchFlag()">{{jumpover}}</view>
				<view class="jump-over" @tap="launchFlag()"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/guide/3.png" mode="aspectFit" style="width: 800;height: 800;"></image></view>
					
				</view>
				<view class="text"  @tap="launchFlag()">{{jumpover}}</view>
				<view class="jump-over" @tap="launchFlag()"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/guide/4.png" mode="aspectFit"></image></view>
					
				</view>
				<view class="text1" @tap="launchFlag()">{{experience}}</view>
				<view class="experience" @tap="launchFlag()"></view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: false,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验'
			}
		},
		methods: {
			launchFlag: function(){
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				// uni.setStorage({
				// 		key: 'launchFlag',
				// 		data: true,
				// });
				uni.navigateTo({
					url: '/pages/login/login'
				});
				
			}
		}
	}
</script>
<style>
	page,
	.content{
		width: 100vw;
		height: 100vh;
		background-size: cover;
		padding: 0;
	}
	.swiper{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	.swiper-item {
		width: 100%;
		height: 100%;
		text-align: center;
		position: relative;
		display: flex;
		/* justify-content: center; */
		align-items:flex-end;
		flex-direction:column-reverse
	}
	.swiper-item-img{
		width: 100%;
		height: 110%;
		margin: 0 auto;
		background-size: cover;
    }
	.swiper-item-img image{
		background-size:cover;
		width: 100%;
		height: 110%;
	}
	.uniapp-img{
		height: 20%;
		background: #00ffff;
		display: flex;
		justify-content: center;
		align-items:center;
		overflow: hidden;
	}
	.uniapp-img image{
		width: 40%;
	}
	.experience{
		position: absolute;
		width:140px;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		/* border: 2px solid #454343; */
		background-color: #454343;
		opacity: 0.4;
		z-index: 999;
	}
	.text1{
		color: #FFFFFF;
		right: 45%;
		margin-right: -100upx;
		bottom: 10%;
		font-size: 50upx;
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		opacity: 1;
		z-index: 1000;
	}
	.text{
		color: #FFFFFF;
		right: 45upx;
		top: 125upx;
		font-size: 32upx;
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		opacity: 1;
		z-index: 1000;
	}
	.jump-over{
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		/* border: 2px solid #454343; */
		background-color: #454343;
		opacity: 0.4;
		z-index: 999;
	}
	.jump-over{
		width: 70px;
		right: 45upx;
		top: 125upx;
		font-size: 32upx;
	}
	.experience{
		right: 45%;
		margin-right: -100upx;
		bottom: 10%;
		font-size: 52upx;
	}
</style>
