<template>
	<view>
		<!-- 账号安全设置 -->
		<view class="account-security" @click="goToAccount()">
			<text class="text1 Default-color three-title">账号安全设置</text>
			<view class="set-account">
				<text class="three-title">账号与安全</text>
				<text class="Default-color three-title">></text>
			</view>
		</view>
		<!-- 清楚缓存-->
		<view class="clear-cache" @click="clear()">
			<text class="text1 Default-color three-title">清楚缓存</text>
			<view class="set-clear">
				<text class="three-title">清楚缓存</text>
				<text class="Default-color three-title">{{item}}&nbsp;&nbsp;></text>
			</view>
		</view>
	   <view>
		     <button @click="back()" class="btn5 theme-colors"><text class="confirm">确定</text></button>
			 <button @click="out()" class="btn6 theme-colors"><text class="confirm">退出登录</text></button>
	   </view>
	</view>
</template>

<script>
export default {
		data() {
			return {
				item: '28MB'
			}
		
		},
		methods:{
			out(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			back(){
				uni.switchTab({
					url:'../index/my'
				})
			},
			clear(){
				this.item='0KB'
			},
			goToAccount(){
				uni.navigateTo({
					// 记得改路径
					url:'./account'
				})
			}
		}
	}
</script>

<style>
	@import url('@/static/total.css');
	body{
		background-color: #F1F1F1;
	}
	.account-security,
	.clear-cache{
		width: 90%;
		margin:4vh auto;
		/* padding: 5vw; */
	}
	.text1{
		padding: 5vw;
	}
	.set-account,
	.set-clear{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		border-radius: 5px;
		width: 100%;
		height: 8vh;
		padding: 5vw;
		margin-top: 2vh;
	}
	.btn5{
		width: 90%;
		margin:auto;
		margin-bottom: 20px
	}
	.btn6{
		width: 90%;
		margin:auto;
		background: #e10000;
	}
	.confirm{
		color: white;
		line-height: 7vh;
	}

</style>