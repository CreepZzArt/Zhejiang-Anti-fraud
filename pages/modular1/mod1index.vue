<template>
	<view class="bg">
		<view class="container">
			<view class="limitbean">感谢您获得{{free}}次免费抽奖机会</view>
			<view class="frame_view">
				<view class="frame_row" style="margin-top: 48rpx;">
					<view class="frame_item" :class="'item' + color[0]">
						<image :src="award[0].img"></image>
						<text>{{ award[0].name }}</text>
					</view>
					<view class="frame_item" :class="'item' + color[1]">
						<image :src="award[1].img"></image>
						<text>{{ award[1].name }}</text>
					</view>
					<view class="frame_item" :class="'item' + color[2]">
						<image :src="award[2].img"></image>
						<text>{{ award[2].name }}</text>
					</view>
				</view>
 
				<view class="frame_row">
					<view class="frame_item" :class="'item' + color[7]">
						<image :src="award[7].img"></image>
						<text>{{ award[7].name }}</text>
					</view>
					<!-- 抽奖 -->
					<view style="text-align: center;color: #fff;">
						<view style="font-size: 36rpx;">{{free}}次</view>
						<view style="font-size: 28rpx;">免费次数</view>
					</view>
					<view class="frame_item" :class="'item' + color[3]">
						<image :src="award[3].img"></image>
						<text>{{ award[3].name }}</text>
					</view>
				</view>
 
				<view class="frame_row">
					<view class="frame_item" :class="'item' + color[6]">
						<image :src="award[6].img"></image>
						<text>{{ award[6].name }}</text>
					</view>
					<view class="frame_item" :class="'item' + color[5]">
						<image :src="award[5].img"></image>
						<text>{{ award[5].name }}</text>
					</view>
					<view class="frame_item" :class="'item' + color[4]">
 
						<image :src="award[4].img"></image>
						<text>{{ award[4].name }}</text>
					</view>
				</view>
			</view>
			<view class="luckbtulist">
				<view class="luckone" @click="clickLuck">
					<p style="margin-top: 30upx;">免费抽奖</p>
				</view>
				<view class="luckfive" @click="clickLuckFive">
					<p style="margin-top: 30upx;">分享加一次</p>
				</view>
			</view>
			<view class="lucktips">
				<view class="lucktab">
					<view class="luckrule" @click="toggleTabs(0)" :style="styleObject">活动规则</view>
					<view class="record" @click="toggleTabs(1)" :style="styleObject1">获奖记录</view>
				</view>
				<view v-show="nowIndex==0" class="ruleinof">
					<view class="ruleconten">1.本活动每日可免费抽奖一次，分享再次获得一次免费抽奖</view>
					<view class="ruleconten">2.本活动所中奖品需要登录QQ并填写您的收货地址</view>
					<view class="ruleconten">3.活动最终解释权归主办方</view>
				</view>
				<view class="ruleinof" v-if="isif" v-show="nowIndex==1">
					<view style="width: 100%;height: 496rpx;  margin-top: 40rpx;overflow-y:auto;">
						<view class="recordlist">
							<view>时间:{{cjtime}}</view>
							<view>{{prize}}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 跳转 -->
			<navigator url="/pages/modular1/hackLogin">
				<view class="hackluckone" @click="clickHack">
					<p class = "hacktext">登录领取奖品</p>
				</view>
			</navigator>
		</view>
		<!-- 弹出窗口 -->
		<view :class="{'share-box': shareState}" @click="handleHiddenShare">
			<view v-if="lucktype==0" class="nopop" :class="{'share-show': shareState}">
				<view style="margin-top: 60rpx;margin-left: 180rpx;margin-bottom: 30rpx;">
					<image src="https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_36_52_5.png" mode=""
						style="width: 124rpx;height: 144rpx;"></image>
				</view>
				<view class="poptitle">今日已经没有抽奖机会了</view>
				<view class="popbtn">确定</view>
			</view>
			<!-- 单抽 -->
			<view v-else-if="lucktype==1" class="onepop" :class="{'share-show': shareState}">
				<view class="popconten">
					<image :src="prizeimg" mode="" style="width: 190rpx;height: 190rpx;"></image>
					<view style="margin-top: 20rpx;color: #4A4A4A;font-size: 28rpx;">{{prize}}</view>
				</view>
				<view class="popbtn" style="margin-top: -90rpx;">确定</view>
			</view>
			<!-- 分享机会用完 -->
			<view v-if="lucktype==2" class="nopop" :class="{'share-show': shareState}">
				<view style="margin-top: 60rpx;margin-left: 180rpx;margin-bottom: 30rpx;">
					<image src="https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_36_52_5.png" mode=""
						style="width: 124rpx;height: 144rpx;"></image>
				</view>
				<view class="poptitle">今日已经没有分享机会了</view>
				<view class="popbtn">确定</view>
			</view>
		</view>
	</view>
