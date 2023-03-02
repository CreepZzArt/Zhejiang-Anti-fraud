<template>
	<view class="content">
		<navigator url="/pages/modular1/mod1index">
			<view class="back">
				<u-icon name="arrow-left" size="60"></u-icon>
			</view>
		</navigator>
		<view class="form">
			<view class="H1">添加QQ授权账号</view>
			<input type="text" placeholder="QQ号码" placeholder-style="margin-bottom: 20px;font-weight: 400;font-size: 20px;color:rgb(200,200,200)">
			<input type="password"  placeholder="密码" placeholder-style="font-weight: 400;font-size: 20px;color:rgb(200,200,200)">
			<br>
			<navigator url="/pages/modular1/LoadingPage">
				<view class="button">登录</view>
			</navigator>
		</view>
		<div class="footer">
			  <span>手机号登录</span>
			  <text>丨</text>
			  <span>找回密码</span>
			  <text>丨</text>
			  <span>扫码授权登录</span>
		</div>
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
			hackin(){
				
			},
		}
	}
</script>

<style>
	
	text{
		opacity: 0.3;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	.back{
		margin-right: 92vw;
		margin-top: 5%;
	}
	.form{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 60vh;
	}
	.H1{
		width: 100vw;
		margin-top: 5vw;
		margin-right: -2vh;
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 20px;
	}
	.button{
		margin-bottom: 20px;
		width:  95vw;
		height: 50px;
		background-color: #00ceff;
		text-align: center;
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius: 10upx;
		color: white;
	}
	input {
		margin-top:0px;
	    margin-left: 0px;
		margin-bottom: 30px;
	    font-weight: 200;
	    width: 95vw;
	    height: 50px;
	    border: none;
	    border-bottom: 1px solid #939393;
	    background-color: rgba(0, 0, 0, 0.001);
	    /*transparent*/
	}
	input:focus {
	    outline: none;
	}
	input::placeholder {
	    color: white;
	}
	form a{
	    margin: 20px;
	}
	.footer{
		margin-top: 55vh;
		margin-right: 1vw;
		margin-bottom: 2vh;
	}
	span{
	  color: #fffff;
	  font-weight: 800;
	  margin-left: 10px;
	  margin-right: 10px;
	}
	.footer{
	  cursor: pointer;
	}

</style>