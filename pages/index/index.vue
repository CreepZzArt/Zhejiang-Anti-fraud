<template>
	<view class="bg">
		<view class="content">
			<!-- Swiper -->
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
					:duration="duration">
					<swiper-item>
						<image style="width: 100%;height: 100%;" :src="cover"></image>
					</swiper-item>
					<swiper-item>
						<image style="width: 100%;height: 100%;" :src="cover2"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 用户体验模块 -->
			<view class="frame_row">
				<navigator class="frame_item" v-for="(item,index) in frame" :key="index" v-bind:url="item.hre">
					<image class="frame_img" v-bind:src="item.src"></image>
					<text class="Title">{{item.name}}</text>
				</navigator>
			</view>
			<!-- 区块标题 -->
			<view class="block-card">
				<view class="action">
					<text class="text">
						<span>趣味防诈</span>
					</text>
					<text class="text-abc">
						<span>Anticheat</span>
					</text>
				</view>
			</view>
			<!-- 趣味防炸功能 -->
			<view class="Anticheat">
				<view class="ac-block ac-bg1"  :style="{'backgroundImage': 'url(' + item.imgUrl + ')'}" v-for="(item,index) in answerModelList" :key="index" @click="game1(item.id)">
					<view class="ac-title ">{{item.title}}</view>
					<view class="ac-text">{{item.text}}</view>
				</view>
			</view>
			
			<view class="layout">
				<image class="yxh" src="../../static/icon/Tips.png"></image>
				<u-notice-bar bgColor="#f1f1f1" mode="horizontal" class="tongzhi" type="primary" :list="listBar"></u-notice-bar>
				<!-- <u-notice-bar color="#1b1b1b" fontSize="30" bgColor="#f1f1f1" class="tongzhi" :text="text1"></u-notice-bar> -->
			</view>
			<!-- 各地防炸案例 -->
			<view class="block-card">
				<view class="action">
					<text class="text">
						<span>各地诈骗案例</span>
					</text>
					<text class="text-abc">
						<span>Anticheat</span>
					</text>
				</view>
			</view>
			<view class="city">
				<view class="country-guide">
					<view v-for="(item,index) in countryList" :key="index"
						:class="[index === countryIndex ? 'country_select' : 'country_unselect']" @click="countryChange(index)">
						{{item.ch}}
					</view>
				</view>
				<!-- 中部地区介绍部分 -->
				<view class="place">
					<image :src="'../../static/img/map_' + countryList[countryIndex].en + '.png'" mode="widthFix"
						:key="countryIndex"></image>
					<view class="place-content">
						<view class="place-name">{{countryList[countryIndex].ch}}</view>
						<view class="place-intro">{{countryList[countryIndex].infro}}</view>
					</view>
				</view>
				<view class="place-news">
					<image :src='countryList[countryIndex].url' class="place-image"></image>
					<view class="place-title">{{countryList[countryIndex].title}}</view>
					<view class="place-date">{{countryList[countryIndex].date}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
				//下部内容列表
				contentList: [],
				//导航块内容列表
				countryList: [],
				//顶部导航下标
				countryIndex: 0,
				// 内容是否加载结束
				isLoading: false,
				listBar:[
					'个人信息泄露、贩卖等现象突出已成为诈骗犯罪黑色产业链的重要组成部分。由于许多电信网络诈骗方式都以获取被害人隐私信息为先决条件和必经步骤，因此，同学们把好个人信息保护的第一道关口，从源头杜绝隐私外泄对于避免财产损失至关重要。'
				],
				score: uni.getStorageSync('score'),
				score1: uni.getStorageSync('score1'),
				score2: uni.getStorageSync('score2'),
				cover: 'https://s3.bmp.ovh/imgs/2022/09/13/6a6afbbf805324cf.png',
				cover2:'https://s3.bmp.ovh/imgs/2022/09/22/b6c6fc51efd33e35.jpg',
	            indicatorDots: true,
	            autoplay: true,
	            interval: 3000,
	            duration: 500,
				frame:[
					{id:1,
					name:'幸运大转盘',
					src:'/static/icon/mod1-icon.png',
					hre:'/pages/modular1/mod1index',
					},
					{id:2,
					name:'红包大奖',
					src:'/static/icon/mod2-icon.png',
					hre:'/pages/modular2/Redpacket',
					},
					{id:3,
					name:'勾引诱惑',
					src:'/static/icon/mod3-icon.png',
					hre:'/pages/modular3/R18',
					},
					{id:4,
					name:'杀猪盘',
					src:'/static/icon/mod4-icon.png',
					hre:"/pages/modular4/yeMian"
					}
				],
				answerModelList: [{
					id:1,
					imgUrl:'/static/icon/ac-bg.png',
					title:'趣味答题',
					text:'通过答题闯关获取知识',
				},
				{
					id:2,
					imgUrl:'/static/icon/ac-bg1.png',
					title:'反诈排行榜',
					text:'了解最新积分排行榜',
				}],
				// 答题模式，0为趣味闯关，1为双人对抗
				answerModel: '',
				
	        }
	    },
		onLoad() {
			if(this.score != 0){
				this.score = this.score
			}else{
				this.score = 0
			}
			if(this.score1 != 0){
				this.score1 = this.score1
			}else{
				this.score1 = 0
			}
			if(this.score2 != 0){
				this.score2 = this.score2
			}else{
				this.score2 = 0
			}
		},
		created() {
			let that = this;
			that.countryList = that.$variable.mapInfo;
			that.request(0);
		},
	    methods: {
			// request(index) {
			// 	let that = this;
			// 	that.isLoading = false;
			// 	that.commonApi.uniRequest('/article/getList', {
			// 		Category: '革命印记',
			// 		OtherCategory: that.countryList[index].ch + '市',
			// 	}, function(res) {
			// 		if (res.data.code === '0') {
			// 			let list = res.data.data;
			// 			list.forEach(function(item) {
			// 				list[index].ArticleTime = that.commonApi.completeTime(item.ArticleTime);
			// 			})
			// 			that.contentList = list;
			// 		} else {
			// 			that.commonApi.uniToast('getList: code => ' + res.data.code + '!', '', '', 2000);
			// 		}
			// 		setTimeout(() => {
			// 			that.isLoading = true;
			// 		}, 1600);
			// 	}, function(res) {
			// 		that.commonApi.uniToast('getList => fail!', '', '', 2000);
			// 		setTimeout(() => {
			// 			that.isLoading = true;
			// 		}, 1600);
			// 	});
			// },
			// 导航条切换
			countryChange(index) {
				const that = this;
				if (that.countryIndex != index) {
					that.countryIndex = index;
					that.request(index);
				}
			},
			// 查看文章详情
			check(index) {
				let that = this;
				that.commonApi.articleCheckDetail(that.contentList[index].ArticleId, 2);
			},
			game1(id){
				if(id == 1){
					let that = this;
					that.commonApi.uniSetStorage('title', '趣味答题');
					that.commonApi.uniNavigateTo('/pages/answer/game');
				}else{
					uni.navigateTo({
						url:'/pages/answer/top'
					})
				}
				
			},
	        Answer(){
				uni.navigateTo({
					url:'../answer/test'
				})
			},
			Answer1(){
				uni.navigateTo({
					url:'../answer/test1'
				})
			},
			Answer2(){
				uni.navigateTo({
					url:'../answer/test2'
				})
			}
	    }
	}
