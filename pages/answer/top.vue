<template>
	<view>
		<view class="contaier" style="background-color: #FFFFFF;">
			<view class="popup-content cu-modal" :class="modalName=='Modal'?'show':''">
				<image class="popup-top" src="../../static/img/popup-top1.png"></image>
				<view class="popup-title">温馨提示</view>
				<view class="popup-text">1000积分:初入江湖<br>2000积分:牛刀小试<br>3000积分:崭露头角<br>4000积分:渐入佳境<br>5000积分:出类拔萃<br>6000积分:出神入化<br>7000积分:一代宗师<br>8000积分:深不可测<br>9000积分:登峰造极<br>10000积分:独孤求败</view>
				<button class="popup-bth" @click="know()">
					<text>了解</text>
				</button>
			</view>
			<view class="top_bg">
				<u-modal :show="show1" :title="title" @confirm="confirm" :content='content'></u-modal>
				<view class="bth-back"  @click="back()"></view>
				<view class="bth-know"  @tap="down" data-target="Modal"></view>
				<view class="one_box">
					<!-- 第二名 -->
					<view class="top3">
						<view class="num_two">
							<image class="huangguan2" src="@/static/rank/two.png"></image>
							<image class="top3_head" src="https://s3.bmp.ovh/imgs/2022/09/20/a1e2da814d20182f.jpg"></image>
							<!-- <view class="top_name">{{twoName}}</view> -->
							<view class="top_name">丑八怪</view>
							<view class="top_sy">积分｜9500</view>
							<view class="Toprank">登峰造极</view>
						</view>
					</view>

					<!-- 第一名 -->
					<view class="top3">
						<view class="num_one">
							<image class="huangguan1" src="@/static/rank/one.png"></image>
							<image class="top3_head" src="https://s3.bmp.ovh/imgs/2022/09/20/06e72f3044c9e40b.jpg"></image>
							<!-- <view class="top_name" style="font-size: 30rpx;">{{oneName}}</view> -->
							<view class="top_name text-bold" style="font-size: 30rpx;">CreepZz</view>
							<view class="top_sy">积分｜10000</view>
							<view class="Toprank">独孤求败</view>
						</view>
					</view>
					<!-- 第三名 -->
					<view class="top3">
						<view class="num_three">
							<image class="huangguan2" src="@/static/rank/three.png"></image>
							<image class="top3_head" src="https://s3.bmp.ovh/imgs/2022/09/20/9f82238b5806dbf3.jpg"></image>
							<view class="top_name">方大福</view>
							<view class="top_sy">积分｜8800</view>
							<view class="Toprank">深不可测</view>
						</view>
					</view>
				</view>
			</view>

			<view class="rankList_box">
				<view class="rankItem" v-for="(item,index) in rankList" :key="index">
					<view class="rankIndex">
						<text>{{ index + 4 }}</text>
					</view>
					<view class="HeardBox">
						<image class="rankHeard" :src="item.headimgurl "></image>
					</view>
					<view class="NameBox">
						<!-- <view class="userName">{{item.name}}</view> -->
						<view class="userName text-bold">{{item.name}}</view>
						<view class="userPost text-gray">{{item.post}}</view>
						<view class="color_ccc">{{item.city}} ｜ <text class="text-blue">{{item.salary}}</text></view>
					</view>
					<view class="download_box">
						<image mode="widthFix" src="@/static/rank/tab.png"></image>
					</view>
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
				title:'排行名称',
				content:'1000积分:初入江湖\n2000积分:牛刀小试\n3000积分:崭露头角\n4000积分:渐入佳境\n5000积分:出类拔萃\n6000积分:出神入化\n7000积分:一代宗师\n8000积分:深不可测\n9000积分:登峰造极\n10000积分:独孤求败',
				modal1: false,
				nowTime: '',
				rankList: [{
						headimgurl: 'https://s3.bmp.ovh/imgs/2022/09/20/f93e0e9715edce89.jpg',
						name: '拖拉机',
						post: '一代宗师',
						city: '积分',
						salary: '7500'
					}, {
						headimgurl: 'https://s3.bmp.ovh/imgs/2022/09/20/75843e5714336c8e.jpg',
						name: '辣椒酱',
						post: '一代宗师',
						city: '积分',
						salary: '7480'
					}, {
						headimgurl: 'https://s3.bmp.ovh/imgs/2022/09/20/c4f419eada2eaedd.jpg',
						name: '不可以瑟瑟',
						post: '一代宗师',
						city: '积分',
						salary: '7300'
					},
					{
						headimgurl: 'https://s3.bmp.ovh/imgs/2022/09/20/bdcdf1b16003917f.jpg',
						name: '罗管',
						post: '出神入化',
						city: '积分',
						salary: '6800'
					},
					{
						headimgurl: 'https://s3.bmp.ovh/imgs/2022/09/20/faf505d09ad17eb8.jpg',
						name: '璐璐',
						post: '出神入化',
						city: '积分',
						salary: '6750'
					},
					{
						headimgurl: 'https://s3.bmp.ovh/imgs/2022/09/20/08fedeccc8e80f68.jpg',
						name: '凯凯',
						post: '出神入化',
						city: '积分',
						salary: '6700'
					},
					{
						headimgurl: 'https://s3.bmp.ovh/imgs/2022/09/20/bb8c426bcbfbe4d4.jpg',
						name: '能能',
						post: '出类拔萃',
						city: '积分',
						salary: '5000'
					},
					{
						headimgurl: 'https://s3.bmp.ovh/imgs/2022/09/20/9f3fa27f59f8e100.jpg',
						name: 'ACM',
						post: '出类拔萃',
						city: '积分',
						salary: '5000'
					}
				]
			}
		},
		onLoad() {
			this.getTime();
		},
		methods: {
			know(){
				this.modalName = false
			},
			down(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			back(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			confirm() {
				this.show = false;
			},
			getTime: function() {

				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day + ' ' + hour + ':00';
				this.nowTime = timer
				console.log(this.nowTime);
			},
		},
		filters: {

		}
	}
</script>

<style lang="scss">
	/* ==================
	         模态窗口
	 ==================== */
	.cu-modal {
		position: fixed;
		top: 50px;
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
		top:87%;
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
		top:90%;
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
		top: 230px;
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
		top: 200px;
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
		height:80%;
		background-color: #f1f1f1;
		margin-left: 15%;
		border-radius: 12px;
	}
	.bth-back{
		position: absolute;
		top:20px;
		margin-left: 0%;
		height: 30px;
		width: 30px;
		background-size:cover;
		background-image: url('@/static/icon/back.png');
	}
	.bth-know{
		position: absolute;
		top:20px;
		margin-left: 90%;
		height: 30px;
		width: 30px;
		background-size:cover;
		background-image: url('@/static/icon/inquiry.png');
	}
	.Toprank{
		margin-left: 20px;
		margin-top: 5px;
		font-size: 17px;
		font-weight: 400;
		color: #ffffff;
		font-family: "阿里妈妈数黑体 Bold";
		opacity: 1;
		text-shadow: 2px 2px 10px black;
	}
	.top_bg {
		width: 750rpx;
		height: 650rpx;
		background: url(https://s3.bmp.ovh/imgs/2022/09/20/d2b280f4ac05efcd.png) no-repeat;
		background-size: 750rpx;
		position: relative;
	}

	.one_box {
		width: 750rpx;
		height: 260rpx;
		position: absolute;
		left: 0;
		bottom: 110rpx;
		display: flex;
		justify-content: space-around;
	}

	.one_box .top3 {
		width: 210rpx;
		height: 280rpx;
	}

	.top_name {
		width: 100%;
		height: 55rpx;
		line-height: 60rpx;
		color: #f2f2f2;
		font-size: 26rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy {
		width: 100%;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: rgba(255, 255, 255, .7);
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.top_sy span {
		font-size: 20rpx !important;
	}

	.num_one {
		position: relative;
	}

	.huangguan1 {
		width: 60px;
		height: 60px;
		position: absolute;
		right: -10rpx;
		top: -18*2rpx;
	}

	.num_one .top3_head {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100%;
		margin: 15rpx 0 0 30rpx;
		border: 4rpx solid #ffdd3c;
	}

	.num_two {
		position: relative;
	}

	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}

	.num_two .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #bcdcdf;
	}

	.num_three {
		position: relative;
	}

	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}

	.num_three .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #e29d85;
	}

	// 第二块
	.number_sy_box {
		width: 700rpx;
		height: 210rpx;
		background-color: #FFFFFF;
		position: absolute;
		left: 25rpx;
		border-radius: 20rpx;
		bottom: -115rpx;
		z-index: 999;
		padding: 22rpx;
		box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1)
	}

	.number_sy_box_title {
		color: #888888;
		// font-weight: 500;
		font-size: 28rpx;
		display: flex;
		z-index: 9999;
		justify-content: space-between;
	}

	.number_sy_main {
		width: 100%;
		height: 124rpx;
		padding-top: 20rpx;
		line-height: 52rpx;
		// background: red;
		display: flex;
		justify-content: space-around;
		position: relative;
	}

	.xiaoding_bg {
		position: absolute;
		right: -22rpx;
		bottom: -30rpx;
		width: 180rpx;
	}

	.number_num1 {
		font-size: 40rpx;
		font-weight: 500;
		color: #2fc04f;
	}

	.number_num2 {
		font-size: 40rpx;
		font-weight: 500;
		color: #4bac7f;
	}

	.danwei {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #c9c9c9;
	}

	// 列表
	.rankList_box {
		width: 750rpx;
		min-height: 200rpx;
		margin-top: 0px;
	}

	.rankItem:last-child {
		border: none;
	}

	.rankItem {
		width: 700rpx;
		height: 140rpx;
		margin: 0px auto;
		border-bottom: 1px solid #e9e9e9;
	}

	.rankIndex {
		width: 60rpx;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
		color: #CCCCCC;
		font-size: 40rpx;
		float: left;
	}

	.HeardBox {
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx;
		border-radius: 100%;
		overflow: hidden;
		float: left;
		margin-right: 25rpx;
		margin-left: 10rpx !important;
	}

	.HeardBox image {
		width: 100%;
		height: 100%;
	}

	.NameBox {
		width: 400rpx;
		height: 140rpx;
		float: left;
		padding-top: 10rpx;
		box-sizing: border-box;
	}

	.NameBox view {
		height: 50rpx;
		line-height: 70rpx;
	}

	.userName {
		min-width: 90rpx;
		font-size: 30rpx;
		float: left;
		margin-right: 20rpx;
	}

	.download_box {
		width: 80rpx;
		height: 140rpx;
		// background-color: red;
		float: right;

	}

	.download_box image {
		width: 45rpx;
		margin: 50rpx auto;
		display: block;
	}
</style>
