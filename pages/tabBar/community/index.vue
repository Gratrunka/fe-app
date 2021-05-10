<template>
	<view class="content">
		
		<view class="card-box">
			<view class="left">
				<image class="avatar" src="../../../static/bn1.jpg" ></image>
				<image v-if="!isLiked" @click="likeme"  class="like" src="../../../static/like.png"></image>
				<image v-if="isLiked" @click="likeme"  class="like" src="../../../static/liked.png"></image>
			</view>
			<view class="right">
				<view class="nickname">
					小雨
				</view>
				<view class="content">
					
					 &nbsp; 
					  今天吃了早餐真开心啊，希望明天也有饭吃今天吃了早餐真开心啊，希今天吃了早餐真开心啊,希望明天也有饭吃今天吃了早餐真开心啊
				</view>
			</view>
		</view>
		<view class="card-box">
			<view class="left">
				<image class="avatar" src="../../../static/bn1.jpg" ></image>
				<image v-if="!isLiked" @click="likeme"  class="like" src="../../../static/like.png"></image>
				<image v-if="isLiked" @click="likeme"  class="like" src="../../../static/liked.png"></image>
			</view>
			<view class="right">
				<view class="nickname">
					小雨
				</view>
				<view class="content">
					
					 &nbsp; 
					  今天吃了早餐真开心啊，希望明天也有饭吃今天吃了早餐真开心啊，希今天吃了早餐真开心啊,希望明天也有饭吃今天吃了早餐真开心啊
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				isLiked:false
			}
		},
		methods:{
			likeme(){
				console.log('aaa')
				this.isLiked = !this.isLiked
			}
		}
	}
</script>

<style lang="scss">
	.content{
		height: 100%;
		background-color: #F1F1F1;
		padding: 10px 20px;
	}
	.card-box{
		display: flex;
		
		// height: 90px;
		padding: 10px 0px;
		padding-left: 10px;
		background-color: #fff;
		border-radius: 10px;
		margin-bottom: 20px;
		.left{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.avatar{
				width: 70px;
				height: 70px;
				border-radius: 50%;
			}
			.like{
				margin-top: 10px;
				width: 30px;
				height: 30px;
				
			}
		}
		.right{
			display: flex;
			flex-direction: column;
			.nickname{
				margin-left: 20px;
				font-size: 20px;
			}
			.content{
				background-color: #fff;
				height: 140rpx;
				
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 3;  // 2行
				word-break: break-all;  // 换行
				display: -webkit-box;
				-webkit-box-orient: vertical;
				

			}
		}
	}
</style>
