<!-- 答题模式：趣味闯关和双人对抗页 -->
<template>
	<view class="body">
		<!-- 顶部标题部分 -->
		<!-- 无关 -->
		
		<!-- 趣味闯关部分 -->
		<view v-if="data.title === '趣味答题'">
			<image class="bth-back" @click="back()"></image>
			<view class="title">测试测试反诈意识</view>
			<view class="difficultyList">
				<view class="difficulty-item" v-for="(item,index) in difficultyList" :key="index"@click="changeCustom(index)":class="difficultyIndex === index ? 'difficulty-item-select' : 'difficulty-item-unselect'">
					{{item}}
				</view>
			</view>
			<!-- 下部分 -->
			<view class="customList">
				<view class="custom-item" v-for="(item,index) in customsList" :key="index" @click="goTo(item.id)"
					v-if="item.difficulty === difficultyIndex" :style="{'--index': index - difficultyIndex * 3}">
					<!-- <view>关卡{{item.index}}</view> -->
					<!-- <view>{{item.title}}</view> -->
					<view class="card">
						<view class="action">
							<text class="text">
								<span>{{item.title}}</span>
							</text>
							<text class="text-abc">
								<span>{{item.english}}</span>
							</text>
						</view>
						<view class="score">{{item.score}}分</view>
					</view>
					<view class="card-list">
						<view class="card-item">
							<view class="card-content">
								<!-- <view class="card-text">
									<u-icon name="bell" color="#2979ff" size="28"></u-icon>
									<text>测试测试你的脑子</text>
								</view> -->
								<view class="card-text">
									<u-icon name="thumb-up-fill" color="#aaaaaa" size="28"></u-icon>
									<text class="card-gray">已有{{item.howMany}}位小伙伴答题</text>
								</view>
							</view>
							<!-- <view class="">
								<button class="card-button" @click="Answer()">前往答题</button>
							</view> -->
						</view>
					</view>
					<view class="lock" v-if="item.lock">
						<image src="../../static/img/logo_lock.png" mode="widthFix"></image>
						<view class="lock-bg"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view v-if="data.title === '双人对抗'" class="model2">
			<view class="list-item" v-for="(item,index) in againstModelList" :key="index" @click="chooseModel(index)"
				:style="{'--index': index}">
				{{item}}
			</view>
		</view> -->
	</view>
</template>

<script>

	export default {
		data() {
			return {
				// 页面顶部数据
				data: {
					title: '',
					background: '#3568F5',
					scrollBackground: '#3568F5',
					fontColor: '#ffffff',
					scrollFontColor: '#ffffff',
				
					backPage: 'characteristicsAnswer',
					showHome: true,
					
					homePage: 'index',
					customsList: this.$variable.customsList,
					
				},
				// 关卡难度列表
				difficultyList: [
					'简单', '中等', '困难'
				],
				// 难度选择下标
				difficultyIndex: 0,
				// 关卡列表
				customsList: this.$variable.customsList,
				// 双人对抗列表
				
				
				// againstModelList: [
				// 	'人人对战', '人机对战'
				// ],
			}
		},
		onShow(){
			
		},
		mounted() {
			let that = this;
			that.data.title = uni.getStorageSync('title');
		},
		destroyed() {
			this.commonApi.uniRemoveStorages(['title']);
		},
		onLoad() {
			let that = this;
			
			that.customsList = this.$variable.customsList;
		},
		methods: {
			// 返回
			back(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			// 切换关卡难度事件
			changeCustom(index) {
				let that = this;
				if (that.difficultyIndex != index) {
					that.difficultyIndex = index;
				}
			},
			goTo(id){
				uni.navigateTo({
					url:'../answer/test' + id
				})
			}
		}
	}
</script>

<style>
	@import url("../../scss/answerModel.css");
	.score{
		position: absolute;
		top: 30px;
		left: 15px;
		color: #294EB5;
	}
	.bth-back{
		margin-top: 5%;
		margin-left: 5%;
		height: 30px;
		width: 30px;
		background-size:cover;
		background-image: url('../../static/icon/back.png');
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
		padding-top: 5px;
		padding-bottom: 5px;
	}
	.card-item{
		position: relative;
		display: flex;
		padding: 0 16px;
		min-height: 53px;
		/* background-color: #ffffff; */
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}
	/* .card-list{
		box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
	} */
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
		color: #294EB5;
		font-size: 19px;
		font-weight: bold;
	}
	.text{
		color:#294EB5;
		font-weight: bold;
		font-size: 25px;
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
		/* background-color: #ffffff; */
		color: #666666;
		margin-top: 2rem;
		margin-left:5.5rem;
	}
</style>