</script>

<style>
	/* 城市新闻 */
	.place-date{
		font-family: "Sub Head";
		font-weight: 800;
		font-size: 12px;
		color: #9da2ad;
		margin-left: 8px;
	}
	.place-news .place-title{
		font-family: "Sub Head";
		font-weight: 800;
		font-size: 19px;
		color: #3d3d3d;
		margin-left: 8px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.place-news .place-image{
		border-radius: 10px;
		width: 100%;
		height: 27vh;
		background-color: #0081ff;
	}
	.place-news{
		width: 100%;
		height: 35vh;
	}
	/* 城市 */
	.city{
		width: 100%;
		height: auto;
		min-height: 30vh;
		background: #f1f1f1;
	}
	.country-guide {
		width: auto;
		height: auto;
		padding: 10px 5% 30rpx 30rpx;
		color: #080808;
		background: #f1f1f1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		overflow-x: auto;
	}
	
	.country-guide>* {
		height: 60rpx;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-basis: 110rpx;
		flex-shrink: 0;
		font-size: 26rpx;
		padding-bottom: 15rpx;
	}
	
	.country_select,
	.country_unselect {
		position: relative;
		transition: all .1s;
	}
	
	.country_select::after,
	.country_unselect::after {
		position: absolute;
		content: '';
		height: 100%;
		bottom: 0;
		left: 20%;
		transition: all .1s;
		border-bottom: 4rpx solid #DB4C3E;
	}
	
	.country_select {
		font-size: 25px;
	}
	
	.country_select::after {
		width: 60%;
	}
	
	.country_unselect {
		font-size: 19px;
	}
	
	.country_unselect::after {
		width: 0;
	}
	
	.place {
		width: 100%;
		height: 400rpx;
		overflow: hidden;
		padding: 0 5%;
		color: #080808;
		background: #f1f1f1;
	}
	
	.place image {
		margin-top: 5px;
		width: 50%;
		height: 120%;
		transform: scale(1.1);
		opacity: .6;
		animation: map-show-anim .3s ease-out;
		animation-fill-mode: forwards;
	}
	
	.place-content {
		width: 50%;
		height: 100%;
		float: right;
	}
	
	.place .place-name {
		width: 100%;
		height: fit-content;
		padding: 30rpx 0 20rpx 20rpx;
		font-size: 15pt;
		font-weight: bold;
	}
	
	.place .place-intro {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
		font-size: 10pt;
	}
	/* 反诈tips */
	.tongzhi {
		width: 250px;
		z-index: 1000;
		position: relative;
		left:105px;
		top: -110px;
	}
	.yxh {
		width: 100%;
		margin: 0 auto;
		height: 115px;
		z-index: 0;
	}
	.layout {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		margin-bottom: -10px;
		/* opacity: 0; */
	}
	/* 趣味反炸 */
	.Anticheat .ac-bg2{
		height: 100%;
		width: 100%;
		/* background-image: url('@/static/icon/ac-bg.png'); */
		background-size: cover;
	}
	.Anticheat .ac-bg1{
		height: 100%;
		width: 100%;
		/* background-image: url('@/static/icon/ac-bg.png'); */
		background-size: cover;
	}
	.Anticheat .ac-text{
		font-size: 12px;
		font-family: "Noto Sans SC";
		font-weight:600;
		color: #080808;
		margin-bottom: 5px;
	}
	.Anticheat .ac-title{
		font-size: 19px;
		font-family: "Noto Sans SC";
		font-weight:600;
		color: #1b1b1b;
		margin-bottom: 5px;
	}
	.Anticheat .ac-block{
		padding: 20px;
		border-radius: 12px;
		height: 100%;
		width: 50%;
		background-color: #ffffff;
		margin: 0px 5px 0px 5px;
	}
	.Anticheat{
		width: 100%;
		height: 90px;
		margin-top: 8px;
		display: flex;
	}
	/* 区域标题 */
	.block-card .action .text-abc{
		position: absolute;
		display: inline-block;
		bottom: -0.5rem;
		left: 0.5rem;
		opacity: 0.3;
		z-index: 0;
		text-align: right;
		font-weight: 900;
		font-size: 19px;
	}
	.block-card .action text{
	    position: relative;
	    z-index: 1;
	}
	.block-card .action{
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		max-width: 100%;
		position: relative;
		top: -0.2rem;
	}
	.block-card{
		display: flex;
		position: relative;
		align-items: center;
		justify-content: space-between;
		margin-top: 1.2rem;
	}
	/*  */
	.score{
		padding: 10px;
		color: #0081ff;
		font-weight: bold;
		font-size: 19px;
		text-shadow: 3px 3px 4px rgb(0 102 204 / 20%);
	}
	.card-button{
		border-radius: 2666px;
		box-shadow: 3px 3px 4px rgb(0 102 204 / 20%);
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		color: #ffffff;
	}
	.card-text .card-gray{
		color: #aaaaaa;
	}
	.card-text{
		font-size: 17px;
		display: flex;
		align-items: center;
	}
	.card-content{
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.card-item{
		position: relative;
		display: flex;
		padding: 0 16px;
		min-height: 53px;
		background-color: #ffffff;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}
	.card-list{
		box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
	}
	.card .action{
		margin-left: 0.8rem;
	}
	.card .action .text-abc{
		position: absolute;
		display: inline-block;
		bottom: -0.5rem;
		left: 0.5rem;
		opacity: 0.4;
		z-index: 0;
		text-align: right;
		font-weight: 900;
		font-size: 19px;
	}
	.card .action text{
	    position: relative;
	    z-index: 1;
	}
	.text-abc{
		text-transform: Uppercase;
		color: #3568f5;
		font-size: 19px;
		font-weight: 700;
	}
	.text{
		color: #3568f5;
		font-weight: 700;
		font-size: 19px;
		text-shadow: 3px 3px 4px rgb(0 102 204 / 20%);
	}
	.card .action{
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		max-width: 100%;
		position: relative;
		top: -0.2rem;
	}
	.card{
		display: flex;
		position: relative;
		align-items: center;
		min-height: 53px;
		width: 95vw;
		justify-content: space-between;
		background-color: #ffffff;
		color: #666666;
		margin-top: 1.2rem;
	}
	.Title{
		font-size: 20rpx;
		font-family: "Sub Head";
		font-weight: 800;
		color: #464c5b;
	}
	.uni-margin-wrap {
		width:100%
	}
	.swiper {
		height: 400rpx;
		border-radius: 20rpx !important;
		overflow: hidden;
		transform: translateY(0);
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.bg{
		height: 100vh;
		width: 100vw;
		background-image: linear-gradient(to right, #4278ca, #294EB5);
	}
	.content{
		background-color: #f1f1f1;
		height: auto;
		border-radius:20px;
		padding: 2.5vw;
		margin-bottom: 50px;
	}
	.frame_row {
		background-color: #ffffff;
		border-radius: 12px;
		padding: 10px;
		width: 95vw;
		height: 30vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 5%;
	}
	.frame_item {
		margin-top: -4vh;
		width: 130rpx;
		height: 130rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		font-size: 20px;
		box-sizing:border-box;
		border-radius: 10px; 
		background-size: 100% 100%;
	}
	.frame_img{
		margin-bottom: 8px;
		border-radius: 8px;
		width: 100%;
		height: 100%;
	
	}
</style>