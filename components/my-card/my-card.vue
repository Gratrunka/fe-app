<template>
	<view >
		<view class="content" v-for="(item,index) in cardList">
			<view class="card" @click="toDetail">
				<view class="left">
					<view class="title">
						{{item.title}}
					</view>
					<view class="info">
						<text>{{item.author}}</text>
						<text class="time">{{item.pub_time}}</text>
					</view>
				</view>	
				<view class="right">
					<image :src="item.img_path" mode=""></image>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data(){
			return{
				cardList:[{
					title:'测试一下标题测试一下标题测试一下标题测试一下标题测试一下标题测试一下标题',
					author:'lucy',
					pub_time:'2020-1-1',
					img_path:'https://media.st.dl.pinyuncloud.com/steam/apps/1405470/header_schinese.jpg?t=1618038066'
				},
				{
					title:'测试一下标题',
					author:'lucy',
					pub_time:'2020-1-1',
					img_path:'https://media.st.dl.pinyuncloud.com/steam/apps/1405470/header_schinese.jpg?t=1618038066'
				}]
			}
		},
		methods:{
			toDetail(){
				uni.navigateTo({
				    url: 'pages/page/detail'
				});
				console.log('sdfg')
			}
		}
	}
</script>

<style lang="scss">
	.content{
		
		width: 100%;
		padding: 10px 10px;
	}
	.card{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
		width: 100%;
		height: 120px;
		border-radius: 10px;
		// background: #e6eef4;
		// box-shadow:  20px 20px 60px #c4cacf,
		//              -20px -20px 60px #ffffff;
		border: 1px solid #f1f1f1;
		.left{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 80px;
			width: 160px;
			.title{
				font-size: 20px;
				font-weight: bold;
				overflow: hidden;
				  text-overflow: ellipsis;
				  display: -webkit-box;
				  -webkit-line-clamp: 2;
				  -webkit-box-orient: vertical;
				  display: -moz-box;
				  -moz-line-clamp: 2;
				  -moz-box-orient: vertical;
				  word-wrap: break-word;
				  word-break: break-all;
				  white-space: normal;    
			}
			.info{
				display: flex;
				flex-direction: row;
				.time{
					margin-left: 5px;
				}
				
			}
		}
		.right{
			width: 130px;
			height: 80px;
			
			image{
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}
	}
</style>
