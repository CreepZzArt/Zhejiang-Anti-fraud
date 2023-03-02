<template>
	<view class="bg">
		<view class="content">
			<image src="../../static/icon/news-title.png" class="news-title"></image>
			<view class="news-block">
				<view class="card" v-for="(item,index) in data" :key="index" @click="goGoodsDetail(item.id,item.url)">
					<view class="Title">{{item.title}}</view>
					<!-- <text class="Text">{{item.text}}</text> -->
					<view class="Time">{{item.date}}</view>
					<image class="img"  v-bind:src="item.pic"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
				data:[
					{id:1,
					date:"2022/8/19",
					text:"近日，浙江高院发布八则打击治理电信网络诈骗犯罪典型案例，绍兴法院两则案例入选！",
					pic:'https://s3.bmp.ovh/imgs/2022/08/20/5039a4144fe2b5ca.png',
					title:"绍兴两则案例入电信网络诈骗犯罪典型案例！",
					url:'https://www.thepaper.cn/newsDetail_forward_19528452',
					},
					{id:2,
					date:"2022/8/19",
					text:"2021年7月以来，张某通过某APP结识一名为刘某某的男子，后两人添加微信好友。2021年7月至2021年11月期间，刘某某以投资做生意、租赁市场、批发水果等名义，多次骗取张某钱财。",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/d1507ef1e4ddf6b8.png',
					title:"「警方案例」网络交友有风险 诈骗钱财需防范",
					url:'https://baijiahao.baidu.com/s?id=1741602943930352535&wfr=spider&for=pc',
					},
					{id:3,
					date:"2022/8/19",
					text:"为推进夏季治安打击整治“百日行动”，进一步有效防范电信网络诈骗，提高群众防骗意识和识骗能力，新疆阿克苏市公安局组织开展“诈骗知识不可少 防骗本领要提高”主题宣传活动，民辅警结合辖区实际，通过入街道、进商铺、进考场等针对性的开展预防电信网络诈骗宣传，扎实推进防范电信网络诈骗宣传工作。",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/e426edabf144992c.png',
					title:"诈骗知识不可少，防骗本领要提高",
					url:'https://baijiahao.baidu.com/s?id=1741590587968575627&wfr=spider&for=pc',
					},
					{id:4,
					date:"2022/2/5",
					text:"“我是某某公安局的，你已经涉嫌违法犯罪”、“你涉嫌洗黑钱”、“你的身份证被盗用，有犯罪行为”、“目前所有的证据都对你不利，请配合调查”、“要证明自己清白，就把你所有的钱转入指定账户”……接到这样的电话，声色俱厉的语气，强势震慑的气势，让人一下子慌了神。",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/e01cb458bfbcceb8.png',
					title:"警惕有人冒充“警察”诈骗！",
					url:'https://m.thepaper.cn/baijiahao_16586202',
					},
					{id:5,
					date:"2021/4/25",
					text:"新华社南昌4月23日电(记者赖星)23日,江西省高级人民法院通报了多起电信诈骗典型案例。其中,赣州各级法院审理的14起案件中,诈骗分子假冒海外女留学生,通过各类社交软件对境外的273名男性实施了诈骗。",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/f42d0e1622196e27.png',
					title:"273名境外男性被骗 江西通报多起电信诈骗案例",
					url:'http://www.jsjc.gov.cn/shzs/fzzc/202104/t20210425_1209914.shtml',
					},
					{id:6,
					date:"2021/4/19",
					text:"大学生被骗10多万元？你以为是电视剧中才有的剧本，不，这就是发生在我们身边的事！",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/55da5b81bd0b89f4.png',
					title:"警惕！被骗10万元的事就发生在我们身边！",
					url:'https://news.sina.com.cn/c/2021-04-19/doc-ikmxzfmk7738448.shtml',
					},
					{id:7,
					date:"2021/4/19",
					text:"短信诈骗、电话诈骗都听说过，  APP诈骗、网络诈骗手段层出不穷  今天我们整理了  10种常见电信诈骗手段  教大家如何识破电信诈骗那些小伎俩",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/bf77d0768b6ff559.png',
					title:"电信诈骗真实案例，10种常见电信诈骗手段",
					url:'https://peace.tsinghua.edu.cn/info/1022/1419.htm',
					},
					{id:8,
					date:"2021/4/10",
					text:"新华社北京4月11日电（记者梁爱平、吴鸿波）以预约新冠疫苗为由给手机用户发送木马链接短信，以畸高价格向老年人推销廉价保健品，组织他人大量办理实名电话卡再低价“收购”作为实施诈骗的工具……近年来，面对相关部门的强力打击，电信网络诈骗不断变换花样。电信网络诈骗为何屡禁不绝？如何才能做到有效打击？",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/15bc92dd57ec1b50.png',
					title:"电信网络诈骗为何屡禁不绝？",
					url:'http://www.xinhuanet.com/fortune/2021-04/11/c_1127317068.htm',
					},
					{id:9,
					date:"2021/2/18",
					text:"当前，伴随互联网技术的发展和日益普及，电信网络新型违法犯罪呈多发高发态势。其中，学校师生群体因防范意识相对薄弱，成为诈骗的主要目标群体之一。",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/056b6d1833fb9dc8.png',
					title:"2020年度涉师生群体之电信网络诈骗十大案例曝光",
					url:'https://new.qq.com/rain/a/20210218A04GFW00',
					},
					{id:9,
					date:"2020/12/15",
					text:"案情：今年6月，陈某开了一家车行（未注册）并任负责人。陈某向客户谎称可“零首付贷款购车”，骗取客户签写多份空白合同及材料，实则将客户欲购买的车辆双重抵押出去，先是抵押给担保公司借款，用于支付购车首付款、购置税、保险费等款项，再伪造高于车价的统一销售发票和客户的资产证明材料，到银行办理车辆抵押分期贷款。陈某利用两个贷款成功提车，后按约定将车辆抵押给了担保公司，由于溢价贷款，陈某还能抽取银行贷款的10%作为客户答应给自己的报酬。",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/44d95762d9fcda06.png',
					title:"虚构车价以客户名义骗取银行贷款该如何定罪",
					url:'https://www.spp.gov.cn/spp/llyj/202012/t20201215_488986.shtml',
					},
					// 
					{id:10,
					date:"2020/12/10",
					text:"真实案例：2020年9月16日，夏先生在刷朋友圈的时候看到一条贷款的广告，查看以后，通过微信添加自称是贷款公司的客服。夏某就通过“客服”的说明进行操作将个人信息发给了这个贷款的客服。",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/a78f6ea3c7897201.png',
					title:"电信诈骗真实案例，四种常见电信诈骗手段揭秘！",
					url:'https://baijiahao.baidu.com/s?id=1685686414038565676&wfr=spider&for=pc',
					},
					{id:11,
					date:"2020/9/4",
					text:"注意！谨防助学金诈骗陷阱！",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/de8a4088737f321e.png',
					title:"擦亮双眼，警惕大学生助学金诈骗",
					url:'https://baijiahao.baidu.com/s?id=1676892298796160709',
					},
					{id:12,
					date:"2020/8/18",
					text:"“我是某某公安局的，你已涉嫌违法犯罪”",
					pic:'https://s3.bmp.ovh/imgs/2022/09/22/c407af5995d94d57.png',
					title:"一通电话，宜宾周某被诈骗18万",
					url:'https://new.qq.com/rain/a/20220818A05HDG00',
					},
					
				] 	
	        };
	    },
		methods: {
			goGoodsDetail(id, url) {
				uni.navigateTo({
					url: '/pages/index/news/web-view?id=' + id + "&url=" + url
				});
			},
		}
	
	    
	}
