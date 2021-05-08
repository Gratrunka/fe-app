<template>
	<view class="card-box">
		<view class="left">
			<image class="avatar" src="../../static/bn1.jpg" mode="widthFix"></image>
			<image class="like" src="../../static/tabbar/user.png"></image>
		</view>
		<view class="right">
			<view class="nickname">
				zhang lu xi
			</view>
			<view class="content">
				这是我的博客内容xxxx
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.card-box{
		display: flex;
		.left{
			display: flex;
			flex-direction: column;
			.avatar{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
			.like{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
		.right{
			display: flex;
			flex-direction: column;
		}
	}
</style>
