<template>
	<view class="body">
		<view class="popup-content cu-modal" :class="modalName=='Modal'?'show':''">
			<image class="popup-top" src="../../static/img/popup-top.png"></image>
			<view class="popup-title">温馨提示</view>
			<view class="popup-text">套着色情的外表，吸引大批人为之着迷。市面上这样的骗局还在流行，利用人们的好奇点击网站链接，自动跳转支付界面，捐款而跑。为避免此类诈骗事件发生，请勿浏览色情网站！</view>
			<button class="popup-bth" @click="know()">
				<text>了解</text>
			</button>
		</view>
		<h1 class="mod-title">
			<span class="icon-zfb"></span>
			<span class="text">支付宝扫码支付</span>
		</h1>
		<view class="mod-ct">
			<view class="order"></view>
			<view class="amount">￥5.00</view>
			<view class="qr-image">
				<image class="setimage" :src="isHack"></image>
			</view>
			<view class="open_app">
				<button class="bth-open" @tap="warning" data-target="Modal">打开支付宝APP继续付款</button>
				<br>
				<br>
				<text class="bth-text">我已付款，返回查看订单</text>
			</view>
			<view class="tip">
				<image class="sweep"></image>
				<view class="tip-text">
					<text>请使用支付宝扫一扫</text>
					<br>
					<text>扫描二维码完成支付</text>
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
				 isHack:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGbAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKyElEQVR4nO3dS27rSBYAUbtR+99y9bCARlHoJPIXeueMbZGS5QAHFzd///777x+Agv+cvgGA/5dgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWT8NfoLv7+/K+5jhadVX09vYfTn91xitQtvaYPVa+BGvwATXyr0h3vxaXjCAjIEC8gQLCBDsIAMwQIyBAvIECwgY3gO68nB8w1HB08m3uqpmZcveAsvbHjXs4abNsxbjQr9h37gCQvIECwgQ7CADMECMgQLyBAsIEOwgIxpc1hPJo5gnBok+XDdWeM8o2/txYquURPXLc16qYmTSqO/MvoWVg9VTdT6D/WEBWQIFpAhWECGYAEZggVkCBaQIVhAxvI5rAsdHOd5Elq3NPHSo5cIre6aKDTStYEnLCBDsIAMwQIyBAvIECwgQ7CADMECMv7EOayJy6dmXWLi5NGsJVNf4MKtYV/8ae/hCQvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjKWD46G1oxN3JR2cFve6Ett2B34ZPWlN3z3vmC7XuhWfzxhASGCBWQIFpAhWECGYAEZggVkCBaQMW0OK7SZbHR2ZsMeuA23NPESs25p1IWf0qiDtxT6D/3AExaQIVhAhmABGYIFZAgWkCFYQIZgARm/rW04t1m90WnDGa4X7sPaMPQ06sKhpz/zP9cTFpAhWECGYAEZggVkCBaQIVhAhmABGcvnsFavYfrg1M6jD5d4suHT+GIXjoYdHKALfRovbtUTFpAhWECGYAEZggVkCBaQIVhAhmABGcvPJZw4DLX6EhOnRS6cqZnl4GjYwU9jw7uedYmDC8428IQFZAgWkCFYQIZgARmCBWQIFpAhWEDGtH1YGxYJXThvdWo07IODW8BW+4K38MLqEbAXk48vXmoWT1hAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAxPDg6a4ztwinNiS4c9js4dhsar51l4qc0y8HDeid+2p6wgAzBAjIEC8gQLCBDsIAMwQIyBAvIGD5IddY0x8Tpjw27A5+sHueZODtz8ADUJxcOys269MS3sPprPHEicgNPWECGYAEZggVkCBaQIVhAhmABGYIFZCzfh3VwrdKog3NYE2dnVi+TevE6t33HXvzKwWVSq7Wm3jxhARmCBWQIFpAhWECGYAEZggVkCBaQ8Q1zWKM2DJ6MCp3Ed3CAbsOmp9U2jIa9uPSpW3rBExaQIVhAhmABGYIFZAgWkCFYQIZgARnDc1iPL3RuNONJaFfRxE/p1KDchaNhL3zBpzHRhYNvnrCADMECMgQLyBAsIEOwgAzBAjIEC8iYNof1eIH7DnrbsOXn1OGAL25plg23dOG02ujrh97Ch0sc/Bp7wgIyBAvIECwgQ7CADMECMgQLyBAsIEOwgIzlg6MTXbgjcJYLhwAnWn0U6IYtehfOM29w4Um3nrCADMECMgQLyBAsIEOwgAzBAjIEC8gYnsNaPVOzwcHJo1GhfW8bhp4unFTa4ML/rA0rMJ94wgIyBAvIECwgQ7CADMECMgQLyBAsIOOv0zfwvzZMHh08v3N0gGXDYEto3mr09V+YNQI2cWHZ6CU2TKsdHHzzhAVkCBaQIVhAhmABGYIFZAgWkCFYQMa0fVhf4MUAy6yZlwuHoS50cA3TqA3zWRuc+np/4AkLyBAsIEOwgAzBAjIEC8gQLCBDsICMafuwZo1avBh6mnWJF7Mzq2dkJt7SwU1PT0Y/vQ0TSQcH6E5tATv4qb54C56wgAzBAjIEC8gQLCBDsIAMwQIyBAvIGJ7DunBFzoXH2622YUXXqAsnjDa4cO/VhdvB7MMC/kSCBWQIFpAhWECGYAEZggVkCBaQIVhAxrQFfk82zDGunoi78CTLD07d7Ya5xINTmqGTbg9uWNywDNITFpAhWECGYAEZggVkCBaQIVhAhmABGb8bBkz+1ak9c3OFDrP8AhcufZx1PO2dDh6y+8QTFpAhWECGYAEZggVkCBaQIVhAhmABGcfmsJ58uJ9T0x8HV3e9eMutSZ9/dXD859R81gurb/XDS82aPrMPC/hmggVkCBaQIVhAhmABGYIFZAgWkDE8hzV8gf5Y0AuhPVmrZ20+/MqTg2M+qy898bzCUQcvPZEnLCBDsIAMwQIyBAvIECwgQ7CADMECMqbNYR08quzJwSGmUaGVWxtWdM0aYvqOrWEXHnF48J/aExaQIVhAhmABGYIFZAgWkCFYQIZgARnL57CebJguuXAE7AvWKj3ZcLzdxFt6EvrOXGjioNwTT1hAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAxPDi6em3Yi6VrXzxZ9yT0ll84OIR84czq6u/MwVs1OAp8M8ECMgQLyBAsIEOwgAzBAjIEC8j4a/QXDo5gHNx+N3pLs37+xa2eOl9zw2jY6k/7JzXrd/ADP/gpecICMgQLyBAsIEOwgAzBAjIEC8gQLCBjeA7r4NDTrOmPC6dLRp0atvo5unxq4h9o1kttGD8cvfTBr7d9WAD/ECwgQ7CADMECMgQLyBAsIEOwgIxp5xIe3JN1cCDlwk9j1IXjPE8OLjKbZcMA3YWDcrNe/8cTFhAiWECGYAEZggVkCBaQIVhAhmABGdPOJRz9+aeRjYnTIhtWd33xqqwNi8xmCU2rfXDhsZtPDq5j84QFZAgWkCFYQIZgARmCBWQIFpAhWEDG8D6s1T6MeKwePDl4Ztzq1/nwUqNu+8L8XLnp6YXVO9RefJcu/M54wgIyBAvIECwgQ7CADMECMgQLyBAsIEOwgIzhBX5PDu70Wj1Q+mKW9cLlarNuacNpphcevhty8K1tOHzXExaQIVhAhmABGYIFZAgWkCFYQIZgARnDc1irV9O9sHrD2QurZ2EuHIZ64eB3adYfYuKtrv7Av+OcYE9YQIZgARmCBWQIFpAhWECGYAEZggVkXHeQ6gYbhphGbdhhdOGhmBv2Xo1eevVGp4nnBB+c6Tu4yMwTFpAhWECGYAEZggVkCBaQIVhAhmABGdP2YV1o9NDAgyYupTp1VOKLCaPRnz94XuEsH25p9R/ixadx6g/3gScsIEOwgAzBAjIEC8gQLCBDsIAMwQIyhuewnhwcbhqd8pg4znNwo9OT0TGcg0NPo0Zv9eDRik8+fEoX/iEuHLr0hAVkCBaQIVhAhmABGYIFZAgWkCFYQMa0OawnFx4COPr6Ezc9bTDxpLwpP//ChlGy1UNPLz6lC/8QTzbsvXriCQvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjKWD45e6OCw36xB04lHhF54aunBucRZY7ffMcs6ykGqAP8QLCBDsIAMwQIyBAvIECwgQ7CAjD9xDmt0dmbiSx1cTTdq9SLAFzYM0K2eJHrx1zm1t/KDif9BozxhARmCBWQIFpAhWECGYAEZggVkCBaQsXwO67uPGh19qdXzWR9eatTBWZtZl544YTTrEhv2YY2a+PXe8J3xhAVkCBaQIVhAhmABGYIFZAgWkCFYQMa0OawN65BOmThFsnpI6mf9OM/B+ayJLtyHdeqMyxdvbfRTmvid8YQFZAgWkCFYQIZgARmCBWQIFpAhWEDGb2t8BviTecICMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgIz/AgVjjj2ScX5MAAAAAElFTkSuQmCC',
			}
		},
		methods: {
			know(){
				uni.switchTab({
				       url: '/pages/index/index'
				})
			},
			warning(e){
				this.modalName = e.currentTarget.dataset.target
			}
		},
		
	}