</script>

<style>
	/* .bg{
		height: 180vh;
		width: 100vw;
		background-image: linear-gradient(to right, #4278ca, #294EB5);
	} */
	.content{
		padding: 15px;
		background-color: #f4f4f4;
		height: 212vh;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.news-title{
		width: 120px;
		height: 30px;
	}
	.news-block{
		border-radius: 15px 15px 0px 0px;
		width: 90vw;
		height: 15vh;
		background-color: #ffffff;
		padding-top: 15px;
	}
	.card{
		display: flex;
		width: 90vw;
		height: 15vh;
		background-color: #fff;
		/* border-radius: 10px; */
		margin-top: 1%;
		align-items: center;
		/* 溢出隐藏 */
		/* overflow: hidden; */
		/* 绝对定位 */
		position: relative;
	}
	.img{
		margin-right: 3%;
		height: 80px;
		width: 80px;
		overflow: hidden;
		/* 防止被挤压 */
		flex-shrink: 0;
		background-color: #294EB5;
		/* 填充图片 */
		background-size: cover;
	}
	.Title{
		font-family: "Sub Head";
		font-weight: 600;
		font-size: 19px;
		color: #3d3d3d;
		margin-top: 30px;
		margin-left: 3%;
		width: 500px;
		height: auto;
		/* text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden; */
		top: -35%;
		position: relative;
	}
	.Text{
		color: #969298;
		top: 30%;
		left: 30%;
		font-size: 10rpx;
		width: 62vw;
		height: 65px;
		overflow: hidden;
		text-overflow: ellipsis;
		position: absolute;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}
	.Time{
		font-size: 30rpx;
		color: #969298;
		left: 3%;
		top:80%;
		position: absolute;
	}
</style>