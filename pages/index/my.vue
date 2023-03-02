<template>
	<view class="content">
		<!-- 头部 -->
	<view class="head theme-colors">
		  <!-- 使用者的头像和名字 -->
		  <view class="head-nav">
		  	<view class="user">
			<image src="https://s3.bmp.ovh/imgs/2022/09/20/06e72f3044c9e40b.jpg" class="touXiang"></image>
               <view class="user-information">
				  <view class="user-name secondary-title Auxiliary-color">您好，{{name}}</view>
                  <view class="interal">
					  <image src="../../static/jiFen.png" class="png6"></image>
					  <text class=" Auxiliary-color">积分 :10000</text>
				  </view>
			   
			   
			   </view>
		  </view>
		  <!-- 使用者的记录 -->
		  <!-- <view class="head-record">
			  <view class="record-report main-body Auxiliary-color"><text>0</text><text>举报记录</text></view>
			  <view class="Default-color" style="font-size: 10px;"><text>|</text></view>
			  <view class="record-case main-body Auxiliary-color"><text>0</text><text>报案记录</text></view>
		  </view> -->
		<!-- 中间的卡片 -->
		 <view class="middle-card">
			 <!-- 我要举报 -->
			 <view class="Audio-recording" @click="inform()">
				 <view class="card-content1"><image src="/static/icon/report.png" class="picture"></image></view>
				 <text class="main-body">我要举报</text>	
			 </view>
			<!-- 用户手册 -->
			<view class="user-manual" @click="goshop()">
				<view class="card-content1"><image src="/static/icon/shop.png" class="picture"></image></view>
				 <text class="main-body">积分商店</text>	
		    </view>
		 </view>
		 
		 <!-- 下部卡片 -->
		 <view class="bottom-card">
			 <!-- 为何防诈 -->
			<view class="card-content2" @click="goToCheat">
				<view class="content1">
					<image src='/static/icon/why.png' class='png' mode='aspectFit'></image>
					<text class='text-lg three-title'>为何防诈</text>
				</view>
					<text class="three-title Default-color">></text>
			</view> 
			<!-- 水平线（灰色的） -->
			<view class="hr"></view>
			<!-- 下载国家反诈骗app -->
			<view class="card-content2" @click="goDownload">
				<view class="content1">
				<image src='/static/icon/down.png' class='png' mode='aspectFit'></image>
					<text class='text-lg three-title'>下载国家反诈骗app</text>
				</view>
				    <text class="three-title Default-color">></text>
			</view>
			<view class="hr"></view>
			<!-- 关于我们 -->
			<view class="card-content2" @click="goAboutWe">
				<view class="content1">
				  <image src='/static/icon/aboutwe.png' class='png' mode='aspectFit'></image>
				  <text class='text-lg three-title'>关于我们</text>
				</view>
				<text class="three-title Default-color">></text>
			</view>
			<view class="hr"></view>
			<!-- 设置 -->
			<!-- 这里记得在js里加路径 -->
			<view class="card-content2" @click="goToSet">
				<view class="content1">
					<!-- 改图片 -->
				  <image src='/static/icon/setting.png' class='png' mode='aspectFit'></image>
				  <text class='text-lg three-title'>设置</text>
				</view>
				<text class="three-title Default-color">></text>
			</view>
			
		 </view>
	</view>
	
	
	
	
	
	</view>		
			
			
			
			
			
			
			<!-- <view class="head-tip">
				<image src="/static/logo.png" class="user"></image>
				<view class="name">
					<view class="user-name secondary-title Auxiliary-color"><text>您好，189******62</text></view>
				    <view class="user-more main-body Auxiliary-color"><text>点击查看个人信息 ></text></view>
				</view>
			</view> -->
		
		<!-- 名片 -->
		<!-- <view class="mingPian"> -->

		 <!--  <view class="p2">
			   <button class="cu-btn"  @click="goToCheat">
			   	<image src='/static/qiabao.png' class='png' mode='aspectFit'></image>
			   	<text class='text-lg main-body'>为何防诈</text>
			   </button>
		   </view>
		   <view class="p2">
			   <button class="cu-btn" @click="goDownload">
			   	<image src='/static/shouji.png' class='png' mode='aspectFit'></image>
			   	<text class='text-lg main-body'>下载国家反诈骗APP</text>
			   </button>
		   </view>
		   <view class="p2">
			   <button class="cu-btn" @click="goAboutWe">
			   	<image src='/static/xiaoxi.png' class='png' mode='aspectFit'></image>
			   	<text class='text-lg main-body'>关于我们</text>
			   </button>
		   </view> -->
		<!-- </view> -->
	</view>
</template>