</script>

<style>
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
	h1{
		font-family: arial,'hiragino sans gb','microsoft yahei','Simsun',sans-serif;
	}
	.body{
		background: #f7f7f7;
	    height: 100%;
		width: 100%;
	}
	.mod-title{
		height: 60px;
		line-height: 60px;
		text-align: center;
		border-bottom: 1px solid #ddd;
		background: #fff;
	}
	.mod-title .icon-zfb{
		display: inline-block;
		width: 41px;
		height: 38px;
		background: url('https://s3.bmp.ovh/imgs/2022/09/20/483b1de1eff1cfce.png') 0 -113px no-repeat;
		vertical-align: middle;
		margin-right: 7px;
	}
	.mod-title .text{
		font-size: 20px;
	}
	.mod-ct{
		margin: 0 auto;
		margin-top: 15px;
		background: #fff url('https://s3.bmp.ovh/imgs/2022/09/20/26ebcd57386140c4.png') top center repeat-x;
		text-align: center;
		color: #333;
		border: 1px solid #e5e5e5;
		border-top: none;
	}
	.mod-ct .order {
	    font-size: 20px;
	    padding-top: 30px;
	}
	.mod-ct .amount {
	    font-size: 48px;
	    margin-top: 20px;
	}
	.mod-ct .qr-image {
		margin-top: 30px;
	}
	.setimage{
		height: 240px;
		width: 240px;
	}
	.open_app{
		margin-top: 30px;
	}
	.bth-open{
		width: 200px;
		border: 1px solid #328ce5;
		padding: 10px 20px;
		color: #fff;
		background: #328ce5;
		font-size: 14px;
		cursor: pointer;
	}
	.bth-text{
		padding: 10px 20px;
		color: #328ce5;
		font-size: 14px;
		cursor: pointer;
	}
	.tip{
		margin-top: 20px;
		border-top: 1px dashed #e5e5e5;
		padding: 30px 0;
		position: relative;
	}
	.sweep{
		display: inline-block;
		    width: 56px;
		    height: 55px;
		    background: url('https://s3.bmp.ovh/imgs/2022/09/20/483b1de1eff1cfce.png') 0 0 no-repeat;
		    vertical-align: middle;
	}
	.tip-text{
		display: inline-block;
		vertical-align: middle;
		text-align: left;
		margin-left: 23px;
		font-size: 16px;
		line-height: 28px;
	}
</style>