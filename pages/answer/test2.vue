<template>
	<view class="bg">
		<view class="answer-bg">
			<view class="content">
				<swiper :current="questionIndex" class="swiper-box" @change="swiperChange">
					<swiper-item v-for="(item,index) in questionList" :key="index">
						<view class="test-item">
							<!--题型-->
							<view>{{ item.additional.typeName }}</view>
							<!-- 题目 -->
							<view class="test-subject">
								{{index + 1}}. <rich-text :nodes="item.questionStem"></rich-text>
							</view>
							<!-- 选项 -->
							<view class="test-option" :class="item.additional.userAnswer == utils.fromCharCode(idx+1) ? 'on' : ''" v-for="(option,idx) in item.optionList"
							 :key="idx" @tap="tapOption(index,idx)">
								<view class="test-option-num">{{ utils.fromCharCode(idx+1) }}</view>
								<rich-text :nodes="option"></rich-text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="analysis">
				<swiper :current="questionIndex"  @change="swiperChange">
					<swiper-item v-for="(item,index) in questionList" :key="index">
						<!-- 解析 -->
						<view v-if="item.additional.showAnalysis" class="test-analysis">
							<view>
								<text>正确答案：</text>
								<text class="answer-text">{{item.answer}}</text>
							</view>
							<view class="analysis-text">解析：</view>
							<view v-if="item.analysis" v-html="item.analysis"></view>
							<view v-else>暂无解析</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="moveQuestion(-1)">
				<view class="cuIcon-cu-image">
					<text class="lg cuIcon-back text-gray"></text>
				</view>
				<view class="text-gray">上一题</view>
			</view>
			<view class="action" @click="moveQuestion(1)">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-right"></text>
				</view>
				<view class="text-gray">下一题</view>
			</view>
			<view class="action" @tap="tapAnalysis(questionIndex)">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-question"></text>
				</view>
				<view class="text-gray">解析</view>
			</view>
			<view class="action">
				<button size="mini" type="primary" @tap="tapSubmit()" data-target="modalCard">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	const data = require('utils/data1.json');
	export default {
		data() {
			return {
				name: uni.getStorageSync('name'),
				hour: 0,
				minute: 10,
				second: 0,
				questionIndex: 0,
				modalCard: null,
				questionList: [],
			}
		},
		onLoad(e) {
			this.getDataJson()
		},
		methods: {
			// 获取本地试题列表
			getDataJson(){
				uni.showLoading({
					title: '加载中...'
				})
				for (let i in data.questionGroups) {
					for (let j in data.questionGroups[i].questions) {
						data.questionGroups[i].questions[j].additional["userAnswer"] = "";
						data.questionGroups[i].questions[j].additional["showAnalysis"] = false;
						this.questionList = this.questionList.concat(data.questionGroups[i].questions[j])
					}
				}
				setTimeout(function(){
					uni.hideLoading();
				},3000);
			},
			// 选择选项  index  第几题     idx  第几个选项
			tapOption(index, idx) {
				this.questionList[index].additional.userAnswer = String.fromCharCode(idx + 65)
				if (this.questionList[index].additional.userAnswer == this.questionList[index].answer) {
					// 延迟跳下一题，目的显示当前选中的选项
					setTimeout(() => {
						this.moveQuestion(1)
						this.questionList[index].additional.showAnalysis = true
					}, 500)
				} else {
					this.questionList[index].additional.showAnalysis = true
				}
			},
			// 点击提交按钮
			tapSubmit() {
				let _this = this;
				var noDone = 0;
				for (let i in this.questionList) {
					if (this.questionList[i].additional.userAnswer == '') {
						noDone += 1;
					}
				}
				uni.showModal({
					content: `还有${noDone}题未做,确定提交？`,
					success(res) {
						if (res.confirm) {
							_this.confirmModal()
						}
					}
				})
			},
			//确认提交
			confirmModal() {
				let _this = this;
				var right = 0;
				var error = 0;
				for (let i in _this.questionList) {
					if (_this.questionList[i].additional.userAnswer == _this.questionList[i].answer) {
						right += 1;
					}
				}
				// 错误题目数量
				error = _this.questionList.length - right;
				// 正确率
				var accuracy = Math.round((right / (_this.questionList.length) * 100) * 100) / 100;
	
				uni.showModal({
					title: "答题情况",
					content: `共${_this.questionList.length}题，正确率：${accuracy}%，正确：${right}题，错误：${error}题`,
					showCancel: false,
					confirmText: "确定",
					success(res) {
						if (res.confirm) {
							_this.questionList = [];
							_this.hour = 0;
							_this.minute = 30;
							_this.second = 0;
							_this.getDataJson();
							_this.$forceUpdate();
							uni.setStorageSync('score1', accuracy);
							_this.Gotoindex();
						}
					}
				});
			},
			//回到首页 
			Gotoindex(){
				let _this = this;
				uni.reLaunch({
				   url: '/pages/answer/game',
				   success: (res) =>{
					   if (_this.accuracy != 0) {
					   	console.log('用户点击确定');
						_this.commonApi.uniSetStorage('title', '趣味答题');
						location.reload(location.href="/pages/answer/game");
					   }
				   }
				})
			},
			//滑动事件
			swiperChange(e) {
				let index = e.target.current;
				if (index != undefined) {
					this.questionIndex = index;
				}
			},
			//上一题、下一题
			moveQuestion(e) {
				if (e === -1 && this.questionIndex != 0) {
					this.questionIndex -= 1;
				}
				if (e === 1 && this.questionIndex < this.questionList.length - 1) {
					this.questionIndex += 1;
				}
			},
			// 显示解析
			tapAnalysis(index) {
				this.questionList[index].additional.showAnalysis = true
			},
			//题卡指定
			appointedQuestion(e) {
				this.modalCard = null;
				this.questionIndex = e;
			}
		}
	}
