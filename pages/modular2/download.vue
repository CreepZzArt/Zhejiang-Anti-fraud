<template>
	<view class="page">
		<view class="popup-content cu-modal" :class="modalName=='Modal'?'show':''">
			<image class="popup-top" src="../../static/img/popup-top.png"></image>
			<view class="popup-title">温馨提示</view>
			<view class="popup-text">引导或诱惑用户安装的APP很有可能是犯罪分子所制作的木马病毒，在面对中奖就要求用户下载APP时。我们要擦亮眼睛避免上当受骗。</view>
			<button class="popup-bth" @click="know()">
				<text>了解</text>
			</button>
		</view>
		<view class="header">
			<image :src="appLogo" mode=""></image>
			<view>
				<view>
					{{appName}}
				</view>
				<view>
					{{appDes}}
				</view>
			</view>
		</view>
		<view class="bg">

		</view>
		<view class="content">
		</view>
		<view class="btns">
			<view  @tap="down" data-target="Modal">
				<view class="icon">
					<image src="../../static/and.png" mode=""></image>
				</view>
				<view class="text">
					<view>Andriod版</view>
					<view>免费下载</view>
				</view>
			</view>
			<view @click="down('ios')">
				<view class="icon">
					<image src="../../static/ios.png" mode=""></image>
				</view>
				<view class="text">
					<view>ios版</view>
					<view>免费下载</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				appLogo: '/static/icon/logo.jpg', //app logo图片路径
				appName: '一刀999', //app名称
				appDes: '天天福利不停', //app简述
				weixin: false, //是否为微信内浏览器打开
				scheme: '' //scheme地址 如果已安装app直接打开，置空则不执行
			}
		},
		onLoad() {
			// 动态设置页面标题
			this.setTitle()
			// 判断该页面是否为微信内置浏览器内打开 true>显示浏览器内打开引导
			this.isWX()
			// 如果需要通过scheme直接打开app
			this.openApp()
			
		},
		methods: {
			know(){
				uni.switchTab({
				       url: '/pages/index/index'
				})
			},
			setTitle() {
				uni.setNavigationBarTitle({
					title: this.appName + '下载'
				});
			},
			isWX() {
				let ua = navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == "micromessenger") {
					this.weixin = true
				} else {
					this.weixin = false
				}
			},
			openApp() {
				if(this.scheme){
					window.location = this.scheme
				}
			},
			down(e) {
				this.modalName = e.currentTarget.dataset.target
			}
		}
	}
</script>

