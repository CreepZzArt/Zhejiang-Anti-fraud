<!-- 蓝色登录页面2 -->
<template>
	<view style="height:100vh;background: #fff;">
		<view class="img-a">
			<view class="t-b">
				全民反诈，在行动
				<br />
				欢迎使用，浙反诈APP
			</view>
		</view>
		<view class="login-view" style="">
			<view class="t-login">
				<form class="cl">
					<view class="t-a">
						<text class="txt">手机号</text>
						<input type="number" name="account" placeholder="请输入您的手机号" maxlength="11" v-model="username" />
					</view>
					<view class="t-a">
						<text class="txt">密码</text>
						<input type="password" name="code" maxlength="18" placeholder="请输入您的密码" v-model="password" />
					</view>
					<view class="t-a">
						<text class="txt">重复密码</text>
						<input type="password" name="code" maxlength="18" placeholder="请重复输入您的密码" v-model="confirmpassword" />
					</view>
					<button @click="register()">注 册</button>
					<view class="reg" @tap="reg()">已有账号，点此登录</view>
				</form>
				
			</view>
		</view>
	</view>
</template>
<script>
import setting from '../../static/js/setting.js'
export default {
	data() {
		return {
			username: '',
			password: '',
			confirmpassword: ''
		};
	},
	onLoad() {},
	methods: {
		//当前登录按钮操作
		register(){
			var re=/^[0-9]*$/
			if ((this.username.length !=11 )|| (!re.test(this.username))) {
				uni.showToast({
					icon: 'none',
					title: '请正确输入11位手机号'
				});
				return;
			}
			else if (this.password.length < 6) {
				uni.showToast({
					icon: 'none',
					title: '密码最短为 6 个字符'
				});
				return;
			}
			else if(this.password!=this.confirmpassword){
				uni.showToast({
					icon:'none',
					title:'两次密码输入不一致'
				});
			}
			else{
				uni.request({
					method: 'post',
					url: setting.url+'/user/userRegister',
					data:{
						account:this.username,
						password:this.password,
					},
					success(res) {
						console.log(res.data)
						if(res.data.code==-1){
							uni.showToast({
								icon:'none',
								title:'此账号已被注册，请更换手机号'
							});
						}
						else{
							
							uni.showToast({
							icon:'none',
							title:'账号注册成功，已登录'
							})
							uni.reLaunch({
								url:'../index/index'
							})
						}
						
					}
				
				})
			}
		},
		//注册按钮点击
		reg() {
			uni.navigateTo({
				url:'../login/login'
			})
		},
		//等三方微信登录
		wxLogin() {
			uni.showToast({ title: '微信登录', icon: 'none' });
		},
		//第三方支付宝登录
		zfbLogin() {
			uni.showToast({ title: '支付宝登录', icon: 'none' });
		}
	}
};
</script>
<style>
.txt {
	font-size: 32rpx;
	font-weight: bold;
	color: #333333;
}
.img-a {
	width: 100%;
	height: 450rpx;
	background-image: url(https://zhoukaiwen.com/img/loginImg/head.png);
	background-size: 100%;
}
.reg {
	font-size: 28rpx;
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
	font-weight: bold;
	background: #f5f6fa;
	color: #000000;
	text-align: center;
	margin-top: 30rpx;
}

.login-view {
	width: 100%;
	position: relative;
	margin-top: -120rpx;
	background-color: #ffffff;
	border-radius: 8% 8% 0% 0;
}

.t-login {
	width: 600rpx;
	margin: 0 auto;
	font-size: 28rpx;
	padding-top: 80rpx;
}

.t-login button {
	font-size: 28rpx;
	background: #2796f2;
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
	font-weight: bold;
}

.t-login input {
	height: 90rpx;
	line-height: 90rpx;
	margin-bottom: 50rpx;
	border-bottom: 1px solid #e9e9e9;
	font-size: 28rpx;
}

.t-login .t-a {
	position: relative;
}

.t-b {
	text-align: left;
	font-size: 42rpx;
	color: #ffffff;
	padding: 130rpx 0 0 70rpx;
	font-weight: bold;
	line-height: 70rpx;
}

.t-login .t-c {
	position: absolute;
	right: 22rpx;
	top: 22rpx;
	background: #5677fc;
	color: #fff;
	font-size: 24rpx;
	border-radius: 50rpx;
	height: 50rpx;
	line-height: 50rpx;
	padding: 0 25rpx;
}

.t-login .t-d {
	text-align: center;
	color: #999;
	margin: 80rpx 0;
}

.t-login .t-e {
	text-align: center;
	width: 250rpx;
	margin: 80rpx auto 0;
}

.t-login .t-g {
	float: left;
	width: 50%;
}

.t-login .t-e image {
	width: 50rpx;
	height: 50rpx;
}

.t-login .t-f {
	text-align: center;
	margin: 150rpx 0 0 0;
	color: #666;
}

.t-login .t-f text {
	margin-left: 20rpx;
	color: #aaaaaa;
	font-size: 27rpx;
}

.t-login .uni-input-placeholder {
	color: #aeaeae;
}

.cl {
	zoom: 1;
}

.cl:after {
	clear: both;
	display: block;
	visibility: hidden;
	height: 0;
	content: '\20';
}
</style>
