<template>
	<view class="content">
		<view class="new">
			<!-- 通话记录 -->
			<view class="call-records   three-title">
				<image src="../../static/img/jiaHao.png" class="png1"></image>
				<text>选择通话记录</text>
			</view>
			<view class="shu"></view>
			
			<!-- 手动输入 -->
			<view class="call-records   three-title">
				<image src="../../static/img/jiaHao.png" class="png1"></image>
				<text class="">手动输入</text>
			</view>
		</view>
		
		<view class="bottom">
			<text class="Default-color">最多可选择20条举报电话</text>
			 <view class="btn1">
				 <uni-section >
			       <!-- <button class="btn1 theme-colors"><text class="confirm">确定</text></button> -->
				  <button class="btn1 theme-colors" @click="dialogToggle('success')"><text
				  	class="confirm">确定</text></button>
				 </uni-section>
			 </view>
			 <view>
			 	<uni-popup ref="alertDialog" type="dialog">
			 		<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="输入成功!" @confirm="dialogConfirm"
			 			@close="dialogClose"></uni-popup-dialog>
			 	</uni-popup>
			 </view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				type: 'center'
			}
		},
		onReady() {},
		methods: {
		
			dialogToggle(type) {
				this.msgType = type
				this.$refs.alertDialog.open()
			}
			
		}
	}
</script>

<style>
	@import url('@/static/total.css');
	body{
		background-color: #F1F1F1;
	}
	.content{
		width: 100%;
		height: 100%;
	}
	.new{
			width: 95%;
			height: 10vh;
			background-color: white;
			margin: 4vh auto;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
		}
	.shu{
		height: 50%;
		width: 1px;
		background-color:#9DA2AD;
	}
	.call-records{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.png1{
		width: 6vw;
		height: 6vw;
	}
	.bottom{
		display: flex;
		flex-direction: column;
		align-items: center;
		/* position: fixed;
		top:50vh */
		margin: 5vh auto;
	}
	.btn1{
		width: 95%;
		height: 7vh;
		border-radius: 12px; 
		margin:auto;
		margin-top: 1vh;
	}
	.confirm{
		color: white;
		line-height: 7vh;
	}
</style>