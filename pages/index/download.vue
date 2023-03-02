<template>
	<view>
		<view class="bg">
			<view class="down-content">
				<view class="down-ico">
					<image class="down-img" :src="ico"></image>
				</view>
				<view class="down-text-content">
					<h2 class="h2">国家反诈骗APP</h2>
					<span>138.4万次下载  |  50.97MB</span>
					<view class="official">
						<u-rate :count="count" v-model="value"></u-rate>
					</view>
					<span class="report">举报</span>
				</view>
				<view class="bth">
					<button class="bth-down" @click="cheat()">安全下载</button>
				</view>
			</view>
			<view class="down-pic">
				<view>
					<icon class="border-l"></icon>
					<text>打击防范电信诈骗</text>
					<icon class="border-r"></icon>
				</view>
			</view>
			<view class="screen-pic">
				<view class="screen-img">
					<image class="screen-img-list" src="https://android-screenimgs.25pp.com/fs08/2022/09/07/0/110_297b748ff3205b2d81e895880734eed1_234x360.jpg?x-oss-process=image%2Fformat%2Cwebp"></image>
					<image class="screen-img-list" src="https://android-screenimgs.25pp.com/fs08/2022/09/07/3/110_18c7a981128d2d51f44bc17a40388552_234x360.jpg?x-oss-process=image%2Fformat%2Cwebp"></image>
				</view>
			</view>
			<view class="detail-box">
				<view class="detail-title">
					<h3 class="ico-text">应用介绍</h3>
				</view>
				<view class="detail-content">
					国家反诈中心APP是一款帮助用户预警诈骗信息、快速举报诈骗内容、提升防范意识的反电信诈骗应用。
					<br>
					<br>
					【我要举报】可疑内容快速举报，帮助他人提前防范
					<br>
					【报案助手】涉案信息快速填写，在线上传简单便捷
					<br>
					【骗局曝光】海量诈骗经典案例，情景再现事件经过
				</view>
			</view>
			<view class="update-text">
				<view class="update-link">
					<view class="update-color">隐私政策</view>
					<view class="update-color margin-l">权限说明</view>
				</view>
				<view>开发者详情：公安部刑侦局</view>
				<view>版本信息：2.0.1</view>
				<view>支持系统：Android 5.0 及以上</view>
				<view>更新时间：2022-09-07 17:35</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
				count: 5,
				value: 3,
				ico:'https://android-artworks.25pp.com/fs08/2022/09/07/9/110_6f36c2d31ef5c78fcee19503deb93c45_con_130x130.png',
	        };
	    },
		methods: {
			cheat(){
				let _this = this;
				uni.showModal({
					title: '警告',
					showCancel: false,
					content: '又被骗了吧？只有通过正规渠道下载的APP才没有安全隐患!不要在不明来历的网站或软件里下载APP。',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							_this.goWe();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			goWe(){
				uni.switchTab({
				   url: './index'
				})
			},
		}
	    
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.margin-l{
		margin-left: 5px;
	}
	.update-color{
		color: #22c485;
	}
	.update-link{
		display: flex;
		justify-content: flex-end;
	}
	.update-text{
		padding: 10px;
		width: 100%;
		line-height: 19px;
		overflow: hidden;
		font-size: 14px;
		margin: 10px 0;
		color: #999;
	}
	.detail-box .detail-content{
		width: 100%;
		line-height: 19px;
		overflow: hidden;
		font-size: 12px;
		margin: 10px 0;
		-webkit-transition: height .5s ease;
		transition: height .5s ease;
		color: #999;
	}
	.ico-text{
		margin-bottom: 10px;
		height: 16px;
		line-height: 16px;
		font-size: 16px;
		color: #404040;
		border-left: 3px solid #22c485;
		padding-left: 5px;
		float: left;
	}
	.detail-title{
		
	}
	.detail-box{
		margin: 0 10px;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	.screen-img{
		padding: 10px;
		height: 253px;
		overflow: hidden;
		z-index: 998;
		margin: 15px 0;
	}
	.screen-img-list{
		margin-right: 7%;
		width: 150px;
		height: 243px;
		border-radius: 6px;
		user-select: none;
	}
	.screen-pic{
		width: 100%;
		padding-bottom: 1px;
		display: inline-block;
		vertical-align: top;
		overflow: hidden;
	}
	.border-r{
		width: 16px;
		height: 14px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAcCAYAAADvANYcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOENCNzk4RTJGQTYxMUU1OURBNEY5Q0ZEMjA4RUYxOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOENCNzk4RjJGQTYxMUU1OURBNEY5Q0ZEMjA4RUYxOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE4Q0I3OThDMkZBNjExRTU5REE0RjlDRkQyMDhFRjE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE4Q0I3OThEMkZBNjExRTU5REE0RjlDRkQyMDhFRjE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FnsvOwAAARdJREFUeNpiPHnypAMDA4M9A/GgkQg19SSYd5AF6oAGKjuCFPMamBgGARh1xKgjRh0x6ogh4whQMcyIBS+gwFxs5jmSExIPBkN0OIwmTCgwoHIUKeBqTzDhcYAAFvENFDhCH4f4BVyO8MchvpECRwRgETtgZmb2AZsjQCFQgCMqDpDpgAQc0bEQV5qYjyMqGsl0AMisfiziH2DRy4SmeD6OYLtAZuEFSlv78XjqA7IjQGXCeWiwYXNxIhkOKICaaYDDUxPQs6g9nixUCNVEKsCVuD+gF+H4yglYCCygYrl0AeqAD8iCLHgUJ5IZArjABqiZHwiVmA+gCg2p6IADUN8HYnMAckiA8utBCsoBXGnpAzFFPUCAAQCLEDZAqg54ZQAAAABJRU5ErkJggg==) no-repeat center;
		background-size: 100% 100%;
		right: 0;
	}
	.border-l{
		width: 16px;
		height: 14px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OThDNTE1ODJGQTYxMUU1ODIzREM1MTJFMjkyOEVENCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OThDNTE1OTJGQTYxMUU1ODIzREM1MTJFMjkyOEVENCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5OEM1MTU2MkZBNjExRTU4MjNEQzUxMkUyOTI4RUQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk5OEM1MTU3MkZBNjExRTU4MjNEQzUxMkUyOTI4RUQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VI+9CgAAAR9JREFUeNrsVsERgjAQjAwF0IGUQAfSAViBUIFaAVABWgFDBdiB8uRlSrAD7UCPmTyYTBYhhOHDzuwnOeb27pYkm6Zp2ED4xAczA4foErn1JzAkVsQvMTGQOCI+iW9i0C7YINAj5qJqE/BEIa68YYPgu2gTM1R1gTatmZP7fclVAgqQ/EUsNYxWgb3WzLU8gkR0QMaNGBM/IwXkoJgz8aLywEkRzIl7jda7YvYy0m7y7ggioDbWnP0RjDFDHghA9XyC82Vc+0wYgtnr/vMOMJ5SADpsak0BAVjnSIDLzGLU6dkK2LL58Rh6EM0F2GW756MDcadYzzQFJGMFRGA90+xCuuQI2NIeWAWsAlYBqwDWdxeUE+5+Bh6dg5/1PwEGAJbSK0gMyJyDAAAAAElFTkSuQmCC) no-repeat center;
		background-size: 100% 100%;
		left: 0;
	}
	.down-pic view{
		font-size: 20px;
		font-weight: bold;
		color: #404040;
		position: relative;
		display: inline-block;
		padding: 0 24px;
		max-width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.down-pic{
		padding-top: 24px;
		padding: 20px 10px 0;
		text-align: center;
	}
	.bth-down{
		display: block;
		height: 38px;
		line-height: 38px;
		color: #fff;
		background: #22c485;
		text-align: center;
		font-size: 16px;
	}
	.bth{
		position: relative;
		margin-top: 15px;
	}
	.report{
		border-radius: 2px;
		position: absolute;
		right: 0;
		top: 0;
		padding: 0 2px;
		font-size: 12px;
		color: #b8b8b8;
		border: 1px solid #c3c3c3;
	}
	.official{
		font-size: 12px;
		margin-top: 2px;
	}
	span{
		font-size: 12px;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.h2{
		padding: 3px 0;
		font-size: 16px;
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.down-text-content{
		position: relative;
		height: 65px;
		margin-left: 75px;
		line-height: 18px;
	}
	.down-img{
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	.down-ico{
		width: 65px;
		height: 65px;
		border-radius: 10px;
		float: left;
		display: inline;
	}
	.down-content{
		width: 100%;
		padding: 15px 10px 12px;
		height: 21vh;
		color: #666;
		border-bottom: 1px solid #ddd;
	}
	.bg{
		background-color: #f8f8f8f8;
		height: 100vh;
		width: 100vw;
	}
</style>