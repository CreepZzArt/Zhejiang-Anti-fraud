<template>
	<view id="overlay" class="overlay">
		<view class="overlay-boby">
			<view class="overlay-litle">您是否已满18岁<br>Are you over 18 years old?<br><br></view>
			<view class="overlay-description">以下内容可能不适合未满18岁的人群观看，我们需要确认您的年龄。<br></view>
			<view class="overlay-description">The following may not be suitable for people under the age of 18 and we
				need to confirm your age.</view>
			<view class="overlay-button-wrapper">
				<button  @click='checkRadioFun()' class="overlay-button yes">YES</button>
				<button  @click='Goback()'  class="overlay-button no">NO</button>
			</view>
		</view>
		<view id="mongban" >
		<view ref="pay" class="pay" :class="{'colordisplay':display}">
			<view class="card">
				<view class="card-top">
					<view class="Title">使用须知</view>
					<view class="text">1.独家资源仅此一家！你想不到这里都有。</view>
					<br>
					<br>
					<view class="text">2.资源特殊网站采取收费制度。</view>
					<br>
					<br>
					<view class="text">3.如果您是第一次访问网站那么需要您提交<span>5元保证金</span>成为<span>一级</span>会员才能正常访问。</view>
					<br>
					<br>
					<view class="text">4.网站可能会冲击您的三观，希望您深思熟虑后决是否进入网站。</view>
					<br>
					<br>
					<view class="text">5.有严重高血压、冠心病等疾病的患者应禁止或谨慎访问网站。</view>
					<button  @click='join()' class="join">访问网站</button>
				</view>
			</view>
			   
		</view>
		
		</view>
		<view class="scare" v-if="videoState == true" >
			<video class="video" :src="videoSrc" controls="controls" autoplay></video>
		</view>
	</view>
</template>
<script> 
  
    export default {
		name: 'pay',
		data() {
			return {
				 display:true,
			}
		},
		methods: {
			checkVideoFun(){

			uni.showLoading({
			  title: '加载中'
			                });
			setTimeout(function () {
			    uni.hideLoading();
			     }, 2000);
			this.videoState = true;
			this.videoSrc = videos;
			   			},
			masksCloseFun(){
			this.videoState = false;
			uni.showToast({
				title: '必须支付',
				icon: 'none',
				duration: 2000
			})
			   		},
			checkRadioFun:function(){
			uni.showLoading({
			  title: '加载中'
			                });
			setTimeout(function () {
			    uni.hideLoading();
			     }, 1000);		
			this.display=false
			},
			Goback(){
				uni.switchTab({
				   url: '/pages/index/index'
				})
			},
			join(){
				uni.navigateTo({
					url:'../modular3/pay'
				})
			},
			       	
		},
		
	}
</script>
<style>
	
	. {
		margin: 0;
		/* display: block; */
	}
    .colordisplay{
		display: none;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	 .overlay-boby, .scare {
     position: fixed;
     top: 0;
     left: 0;
     height: 100vh;
     width: 100vw;
    } 
	.overlay-litle {
		color: black;
		font-size: 24px;
		font-weight: 900;
		line-height: 1;
		margin-bottom: 20px;
	}

	.overlay-button {
		display: inline-flex;
		align-items: center;
		height: 40px;
		padding-right: 24px;
		padding-left: 24px;
		font-size: 16px;
		font-weight: 500;
		line-height: 1;
		border-radius: 4px;
		margin: 4px;
		cursor: pointer;
		
	}

	.overlay-buttons-wrapper {
		margin: 24px -8px -8px;
	}
	.join{
		background-color: #4278CA;
		color: aliceblue;
		border: #4d4d4d 1px solid;
		margin-top:5%;
	}
	.yes {
		background-color: #ff0000;
		color: aliceblue;
		border: #4d4d4d 1px solid;
	}
    .no {
		border: #4d4d4d 1px solid;
	}
	.overlay-description {
		display: flex;
		font-size: 16px;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.5);
		line-height: 1.25;
		margin-bottom: 16px;
	}

	.overlay-boby {
		max-width: 500px;
		text-align: center;
		font-family: "Inter", sans-serif;
		z-index: 0;
		display: flex;
		flex-direction: column;
	   justify-content: center;
	   align-items: center;
		background-color: rgb(255, 255, 255);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center 0;
		padding-right: 24px;
		padding-left: 24px;
	}
	.video{
		height: 100%;
		width: 420px; 
		object-fit: cover;
	}
	.pay{
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		padding: 250px 20px 0 0;
		background-color:white;
	}
	.card{
		position: fixed;
		top: 0;
		left: 0;
		z-index:-3;
		padding: 20px;
		height: 100vh;
		width: 100vw;
		background-image: url('https://ftp.bmp.ovh/imgs/2020/08/80b0daa297d61470.jpg');
	}
	.card-top{
		z-index: -2;
		position: relative;
		padding: 10px;
		top: 0px;
		left:0;
		right: 0px;
		bottom: 0px;
		height:100%;
		width:100%;
		background-color: rgba(0,0,0,0.8);
		border-radius: 20px;
		overflow: hidden;
	}
	.card-top:before{
		border-radius: 40px;
		height: 90%;
		width:0%;
		content: "";
		position: absolute;
		background: inherit;
		box-shadow: inset 0 0 0 200px rgba(255,255,255,0.2);
		filter: blur(10px);
	}
	.Title{
		z-index: -1;
		position: relative;
		color: aliceblue;
		font-size:30px;
		margin-left:30%;
		margin-right:20%;
		margin-bottom: 10px;
	}
	span{
		color:red;
		font-weight: 600;
	}
	.text{
		color: #fff;
		font-size: 20px;
		margin: 5px;
	}
</style>

