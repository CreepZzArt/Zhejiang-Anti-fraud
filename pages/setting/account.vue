<template>
	<view>
		<view class="card">
			<!-- 修改名字 -->
			<view class="row1">
				<text class="three-title">修改名字</text>
				<text>邱*<text class="Default-color three-title">></text></text>
			</view>
			<view class="hr"></view>
			<!-- 修改手机号 -->
			<view class="row1">
				<text class="three-title">修改手机号</text>
				<text>178******69<text class="Default-color three-title">></text></text>
			</view>
			<view class="hr"></view>
		<!-- 修改密码 -->
			<view class="row1">
				<text class="three-title">修改密码</text>
				<text class="Default-color three-title">></text>
			</view>
			<view class="hr"></view>
			<!-- 修改ip -->
			<view class="row1">
				<text class="three-title">ip所属地</text>
				<text>浙江省绍兴市<text class="Default-color three-title">></text></text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	@import url('@/static/total.css');
	.card{
		width: 90%;
		height: 29vh;
		background-color: white;
		margin: auto;
		margin-top: 3vh;
		border-radius: 3px;
	}
	.row1{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		height: 7vh;
		margin:auto;
	}
	
	.hr{
		width: 90%;
		height: 1px;
		background-color: #F1F1F1;
		margin:auto;
	}
</style>