<script>
	import setting from '../../static/js/setting.js'
	export default {
		data() {
			return {
				name: 'CreepZz',
			}
		},
		onLoad() {
			this.account = this.account
		},
		methods: {
			goshop(){
				uni.navigateTo({
					url:'../shop/shop'
				})
			},
			inform(){
				uni.navigateTo({
					url:'../inform/inform'
				})
			},
          goDownload(){
				uni.navigateTo({
					url:'./download'
				})
			},
			goAboutWe(){
				uni.navigateTo({
					url:'./Aboutwe'
				})
			},
			goToCheat(){
				uni.navigateTo({
					url:'./nocheat'
				})
			},
			goToSet(){
				uni.navigateTo({
					// 记得改路径
					url:'../setting/set'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url('@/static/total.css');
		
	body{
		background-color:#F1F1F1;
	}
	
	.content{
			overflow: hidden;
			margin: 0px auto;
			.head{
				 width: 150%;
				 height: 140px;
				 position: fixed;
				 border-bottom-left-radius: 50%;
				 border-bottom-right-radius: 50%;
				 left: -94px;
				 z-index: 10;
			}
	}
		
	.head-nav{
		width: 85vw;
		height: 100px;
		margin:0 auto;
		.user{
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
	    align-items: center;
		margin-top:2vh;
		.touXiang{
			width: 8vh;
			height: 8vh;
			border-radius: 50%;
		}
		.user-information{
			margin-left: 3vw;
			.user-more{
				margin-top: 1vh;
			}
			.png6{
				width: 6vw;
				height: 6vw;
				margin-right: 1vw;
				// background-color: aliceblue;
				// border-radius: 3px;
			}
		}
		.interal{
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 1vh;
			// background-color: aliceblue;
			
		}
	}
		 
	 // .head-record{
		//  display: flex;
		//  flex-direction: row;
		//  justify-content: space-around;
		//  align-items: center;
		//  margin-top: 25px;
		//  .record-case,.record-report{
		// 	 display: flex;
		// 	 flex-direction: column;
		// 	 align-items: center;
		//  }
	 // }
	 .middle-card{
		 display: flex;
		 flex-direction: row;
		 justify-content: space-around;
		 width: 100%;
		 height: 13vh;
		 background-color: white;
		 margin: 0 auto;
		 margin-top: 30px;
		 border-radius: 10px;
		 
		 .Audio-recording,.user-manual{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.card-content1{
				height: 7vh;
				width: 7vh;
				border-radius:25% ;
				background-color: aliceblue;
				.picture{
					height:90%;
					width: 90%;
					margin: 5% 5%;
				}
			}
		 }
	 }
	
	.bottom-card{
		display: flex;
		flex-direction: column;
		background-color: white;
		width: 100%;
		height:38vh;
		margin-top: 3vh;
		border-radius: 5px;
		.card-content2{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 90%;
			height: 6vh;
			margin: auto;
			.content1{
				display: flex;
				flex-direction: row;
				// justify-content: space-between;
				align-items: center;
				.png{
				width: 8vw;
				height: 8vw;
				margin-right: 2vw;
			}
			}
		}
		.hr{
			width: 90%;
			height: 1px;
			background-color: #F1F1F1;
			margin:auto;
		}
		
	}
	
	
	}
	// 头部
	// .head{
	// 	width: 100%;
	// 	// height: 33vh;
	// 	height: 26vh;
	// 	border-radius: 0 0 20% 20%;
	// }
		
	// .head-tip{
	// 	display: flex;
	// 	flex-direction: row;
	// 	flex-wrap: nowrap;
	// 	justify-content: flex-start;
	// 	align-items: center;
	// 	position: relative;
		// 头像
		// .user{
		// 	width: 2vh;
		// 	height: 2vh;
		// 	border-radius: 2px;
		// 	margin: 7vh 5vw;
		// }
	 //    .name{
		// 	.user-name{
		// 	margin: 1vh 0;
		// }
		
		// }
		// }

	// }
	// .mingPian{
	// 	width: 90%;
	// 	height: 70vh;
	// 	display: flex;
	// 	flex-direction: column;
	// 	position: absolute;
	// 	right: 5vw;
	// 	top:20%;
		// .p1{
		// 	width: 100%;
		// 	height: 18%;
		// 	background-color:white;
		// 	border-radius: 5px;
		// 	margin: 10px auto;
		// 	display: flex;
		// 	flex-direction: row;
		// 	justify-content: space-around;
		// 	align-items: center;
		// }
		// .p2{
		// 	width: 100%;
		// 	height: 10%;
		// 	background-color:white;
		// 	border-radius: 5px;
		// 	margin: 2px auto;
		// 	.cu-btn{
		// 		width: 100%;
		// 		height: 100%;
		// 		display: flex;
		// 	    flex-direction: row;
		// 	    justify-content: flex-start;
		// 	    align-items: center;
		// 		box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
		// 		.png{
		// 	       width:9vw;
		// 	       height: 9vw;
		// 		   margin: 20px ;
		// 		 }  
			//   .jianTOU{
			// 	float: right;
			// 	width: 20%;
			// 	height: 100%;
			// 	.text-lg1{
			// 	color:#9DA2AD;
			// 	// float: right;
			//     }
			// }
			
	// 	}
	// 	}
		
	// }
</style>
