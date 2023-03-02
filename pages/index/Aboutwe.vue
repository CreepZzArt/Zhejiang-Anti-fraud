<template>
	<view class="content">
		<!-- 头部 -->
		<view class="top theme-colors"></view>
		<view class="app-name">
			<image class="logo" src="../../static/zha.png"></image> 
		    <view class=" three-title Auxiliary-color name"><text>浙反诈</text></view>	
		    <view class="main-body Auxiliary-color tip"><text>打击防范电信网络诈骗</text></view>
		</view>
		<!-- 下部 -->
		<view class="patent">
			<!-- 版本号 -->
			<view class="main-body version"><text>当前版本号 :</text><text class="Default-color">v2.6.0</text></view>
		    <!-- 水平线 -->
			<view class="hr"></view>
		    <!-- 投诉 -->	
		    <view class="main-body all-text"><text>服务协议 :</text><text class="Default-color">></text></view>
		    <view class="hr"></view>
			<view class="main-body all-text"><text>隐私政策 :</text><text class="Default-color">></text></view>
			<view class="hr"></view>
			<view class="main-body all-text"><text>版权所有 :</text><text class="Default-color">浙反诈</text></view>
			<view class="hr"></view>
			<view class="main-body all-text"><text>技术支持 :</text><text class="Default-color">浙反诈制作小组成员</text></view>
			<view class="hr"></view>
		</view>
		<!-- 检查更新 -->
		<view class="update">
			<button class="gx-btn secondary-title  theme-colors Auxiliary-color "><text>检查更新</text></button>
		</view>	
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang='scss'>
	@import url('@/static/total.css');	
	body{
		background-color:#F1F1F1;
	}
	.content{
		overflow: hidden;
		margin: 0px auto;
		.top{
			 width: 150%;
			 height: 180px;
			 position: fixed;
			 border-bottom-left-radius: 50%;
			 border-bottom-right-radius: 50%;
			 left: -100px;
			 z-index: -1;
		}
	} 
	.app-name{
		display: flex;
		flex-direction: column;
		align-items: center;
		  .logo{
			width: 20vw;
			height: 20vw;
			margin-top: 10px;
		}
			
		.name,.tip{
			margin-top: 2px; 
		}
	}
	.patent{
		display: flex;
		flex-direction: column;
	    margin :0 auto;
		 .version{
			 width: 90%;
		     display: flex;
		     flex-direction: row;
		     justify-content: space-between;
			 align-items: flex-end;
		     margin-top: 12vh;
			 margin-left:5vw;
	}
	  .all-text{
		  width: 90%;
		  display: flex;
		  flex-direction: row;
		  justify-content: space-between;
		  align-items: flex-end;
		  margin-left:5vw;
	  }
	.hr{
		width: 90%;
		height: 1px;
		background-color: #9DA2AD;
		margin: 2vh auto;
	}
	}
		.update{
			width: 90%;
			height: 8vh;
			margin: 0 auto;
			border-radius: 5px;
		}
	
	.gx-btn{
				width: 100%;
				height: 8vh;
				line-height: 8vh;
				border-radius: 5px;
			}
	
	
	
</style>