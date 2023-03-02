<template>
	<view class="content">
		<!-- 上 -->
		<view class="explain">
		   <text class="details three-title">举报详情</text>
		   <text class="optional  Default-color three-title">（选填项）</text>	
		</view>
		<!-- top小卡片 -->
		<view class="inform-top">
			<!-- 诈骗类型 -->
			<view class="zhaPian">
			    <text class="Fraud-type  three-title"><text style="color: red;">*</text>诈骗类型</text>
				<view class="">
					<uni-data-picker class="Region" placeholder="请选择" popup-title="请选择诈骗类型" :localdata="dataTree1" v-model="classes"
					@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed"></uni-data-picker>
				</view>
			    <!-- <text class="Fraud-type Default-color  three-title">请选择&nbsp;&nbsp;&nbsp;></text> -->
			</view>
			<view class="hr"></view>
			<!-- 举报地 -->
			<view class="zhaPian">
			    <text class="Fraud-locaton  three-title"><text style="color: white;">*</text>举报地</text>
			    <!-- <text class="Fraud-locaton Default-color  three-title">请选择&nbsp;&nbsp;&nbsp;></text> -->
			    <!-- <uni-section title="本地数据" type="line" padding style="height: calc(100vh - 100px);">
			    			<uni-data-picker placeholder="请选择班级" popup-title="请选择所在地区" :localdata="dataTree" v-model="classes"
			    				@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
			    			</uni-data-picker>
			    </uni-section> -->
				<view class="Region">
					 <uni-data-picker class="Region" placeholder="请选择" popup-title="请选择所在地区" :localdata="dataTree2" v-model="classes"
				@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed"></uni-data-picker>
				</view>
			  
			
			</view>	
			
			<view class="hr"></view>
			<!-- 举报描述 -->
			<view class="zhaPian" @click="goToDescribe()">
			    <text class="Fraud-describe  three-title"><text style="color: white;">*</text>举报描述</text>
			    <text class="Fraud-describe Default-color  three-title">请填写&nbsp;&nbsp;&nbsp;></text>
			</view>	
		</view>
		<!-- 中间 -->
		<view class="explain">
		   <text class="details three-title">举报内容</text>
		   <text class="optional  Default-color three-title">（请至少填写一项）</text>	
		</view>
		<view class="inform-middle">
			<!-- 诈骗电话 -->
			<view class="zhaPian" @click="goToPhone()">
			    <text class="Fraud-phone  three-title"><text style="color: white;">*</text>诈骗电话</text>
			    <text class="Fraud-phone Default-color  three-title">请填写&nbsp;&nbsp;&nbsp;></text>
			</view>	
			<view class="hr"></view>
			<!-- 诈骗网址 -->
			<view class="zhaPian" @click="goToWeb()">
			    <text class="Fraud-web  three-title"><text style="color: white;">*</text>诈骗网址</text>
			    <text class="Fraud-web Default-color  three-title">请填写&nbsp;&nbsp;&nbsp;></text>
			</view>	
		</view>
		<!-- 下部 -->
		<view class="inform-bottom">
			<text class="">今日剩余可举报次数<text style="color:#3568F5">{{next}}</text>次</text>
			<!-- <button class="btn theme-colors"><text class="submit">提交举报</text></button> -->
			<view class="btn">
		      <uni-section title="对话框示例" type="" >
				 <button class="btn theme-colors" @click="dialogToggle('success')"><text
						class="submit">提交举报</text></button>
		      </uni-section>
		    </view>
		
		<view>
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" confirmText="同意" title="通知" content="提交举报成功!" @confirm="dialogConfirm"></uni-popup-dialog>
			</uni-popup>
			<uni-popup ref="back" type="dialog">
				<uni-popup-dialog :type="msg" confirmText="同意" title="通知" content="今日举报已达到上线!" @confirm="dialogConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				next:3,
				type:'center',
				// msgType: 'theme-colors',
				dataTree1:[{
					text:"冒充电商物流客服类",
					value:"1-0"
					},
					{
						text:"冒充公检法及政府机关类",
						value:"2-0"
					},
					{
						text:"刷单返利类",
						value:"3-0"
					},
					{
						text:"贷款、代办信用卡类",
						value:"4-0"
					},
					{
						text:"冒充军警购物类",
						value:"5-0"
					},
					{
						text:"虚假网络投资理财类",
						value:"6-0"
					},
					{
						text:"虚假购物、服务类",
						value:"6-0"
					},
					{
							text:"网络婚恋、交友类（非虚假网络投诉理财类）",
							value:"7-0"
					},
					{
							text:"虚假征信类",
							value:"8-0"
					},
					{
							text:"冒充领导、熟人等待定身份类",
							value:"9-0"
					},
					{
							text:"网络游戏产品虚假交易类",
							value:"10-0"
					},
					{
							text:"其他类型诈骗",
							value:"11-0"
					}
				],
				dataTree2: [{
					text: "浙江省",
					value: "1-0",
					children: [{
						text: "杭州市",
						value: "1-1"
					},
					{
						text: "宁波市",
						value: "1-2"
					},
					{
						text:"温州市",
						value:"1-3"
					},
					{
						text:"绍兴市",
						value:"1-4"
					},
					{
						text:"湖州市",
						value:"1-5"
					},
					{
						text:"嘉兴市",
						value:"1-6"
					},
					{
						text:"金华市",
						value:"1-7"
					},
					{
						text:"衢州市",
						value:"1-8"	
					},
					{
						text:"台州市",
						value:"1-9"
					},
					{
						text:"丽水市",
						value:"1-10"
					},
					{
						text:"舟山市",
						value:"1-11"
					}]
				}]
			}
		},
		onLoad() {
	
		},
		methods: {
			// 举报次数减少判断
			dialogToggle(type) {
				if(this.next != 0){
					this.next = this.next - 1
					this.msgType = type
					this.$refs.alertDialog.open()
				}else{
					this.msgType = type
					this.$refs.back.open()
				}
			},
			onnodeclick(e) {
				console.log(e);
			},
			onpopupopened(e) {
				console.log('popupopened');
			},
			onpopupclosed(e) {
				console.log('popupclosed');
			},
			onchange(e) {
				console.log('onchange:', e);
			},
			  goToPhone(){
					uni.navigateTo({
						url:'./Phone'
					})
				},
			goToWeb(){
				uni.navigateTo({
					url:'./Web'
				})
			},
			goToDescribe(){
				uni.navigateTo({
					url:'./Describe'
				})
			}
			// ,
			// goToRegion(){
			// 	uni.navigateTo({
			// 		url:'./Region'
			// 	})
			// }
		}
	}
</script>

<style>
	@import url('@/static/total.css');
	body{
		background-color: #F1F1F1;
	}
	.content{
		width: 90%;
		height: 90%;
		margin:5% auto;
		display: flex;
		flex-direction: column;
	 
	}
      .inform-top{
		display: flex;
		flex-direction:column;
		width: 100%;
		height: 20vh;
		background-color: white; 
	    margin: 3vh auto;
	} 

	   .inform-middle{
		   display: flex;
		   flex-direction:column;
		   width: 100%;
		   height: 13vh;
		   background-color: white; 
		   margin: 3vh auto;
	   }
		   
	   .inform-bottom{
		   display: flex;
		   flex-direction: column;
		  /* justify-content: */
		   align-items: center;
		   
	   }   
	   .btn{
		   width: 100%;
		   height: 7vh;
		   margin-top: 1vh;
		   border-radius: 12px;  
	   } 
	       .submit{
			         color: white;
					 line-height: 7vh;
				 }
	.zhaPian{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		height: 6vh;
		margin:auto;
		}
	.hr{
			width: 100%;
			height: 1px;
			background-color: #9DA2AD;
			
		}
</style>