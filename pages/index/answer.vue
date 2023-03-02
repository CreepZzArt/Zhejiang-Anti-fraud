<template>
	<!-- 电信诈骗模块 -->
	<view class="card">
		<view class="action">
			<text class="text">
				<span>电信诈骗</span>
			</text>
			<text class="text-abc">
				<span>phonefraud</span>
			</text>
		</view>
		<view class="score">{{ score }}分</view>
	</view>
	<view class="card-list">
		<view class="card-item">
			<view class="card-content">
				<view class="card-text">
					<u-icon name="bell" color="#2979ff" size="28"></u-icon>
					<text>测试测试你的脑子</text>
				</view>
				<view class="card-text">
					<u-icon name="thumb-up-fill" color="#aaaaaa" size="28"></u-icon>
					<text class="card-gray">已有36位小伙伴答题</text>
				</view>
			</view>
			<view class="">
				<button class="card-button" @click="Answer()">前往答题</button>
			</view>
		</view>
	</view>
	<!-- 网购诈骗模块 -->
	<view class="card">
		<view class="action">
			<text class="text">
				<span>网购诈骗</span>
			</text>
			<text class="text-abc">
				<span>shoppingcheat</span>
			</text>
		</view>
		<view class="score">{{ score1 }}分</view>
	</view>
	<view class="card-list">
		<view class="card-item">
			<view class="card-content">
				<view class="card-text">
					<u-icon name="bell" color="#2979ff" size="28"></u-icon>
					<text>测试测试你的脑子</text>
				</view>
				<view class="card-text">
					<u-icon name="thumb-up-fill" color="#aaaaaa" size="28"></u-icon>
					<text class="card-gray">已有36位小伙伴答题</text>
				</view>
			</view>
			<view class="">
				<button class="card-button" @click="Answer1()">前往答题</button>
			</view>
		</view>
	</view>
	<!-- 信息诈骗模块 -->
	<view class="card">
		<view class="action">
			<text class="text">
				<span>信息诈骗</span>
			</text>
			<text class="text-abc">
				<span>newscheat</span>
			</text>
		</view>
		<view class="score">{{ score2 }}分</view>
	</view>
	<view class="card-list">
		<view class="card-item">
			<view class="card-content">
				<view class="card-text">
					<u-icon name="bell" color="#2979ff" size="28"></u-icon>
					<text>测试测试你的脑子</text>
				</view>
				<view class="card-text">
					<u-icon name="thumb-up-fill" color="#aaaaaa" size="28"></u-icon>
					<text class="card-gray">已有36位小伙伴答题</text>
				</view>
			</view>
			<view class="">
				<button class="card-button" @click="Answer2()">前往答题</button>
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
				text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用',
				score: uni.getStorageSync('score'),
				score1: uni.getStorageSync('score1'),
				score2: uni.getStorageSync('score2'),
				cover: 'https://s3.bmp.ovh/imgs/2022/09/13/6a6afbbf805324cf.png',
				cover1:'https://s3.bmp.ovh/imgs/2022/09/13/f4e3799bf81707b6.png',
				cover2:'https://s3.bmp.ovh/imgs/2022/09/12/14946271d341de78.png',
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
			request(index) {
				let that = this;
				that.isLoading = false;
				that.commonApi.uniRequest('/article/getList', {
					Category: '革命印记',
					OtherCategory: that.countryList[index].ch + '市',
				}, function(res) {
					if (res.data.code === '0') {
						let list = res.data.data;
						list.forEach(function(item) {
							list[index].ArticleTime = that.commonApi.completeTime(item.ArticleTime);
						})
						that.contentList = list;
					} else {
						that.commonApi.uniToast('getList: code => ' + res.data.code + '!', '', '', 2000);
					}
					setTimeout(() => {
						that.isLoading = true;
					}, 1600);
				}, function(res) {
					that.commonApi.uniToast('getList => fail!', '', '', 2000);
					setTimeout(() => {
						that.isLoading = true;
					}, 1600);
				});
			},
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
		font-weight: bold;
	}
	.text{
		color: #3568f5;
		font-weight: bold;
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
</style>