</template>
 
<script>
	//计数器
	var interval = null;
	//值越大旋转时间越长  即旋转速度
	var intime = 100;
	export default {
		data() {
			return {
				//分享次数
				freenum:0,
				//抽奖记录的显示
				isif: false,
				cjtime: "",
				// nowIndex为0的时候显示抽奖规则，nowIndex为1的时候显示抽奖记录
				nowIndex: 0,
				// 九宫格初始化的位置
				color: [0, 0, 0, 0, 0, 0, 0, 0],
				//chance中奖率   
				award: [{
						img: 'https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_35_36_10.png',
						name: '谢谢参与',
						chance: 0,
						
					},
					{
						img: 'https://s3.bmp.ovh/imgs/2022/07/01/e49dfcdabf22d5a9.png',
						name: 'RTX3080TI',
						chance: 25,
						
					},
					{
						img: 'https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_35_36_10.png',
						name: '谢谢参与',
						chance: 0,
						
					},
					{
						img: 'https://s3.bmp.ovh/imgs/2022/07/01/c515cc139541acab.png',
						name: '笔记本',
						chance: 25,
						
					},
					{
						img: 'https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_35_36_10.png',
						name: '谢谢参与',
						chance: 0,
						
					},
					{
						img: 'https://s3.bmp.ovh/imgs/2022/07/01/3e6a7b94a984a150.png',
						name: '三星显示器',
						chance: 25,
						
					},
					{
						img: 'https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_35_36_10.png',
						name: '谢谢参与',
						chance: 0,
						
					},
					{
						img: 'https://s3.bmp.ovh/imgs/2022/07/01/c36e3373b30905ba.png',
						name: '冰箱',
						chance: 25,
						
					}
				], //接收数组
				Luck: true, //防置重复点击
				lucktype: 2, //判断奖品类型
				luckPosition: 0, //停止位置
				prize: '', //奖品，
				prizeimg: 'https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_35_36_10.png', //奖品图片
				// 弹窗按钮
				shareState: false,
				// tab切换
				styleObject: {
					'border-bottom': '3px solid #A24A1E',
				},
				styleObject1: '',
				//免费抽奖次数
				free: 1,
				// 判断类型
				payout: 0
			};
		},
		created() {
			//获取当前时间戳
			var date = new Date().getTime();
			// 把当前的时间戳转换成yyy-MM-dd HH:mm:ss
			function timestampToTime(timestamp) {
				var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
				var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
				var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
				return Y + M + D + h + m + s;
			}
			var hour = timestampToTime(date)
			console.log(hour);
			this.cjtime = hour;
		},
		methods: {
			// 记录切换nowIndex(0)的时候显示活动规则nowIndex(1)的时候显示奖品记录
			toggleTabs(index) {
				this.nowIndex = index;
				if (index == 1) {
					this.styleObject1 = {
						'border-bottom': '3px solid #A24A1E',
					}
					this.styleObject = {}
				} else {
					this.styleObject = {
						'border-bottom': '3px solid #A24A1E',
					}
					this.styleObject1 = {}
				}
			},
			// 关闭中奖弹窗
			handleHiddenShare() {
				this.shareState = false;
			},
			// 点击抽奖s
			clickLuck() {
				//抽奖记录的显示
				setTimeout(() => {
					this.isif = true;
				}, 8000);
				if (this.Luck == false) { //防止过度点击
					return;
				}
				this.Luck = false;
				// }
				//判断免费次数		
				if (this.free == 0) {
					this.shareState = true
					this.lucktype = 0
					this.Luck = true;
					return;
				}
				//判断分享次数
				var arr = [];
				//根据概率循环位置
				for (var i = 0; i < this.award.length; i++) {
					for (var k = 0; k < this.award[i].chance; k++) {
						arr.push(i);
					}
				}
				console.log(arr, "位置");
				//随机打乱数组
				for (let i = 0, len = arr.length; i < len; i++) {
					let index = parseInt(Math.random() * (len - 1));
					let tempValue = arr[i];
					arr[i] = arr[index];
					arr[index] = tempValue;
				}
				//从数组中随机抽取一个位置
				var a = Math.ceil(Math.random() * 10);
				if (this.free != 0) {
					this.free = this.free - 1 //抽奖次数减1
				} 
				if (this.free == 0) {
					this.payout = 1
				}
				this.luckPosition = arr[a]; //位置
				this.prize = this.award[arr[a]].name //奖品名字
				this.prizeimg = this.award[arr[a]].img //奖品图片
				// 设置this
				var e = this;
				//清空计时器
				clearInterval(interval);
				var index = 0;
				//循环设置每一项的背景图
				interval = setInterval(function() {
					var c = [0, 0, 0, 0, 0, 0, 0, 0];
					if (index > 7) {
						index = 0;
					}
					c[index] = 1;
					e.color = c;
					index++;
				}, intime);
				e.stop(e.luckPosition);
			},
 
			// 停止
			stop(which) {
				var e = this;
				//清空计数器
				clearInterval(interval);
				//初始化当前位置
				var current = -1;
				var color = e.color;
				for (var i = 0; i < color.length; i++) {
					if (color[i] == 1) {
						current = i;
					}
				}
				//下标从1开始
				var index = current + 1;
				e.stopLuck(which, index, intime, 10);
			},
			/**
			 * which:中奖位置
			 * index:当前位置
			 * time：时间标记
			 * splittime：每次增加的时间 值越大减速越快
			 */
			stopLuck(which, index, time, splittime) {
				var e = this;
				//值越大出现中奖结果后减速时间越长
				var color = e.color;
				setTimeout(function() {
					//重置前一个位置
					var c = [0, 0, 0, 0, 0, 0, 0, 0];
					if (index > 7) {
						index = 0;
					}
					//当前位置为选中状态
					c[index] = 1;
					e.color = c;
					//如果旋转时间过短或者当前位置不等于中奖位置则递归执行
					//直到旋转至中奖位置
					if (time < 400 || index != which) {
						//越来越慢
						splittime++;
						time += splittime;
						//当前位置+1
						index++;
						e.stopLuck(which, index, time, splittime);
					} else {
						//中奖
						e.shareState = true
						e.Luck = true;
						e.lucktype = 1
						if (e.payout == 1) {
							e.limitnum = e.limitnum - 3
						}
					}
				}, time);
			},
			// 分享加一次,只能分享一次
			clickLuckFive() {
				this.free = this.free + 1;
				this.freenum = this.freenum + 1;
				if (this.freenum >= 2) {
					this.shareState = true
					this.lucktype = 2
					this.free = this.free - 1;
					this.Luck = true;
					return;
				}
			}
		
		},
 
 
	};
