<template>
	<view>
		<view class="">
			<!-- 弹窗-->
			<view class="popup-content cu-modal" :class="modalName=='Modal'?'show':''">
				<image class="popup-top" src="../../static/img/popup-top.png"></image>
				<view class="popup-title">温馨提示</view>
				<view class="popup-text">这是一个经典的抽奖骗局，利用用户贪小便宜和侥幸心理。为用户制造一种中奖的错觉，通过高度模拟QQ登录界面和收货信息来获取用户的个人隐私。生活中更使得受害者手机中毒来窃取账号和个人隐私！切勿留恋“饼”，“骗”从其中来！</view>
				<button class="popup-bth" @click="know()">
					<text>了解</text>
				</button>
			</view>
			<!-- 登录模拟加载 -->
			<u-loading-page :loading="loading" loading-text="登录..."></u-loading-page>
			<view class="content">
				<div id="main">
						<text>快递信息填写</text>
						<div id="div2">
							<ul>
								<li>
									<text>收货人姓名：</text><input type="text" id="name">
									<text>收货人地址：</text><input type="text" id="ress">
								</li>
								<li>
									<text>收货人电话：</text><input type="text" id="phone">
									<text>收货人邮编：</text><input type="text" id="meil">
								</li>
							</ul>
						</div>
						<footer>
							<view class="button"@tap="warning" data-target="Modal">确定</view>
						</footer>
					</div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: true,
				show: false,
				modalName: null,
			}
			
		},
		methods: {
			hackin(){
				this.show = true
			},
			know(){
				uni.switchTab({
				       url: '/pages/index/index'
				})
			},
			warning(e){
				this.modalName = e.currentTarget.dataset.target
			}
		},
		onLoad() {
			setTimeout(() => {
				this.loading = false
				console.log(0)
			}, 2000);
		}
	};
</script>

<style>
	/* ==================
	         模态窗口
	 ==================== */
	.cu-modal {
		position: fixed;
		top: 100px;
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
		height:70%;
		background-color: #f1f1f1;
		margin-left: 15%;
		border-radius: 12px;
	}
	.losertext{
		font-size: 20px;
		font-weight: 600;
	}
	.loser{
		padding: 10px;
		height: 100px;
		width: 80vw;
		height: 35vh;
		background-color: white;
		border-radius: 30px;
	}
	.bto{
		margin-top: 10%;
		margin-left: 20%;
		width: 50vw;
		height: 50px;
		background-color: #00ceff;
		text-align: center;
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius: 10upx;
		color: white;
	}
	.button{
		margin-left: 82vw;
		margin-bottom: 5vw;
		width: 95vw;
		height: 50px;
		background-color: #00ceff;
		text-align: center;
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius: 10upx;
		color: white;
	}
	input {
	    box-sizing: border-box;
	      text-align:center;
	      font-size:1em;
	      height:1em;
	      border-radius:4px;
	      border:1px solid #c8cccf;
	      color:#6a6f77;
	      -web-kit-appearance:none;
	      -moz-appearance: none;
	      display:block;
	      outline:0;
	      padding:0 1em;
	      text-decoration:none;
	      width:100%;
	}
	body{color:white;}
		header{text-align: center;font-size:25px;margin-top: 10px;}
		#div2{border: 1px white solid;margin-top:40px;width: 185vw;margin-left:75vw;}
		footer{text-align: center;margin-top: 40px;}
		#div1 li,#div2 li,#div3 li{list-style: none;line-height: 5vh;}
		#name{width: 30vw;height: 40px;}
		#ress{width: 90vw;height: 40px;}
		#phone{width: 50vw;height: 40px;}
		#meil{width: 30vw;height: 40px;}
.content{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation-name: light;
	animation-duration: 3s;
}
text{
	color: #000000;
}
@keyframes light{
0%{
opacity: 0;
}
50%{
opacity: 0;
}
80%{
	opacity: 0;
}
100%{
opacity: 1;
}
}
</style>
