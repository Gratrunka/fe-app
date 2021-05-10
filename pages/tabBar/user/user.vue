<template>
	<view class="user-box">
		
		<view class="user-container">
			<image class="avatar" src="../../../static/bn1.jpg" mode=""></image>
			<view class="nickname">昵称</view>
			<!-- <button >编辑</button> -->
			<!-- 粉丝信息 -->
			<view class="data-box">
				<view class="data-item">
					<text>关注</text>
					<text class="count">0</text>
				</view>
				<view class="data-item">
					<text>粉丝</text>
					<text class="count">0</text>
				</view>
				<view class="data-item">
					<text>点赞</text>
					<text class="count">0</text>
				</view>	
			</view>
			
			<!-- 绑定账号 -->
			<view class="bind-steam">
				<view class="bind-inner">
					绑定账号
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onLoad() {
			// this.$steam.getUserOwnedGames('76561198205559728').then(res => {
			// 	console.log(res)
			// })
		}
	}
</script>

<style lang="scss">
	.user-box{
		padding-top: 150rpx;
		height: 100%;
		background-color: #dbebfa;
		
	}
// 	.bg{
// 		// position: absolute;
// 		// top: -200rpx;
// 		height: 600rpx;
// 		width: 100%;
// 		image{
// 			height: 100%;
// 			width: 100%;
			
// 		}
		
// &:after{
// 			position: absolute; 
// 			content: ''; 
// 			width: 100%; 
// 			height: 100%; 
// 			top: 0; 
// 			left: 0; 
// 			box-shadow:0 0 50px 30px #ffffff ; 
// 			}
		
// 	}
	.user-container{
		
		
		// margin-top: -150rpx;
		padding: 20rpx 10%;
		// height: 100%;
		// height: 1000rpx;
		.avatar{
			height: 150rpx;
			width: 150rpx;
			position: absolute;
			left:10%;
			transform: translateY(-50%);
			border-radius: 145px;
			background: #e6eef4;
			box-shadow:  16px 16px 60px #8c9195,
			             -16px -16px 60px #ffffff;
			
		}
		.nickname{
			margin:0 auto;
			width:100rpx;
			z-index: 999;
			padding: 5rpx 1rpx;
		}
		.data-box{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			
			margin-top: 60rpx;
			.data-item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right:60rpx;
				.count{
					font-weight: bold;
				}
			}
		}
		// 绑定账号
		.bind-steam{
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid red;
			border-radius: 10px;
			height: 20%;
			margin-top: 40rpx;
			.bind-inner{
				width: 200rpx;
				height: 80rpx;
				line-height: 80rpx;
				border: 1px solid red;
				margin: auto;
				text-align: center;
				border-radius: 10rpx;
			}
		}
		
	}
</style>