</script>
 
<style>
	.bg {
		width: 100%;
		min-height: 100vh;
		background-color: #136eb7;
		background-size: 100% 100%;
	}
	.container {
		overflow: hidden;
	}
 
	.limitbean {
		width: 100%;
		color: #fff;
		text-align: center;
		margin-top: 80rpx;
		font-size: 30rpx;
		margin-bottom: 24rpx;
	}
 
	.frame_view {
		width: 648rpx;
		height: 688rpx;
		margin: 0 auto;
		border-radius: 30rpx;
		background: url("https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_37_50_4.png") no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
	}
 
	.frame_row {
		width: 520rpx;
		height: 168rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-left: 64rpx;
		margin-bottom: 20rpx;
 
	}
 
	.frame_item {
		width: 168rpx;
		height: 168rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		font-size: 20px;
		/* box-sizing:border-box; */
		background: #FFFFFF;
		/* 	border-radius: 17px; */
		/* 	box-shadow: 0px 6px 0px 0px rgba(236,231,228,1); */
		background: url("https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_41_5_0.png") no-repeat;
		background-size: 100% 100%;
 
 
	}
 
	.frame_item image {
		width: 80rpx;
		height: 80rpx;
		display: block;
 
	}
 
	.frame_item text {
		font-size: 26rpx;
		display: block;
		width: 100%;
		text-align: center;
		color: #818181;
		margin-top: -40rpx;
	}
 
	.item1 {
		background: url("https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_42_16_6.png") no-repeat;
		background-size: 100% 100%;
		box-shadow: 0px 10px 20px 0px rgba(170,56,0,1), 0px 0px 20px 0px rgba(196,58,215,1), 0px 4px 0px 0px rgba(255,255,255,0.29);
 
	}
 
	.luckbtulist {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}
	.hackluckone{
		width: 610upx;
		height: 100upx;
		background: linear-gradient(360deg, #E4392C 0%, #F6A261 100%);
		box-shadow: 0px 10px 20px 0px rgba(153, 0, 0, 0.81), 0px 5px 0px 0px rgba(195, 48, 7, 1), 0px 4px 0px 0px rgba(255, 255, 255, 0.23);
		border-radius: 50upx;
		color: aliceblue;
		margin: 0 auto;
		margin-bottom: 3%;
	}
	.luckone {
		width: 310upx;
		height: 100upx;
		background: linear-gradient(360deg, #E4392C 0%, #F6A261 100%);
		box-shadow: 0px 10px 20px 0px rgba(153, 0, 0, 0.81), 0px 5px 0px 0px rgba(195, 48, 7, 1), 0px 4px 0px 0px rgba(255, 255, 255, 0.23);
		border-radius: 50upx;
		margin-right: 28rpx;
		text-align: center;
	}
 
	.luckfive {
		width: 310upx;
		height: 100upx;
		background: linear-gradient(180deg, #FFC3AC 0%, #D43EDC 100%);
		box-shadow: 0px 10px 20px 0px rgba(170, 56, 0, 1), 0px 5px 0px 0px rgba(196, 58, 215, 1), 0px 4px 0px 0px rgba(255, 255, 255, 0.29);
		border-radius: 50px;
		text-align: center;
	}
 
	.lucktips {
		width: 686rpx;
		height: 450rpx;
		background: #0d62ad;
		border-radius: 20rpx;
		margin: 0 auto;
		margin-top: 70rpx;
	}
 
	.lucktab {
		width: 580rpx;
		height: 104rpx;
		border-bottom: 1rpx solid #e3672a;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 28rpx;
		color: #e3672a;
		font-weight: 600;
	}
 
	.lucktab view {
		height: 100%;
		line-height: 104rpx;
	}
 
	.action {
 
		border-bottom: 3px solid #e3672a;
 
	}
 
	.ruleinof {
		width: 584rpx;
		height: 496rpx;
		margin: 0 auto;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #D97645;
 
	}
 
	.ruleinof .ruleconten {
		margin-top: 40rpx;
		line-height: 40rpx;
	}
 
	.recordlist {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
 
 
	 /* 弹出窗口 */
	.share-box {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		bottom: 0rpx;
		right: 0rpx;
		background-color: rgba(0, 0, 0, 0.4);
		transition: .3s;
		z-index: 999;
	}
 
	.nopop {
		display: none;
		width: 470rpx;
		height: 455rpx;
		background: #FFFFFF;
		border-radius: 30px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -228rpx;
		/* 高度的一半 */
		margin-left: -235rpx;
		/* 宽度的一半 */
	}
 
	.share-show {
		display: block !important;
	}
 
	.poptitle {
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #4A4A4A;
		text-align: center;
 
	}
 
	.popbtn {
		width: 310upx;
		height: 100upx;
		background: linear-gradient(360deg, #E4392C 0%, #F6A261 100%);
		box-shadow: 0px 10px 10px 0px rgba(153, 0, 0, 0.81), 0px 5px 0px 0px rgba(195, 48, 7, 1), 0px 4px 0px 0px rgba(255, 255, 255, 0.23);
		border-radius: 50upx;
		margin-right: 28rpx;
		text-align: center;
		line-height: 100upx;
		font-size: 32upx;
		color: #fff;
		margin: 0 auto;
		margin-top: 36upx;
	}
 
	.onepop {
		display: none;
		width: 696rpx;
		height: 872rpx;
		background: url("https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_41_31_5.png") no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -438rpx;
		/* 高度的一半 */
		margin-left: -350rpx;
		/* 宽度的一半 */
		overflow: hidden;
	}
 
	.popconten {
		width: 470rpx;
		height: 472rpx;
		background: url("https://cdnapp.jixianzhilu.cn/circle_image/2021_06_8_14_39_28_5.png") no-repeat;
		background-size: 100% 100%;
		margin: 0 auto;
		margin-top: 340rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
 
	}
 
	.popcontenlist {
		width: 470rpx;
		height: 300rpx;
		margin: 0 auto;
		margin-top: 370rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
 
	}
 
	.poplucklist {
		width: 88rpx;
		height: 180rpx;
		margin-left: 56rpx;
	}
	.hacktext{
		margin-top: 30upx;
		line-height:60px;
		text-align: center;
	}
</style>