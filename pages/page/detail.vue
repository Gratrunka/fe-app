<template>
	<view class="content">
		<!-- 应该根据文章id去请求数据 -->
		
		<view class="article-detail">
			
			<view class="">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				newsDetail:{
					
				},
				content:''
			}
		},
		onLoad(option){
			console.log(option.appid)
			// const item = option.appid;
			// console.log(appid)
			this.$steam.getGameDetails(option.appid?option.appid:1468810).then(res => {
				console.log(res)
				this.content = res.detailed_description
			})
		}
	}
</script>

<style lang="scss">
	.content{
		
		box-sizing: border-box;
		
		.article-detail{
			
			box-sizing: border-box;
			

		}
	}
</style>
