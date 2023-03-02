<template>
	<view>
		<!-- 会话 -->
		<view class="HUI">
			<!-- 打开会话框 -->
			<view class="liaoT">
				<uni-list>
				    <uni-list :border="true">
						<uni-list-chat title="哈哥一期炒股群（56）" :avatar-list="avatarList1" note="这两支股怎么相差相差那么大？" time="2022-08-21 12:56" badge-positon="left" badge-text="dot" @click="checkHandle()" to="../modular4/liaoTian"  link></uni-list-chat>	
				        <uni-list-chat title="女儿" avatar="https://s3.bmp.ovh/imgs/2022/08/24/67b268edca58ce56.jpg" note="谢啦,老爸!" time="2022-08-19 21:20" badge-positon="left" badge-text="dot"></uni-list-chat>
				        <uni-list-chat title="相亲相爱一家人(3)" :avatar-list="avatarList2" note="吃啊" time="2022-08-18 20:23" badge-positon="left" badge-text="dot"></uni-list-chat>
						<uni-list-chat title="老婆" avatar="https://s3.bmp.ovh/imgs/2022/08/24/aa3c1e8833f3cfcd.jpg" note="买肉没哦" time="2022-08-07 12:20" badge-positon="left" badge-text=""></uni-list-chat>
				        <uni-list-chat title="炒股——涛哥" avatar="https://ftp.bmp.ovh/imgs/2020/08/23026bdff9d241ae.jpg" note="拉你进群" time="2022-08-07 9:45" badge-positon="left" badge-text=""></uni-list-chat>
						<uni-list-chat title="公司小王" avatar="https://s3.bmp.ovh/imgs/2022/08/24/01887b80044a717e.jpg" note="好的,收到了,我后天去交接" time="2022-08-02 15:23" badge-positon="left" badge-text=""></uni-list-chat>
				    </uni-list>
				</uni-list>
			</view>
			<!-- tabbar -->
			<view class="tabr">
				<view class="add" v-for="(item,index) in list" :key="index">
					<view class="addIcon"><image :src="item.iconPath"></image> </view>
				    <text class="addBar-text">{{item.text}}</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		
	        data() {
				
				
	            return {
					
	                list: [{
	                     "text": "信息",
	                     "iconPath": '/static/img/xinxi.png' ,
	                    
	                   },
	                   {
	                     "text": "好友",
	                     "iconPath": '/static/img/tongXunLu.png',
	                    
	                     },
	                     {
	                       "text": "我的",
	                       "iconPath": '/static/img/wo.png',
	                       
	                     }],
						
						  avatarList1: [{
						                 url: 'https://ftp.bmp.ovh/imgs/2020/08/ba7c46ed03a5b34f.jpg'
						             }, {
						                 url: 'https://ftp.bmp.ovh/imgs/2020/08/987cf84154880a31.jpg'
						             }, {
						                 url: 'https://ftp.bmp.ovh/imgs/2020/08/23026bdff9d241ae.jpg'
						             },
									 {
										 url:'https://ftp.bmp.ovh/imgs/2020/08/80b0daa297d61470.jpg'
									 }],
					   avatarList2:[{
						   url:'https://ftp.bmp.ovh/imgs/2020/08/80b0daa297d61470.jpg'
					   }, {
						   url:'https://s3.bmp.ovh/imgs/2022/08/24/67b268edca58ce56.jpg'
					   },{
						   url:'https://s3.bmp.ovh/imgs/2022/08/24/aa3c1e8833f3cfcd.jpg'
					   }]
	            }
	        },
	        methods: {
	            tabChange(index) {
	                console.log(index)
	            }
	        },
			checkHandle(){
				
				uni.navigateTo({
					
					url:'../modular4/yeMian'
				})
			}
			}
</script>

<style lang="scss">
     .HUI{
		 width: 100%;
         height: 100%;
		 
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items:stretch;
		 .tabr{
			 width: 100%;
             height: 8vh;
			 background-color:#f2f2f2;
			 position: fixed;
			 bottom: 0;
			 display: flex;
		     justify-content: space-around;
			 .add{
				 display: flex;
				 flex-direction:column;
				 justify-content: center;
				  .addIcon{
					  margin-top: 10rpx;
					  margin: 0 auto;
				   image{
					 height:40rpx;
				     width: 40rpx;
					 
				 }
			 }
			 .addBar-text{
			
				 size: 3rpx;
			 }
			 }
			
		 }
		 
	 }
</style>
