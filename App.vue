<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	@import "scss/icon.css";
	@import "scss/main.css";
	@font-face {
		font-family: 'youshetitle';
		src: url(/static/font/youshetitle.ttf);
	}
	/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
	@font-face {
	  font-family: "站酷酷黑 Regular";
	  src: url(/static/font/ZCOOL_KuHei_Regular.ttf);
	 
	}
	@font-face {
	  font-family: "阿里妈妈数黑体 Bold";
	  src: url(/static/font/Alimama_ShuHeiTi_Bold.ttf);
	 
	}
	body{
		background-color: #f8f8f8;
	}
</style>
