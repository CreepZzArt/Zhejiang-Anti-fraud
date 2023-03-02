<template>
	<view>
		<!-- 直接输入复制粘贴 -->
		<view class="input-web">
			<view class="input-web-url1">
				<input placeholder="请直接输入或粘贴诈骗网站链接" type="text" class="input-url" :value="webname"></input>
				<image src="../../static/img/laJiTong.png" class="png2" @click="del()"></image>
			</view>
			<!-- 水平线 -->
			<view class="hr"></view>
			<view class="input-web-url2">
				<input placeholder="请直接输入或粘贴诈骗网站链接" type="text" class="input-url"></input>
				<image src="../../static/img/laJiTong.png" class="png2"></image>
			</view>
			<view class="hr"></view>
			<view class="input-web-url2">
				<input placeholder="请直接输入或粘贴诈骗网站链接" type="text" class="input-url"></input>
				<image src="../../static/img/laJiTong.png" class="png2"></image>
			</view>
			<view class="hr"></view>
			<view class="input-web-url2">
				<input placeholder="请直接输入或粘贴诈骗网站链接" type="text" class="input-url"></input>
				<image src="../../static/img/laJiTong.png" class="png2"></image>
			</view>
			<view class="hr"></view>
			<view class="input-web-url2">
				<input placeholder="请直接输入或粘贴诈骗网站链接" type="text" class="input-url"></input>
				<image src="../../static/img/laJiTong.png" class="png2"></image>
			</view>
			<view class="hr"></view>
		</view>
			<!-- 添加 -->
		<view class="add">
			   <image src="../../static/img/jiaHao.png" class="png3"></image>
			   <text>添加</text>
		</view>
			<!-- 次数 --><!-- 按钮 -->
		<view class="bottom">
			  <text class="Default-color">最多可添加10条网址</text>
			  <view class="btn2">
			  		<uni-section >
			  			      <button class="btn2 theme-colors" @click="dialogToggle('success')"><text class="confirm">确定</text></button>
			         </uni-section >
			  </view>
			  
			  <view>
			  	<uni-popup ref="alertDialog" type="dialog">
			  		<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="提交成功!" @confirm="dialogConfirm"
			  			@close="dialogClose"></uni-popup-dialog>
			  	</uni-popup>
			  </view>
			  
			  
			  <!-- <button class="btn2 theme-colors"><text class="confirm">确定</text></button> -->
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
			del(){
				this.webname=''
				this.queryByInput()
			},
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
	.input-web{
		width: 100%;
		display: flex;
		flex-direction: column;
		
	}
	.input-web-url1{
		width: 100%;
		height: 7vh;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: white;
		margin-top: 5vh;
	}
	.input-web-url2{
		width: 100%;
		height: 7vh;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: white;
	}	
	.add{
		width: 100%;
		height: 6vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: white;
	}
	.input-url{
		width: 80%;
	}
	.png2{
		width: 8vw;
		height: 8vw;
	}
	.png3{
		width: 7vw;
		height:7vw;
		margin-right: 3px;
	}
	.hr{
		width: 100%;
		height: 1px;
		background-color: #9DA2AD;
	}
	.bottom{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 3vh;
	}
	.btn2{
		width: 95%;
		height: 7vh;
	    border-radius: 12px; 
		margin:auto;
		margin-top: 2vh;
	}
	.confirm{
		color: white;
		line-height: 7vh;
	}
</style>