<style lang="less">
	@BgColor: #0079ff; //主题背景色
	/* ==================
	         模态窗口
	 ==================== */
	.cu-modal {
		position: fixed;
		top: 150px;
		right: 0;
		bottom: 0;
		left:0;
		z-index: 1110;
		opacity: 0;
		outline: 0;
		text-align: center;
		-ms-transform: scale(1.185);
		transform: scale(1.185);
		backface-visibility: hidden;
		perspective: 2000upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out 0s;
		pointer-events: none;
	}
	
	.cu-modal::before {
		content: "\200B";
		display: inline-block;
		height: 0%;
		vertical-align: middle;
	}
	
	.cu-modal.show {
		opacity: 1;
		transition-duration: 0.3s;
		-ms-transform: scale(1);
		transform: scale(1);
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}
	
	.cu-dialog {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		margin-left: auto;
		margin-right: auto;
		width: 680upx;
		max-width: 100%;
		background-color: #f8f8f8;
		border-radius: 10upx;
		overflow: hidden;
	}
	
	.cu-modal.bottom-modal::before {
		vertical-align: bottom;
	}
	
	.cu-modal.bottom-modal .cu-dialog {
		width: 100%;
		border-radius: 0;
	}
	
	.cu-modal.bottom-modal {
		margin-bottom: -1000upx;
	}
	
	.cu-modal.bottom-modal.show {
		margin-bottom: 0;
	}
	
	.cu-modal.drawer-modal {
		transform: scale(1);
		display: flex;
	}
	
	.cu-modal.drawer-modal .cu-dialog {
		height: 100%;
		min-width: 200upx;
		border-radius: 0;
		margin: initial;
		transition-duration: 0.3s;
	}
	
	.cu-modal.drawer-modal.justify-start .cu-dialog {
		transform: translateX(-100%);
	}
	
	.cu-modal.drawer-modal.justify-end .cu-dialog {
		transform: translateX(100%);
	}
	
	.cu-modal.drawer-modal.show .cu-dialog {
		transform: translateX(0%);
	}
	.cu-modal .cu-dialog>.cu-bar:first-child .action{
	  min-width: 100rpx;
	  margin-right: 0;
	  min-height: 100rpx;
	}
	.popup-bth text{
		color: #f1f1f1;
		text-align: center;
		padding: 10px;
		position: fixed;
		top:81%;
		right: 0;
		bottom: 0;
		left:0;
		z-index: 110;
	}
	.popup-bth{
		border-radius: 5px;
		text-align: center;
		padding: 10px;
		background-color: #0079ff;
		width: 200px;
		height: 30px;
		position: fixed;
		top:85%;
		right: 0;
		bottom: 0;
		left:0;
		z-index: 1150;
	}
	.popup-content .popup-text{
		padding: 10px;
		color: #1b1b1b;
		font-family: "Sub Head";
		font-weight: 600;
		font-size: 17px;
		position: fixed;
		top: 180px;
		right: 0;
		bottom: 0;
		left:0;
		z-index: 110;
	}
	.popup-title{
		color: #3568f5;
		font-family: "Sub Head";
		font-weight: 600;
		font-size: 25px;
		position: fixed;
		top: 150px;
		right: 0;
		bottom: 0;
		left:0;
		z-index: 1110;
		opacity: 1;
	}
	.popup-top{
		width: 100%;
		height: 100%;
	}
	.popup-content{
		width:260px;
		height:60%;
		background-color: #f1f1f1;
		margin-left: 15%;
		border-radius: 12px;
	}
	.page {
		padding: 50px;
		background-color: #f8f8f8;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-image: url(../../static/haha.jpg);
		.header {
			width: 100vw;
			height: 0upx;
			background-color: @BgColor;
			margin-top: 110rpx;
			display: flex;
			justify-content: center;

			image {
				width: 120upx;
				height: 120upx;
				margin-right: 30upx;
			}

			>view {
				height: 120upx;
				color: #fff;
				font-weight: 700;
				display: flex;
				flex-direction: column;
				justify-content: center;

				view:nth-child(1) {
					font-size:66upx;
				}

				view:nth-child(2) {
					font-size: 36upx;
				}
			}
		}

		.bg {
			width: 100vw;
			height: 210upx;
			background-size: 100%;
			background-position: center bottom;
			background-repeat: no-repeat;
			position: absolute;
			left: 0;
			top: 300upx;
		}

		.content {
			width: 750upx;
			height: 750upx;
			position: absolute;
			top: 50%;
			left: 0upx;
			transform: translateY(-54%);
			overflow: hidden;

			image {
				width: 750upx;
				height: 750upx;
			}
		}

		.btns {
			width: 100vw;
			height: 300upx;
			position: absolute;
			bottom: 3%;
			left: 0;

			>view {
				width: 380upx;
				height: 120upx;
				background-color: @BgColor;
				color: #FFFFFF;
				display: flex;
				margin: 0 auto;
				margin-bottom: 40upx;
				border-radius: 15upx;
				box-shadow: 0 10upx 24upx -10upx @BgColor;
				;

				.icon {
					width: 120upx;
					height: 120upx;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.text {
					display: flex;
					flex-direction: column;
					justify-content: center;

					view:nth-child(1) {
						font-size: 34upx;
					}

					view:nth-child(2) {
						font-size: 28upx;
					}
				}

				image {
					width: 50upx;
					height: 50upx;
				}
			}

			>view:nth-child(2) {
				margin-bottom: 0upx;
			}
		}

		.wx {
			position: fixed;
			left: 0;
			top: 0;
			background-color: rgba(0, 0, 0, .7);
			width: 100vw;
			height: 100vh;
			background-image: url(../../static/wx.png);
			background-size: 100%;
			background-position: center 100upx;
			background-repeat: no-repeat;
		}
	}
</style>
