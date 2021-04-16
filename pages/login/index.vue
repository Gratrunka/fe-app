<template>
	<view class="main-content">
		<view class="login-box">
			<image src="../../static/bn1.jpg" mode=""></image>
			<u-input v-model="count" type="type" :border="border" />
			<u-input v-model="pwd" type="password" :border="border" />
			<view class="btn" @click="login">
			 	LOGIN
			 </view>
									
			<navigator url="/pages/tabBar/home/home" open-type="switchTab" hover-class="other-navigator-hover">
			                  
			 </navigator>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
					return {
						value: '',
						type: 'text',
						border: false,
						count:'',
						pwd:''
					}
				},
		methods:{
			login(){
				// uni.navigateTo({
				// 	url:'../tabBar/home/home'
				// })
				this.$request('/users/login', {
				// 传参参数名：参数值,如果没有，就不需要传
				name:this.count,
				password:this.pwd
				},"POST").then(res => {
				// 打印调用成功回调
				console.log(res)
				uni.switchTab({url:'/pages/tabBar/home/home'})
				}).catch((err)=>{
					console.log(err)
				})

			}
		}
	}
</script>

<style lang="scss">
	.main-content{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #c1d3e2;;
		image{
			width:100px;
			height: 100px;
			border-radius: 50%;
			background: #e6eef4;
			box-shadow:  19px 19px 38px #cad1d7,
			             -19px -19px 38px #ffffff;
		}
		.login-box{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			padding: 30px 0;
			height: 500px;
			width: 300px;
			border-radius: 13px;
			background: #e6eef4;
			box-shadow:  11px 11px 22px #fff,
			             -11px -11px 22px #ffffff;
		.u-input{
			height: 50px;
			flex:0;
			border-bottom: 1px solid #000;
		}
		.btn{
			height: 80px;
			width: 150px;
			border-radius: 25px;
			background: #e6eef4;
			box-shadow:  14px 14px 27px #b8bec3,
			             -14px -14px 27px #ffffff;
			line-height: 80px;
			color: #ccc;
			font-weight: bold;
			font-size: 50rpx;
			text-align: center;
		}
		}
		
	}
</style>