</script>

<style>
	.answer-text{
		color: #0081ff;
	}
	.bg{
		height: 110vh;
		width: 1003w;
		background-color: #0081ff;
		overflow: hidden;
	}
	.answer-bg{
		margin-top: 20px;
		z-index: -1;
		width: 100vw;
		height: 110vh;
		background-color: #0081ff;
		padding: 20px;
	}
	.analysis-text{
		color: #0081ff;
		font-weight: bold;
		font-size: 19px;
		text-shadow: 3px 3px 4px rgb(0 102 204 / 20%);
	}
	.answer-bg .content{
		padding: 10px;
		z-index: 0;
		width: 100%;
		height: 60vh;
		background-color: #f8f8f8;
		border-radius: 20px;
		margin-bottom: 20px;
	}
	.answer-bg .analysis{
		padding: 10px;
		z-index: 0;
		width: 100%;
		height: 35vh;
		background-color: #f8f8f8;
		border-radius: 20px;
	}
	.answer-bg .tabBar{
		z-index: 1;
		width: 100%;
		height: 40px;
		background-color: #f8f8f8;
		
	}
	page {
		background: #FFFFFF;
		border-top: 1px solid #f4f4f4;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	.on {
		color: #fff;
		background: #00A1E9;
	}
	
	.list-item {
		text-align: center;
		margin: 30rpx 20rpx;
		
	}
	.sub-btn {
		position: absolute;
		right: 30rpx;
	}
	.swiper-box {
		height: 90vh;
		margin-bottom: 200rpx;
	
	}
	.test-analysis {
		margin-top: 30rpx;
		border-top: 1px solid #f4f4f4;
		
	}
	text {
		color: gray;
	}
	.test-option {
		margin-top: 5rpx;
		padding: 5px;
		display: flex;
		border-radius: 6rpx;
	}
	.test-subject {
		display: flex;
		
	}
	rich-text {
		width: 600rpx;
		margin-top: 10rpx;
	}
	.test-option-num {
		margin-right: 10rpx;
		width: 60rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		border: 1px solid lightgray;
		border-radius: 50%;
	}
	.test-card-title {
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		font-weight: bold;
		border-bottom: 1px solid #f4f4f4;
	}
	
	.test-card-list {
		padding: 30rpx;
		max-height: 800rpx;
		overflow-y: scroll;
	}
	.test-card-list view {
		float: left;
		margin: 30rpx 20rpx;
		width: 80rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 50%;
		border: 1px solid lightgray;
	}
</style>