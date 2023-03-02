<template>
	<view>
		 <view class="describe">
	         <textarea placeholder="请详细描述举报对象的非法可疑行为" auto-height="true" class="input-text"></textarea>
			 <view class="btn3">
			 	<uni-section >
			      <button class="btn3 theme-colors" @click="dialogToggle('success')"><text class="confirm">确定</text></button>
		        </uni-section >
			</view>
		 
		 <view>
		 	<uni-popup ref="alertDialog" type="dialog">
		 		<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="提交成功!" @confirm="dialogConfirm"
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
		
	.describe{
		width: 90%;
		margin: auto;
	}
	.input-text{
				width: 90vw;
				min-height: 20vh;
				font-size: 16px;
				margin: 5vh auto;
				padding:1vh;
				background-color: white;
			
	}
	.btn2{
		width: 100%;
		height: 7vh;
		margin-top: 2vh;
		border-radius: 12px;  
	}
	.confirm{
		color: white;
		line-height: 7vh;
	}
</style>