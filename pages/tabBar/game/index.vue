<template>
	<view class="content">
		<view class="goodsContent">
			<view class="goodsLeftList" >
				<view class="goodsItem"   v-for="item in goodsLeftList">
					<navigator :url="'../../page/detail?appid='+item.gameid" hover-class="navigator-hover">
						<image :src="item.image_url" @load="onImageLoad" mode="widthFix"></image>
						<view class="goodsName">{{item.name}}</view>
						<view class="goodsPrice">
							<image  src="../../../static/price.png"  mode="widthFix"></image>
							<text>{{item.priceNow}}</text>
						</view>
					</navigator>
				</view>
			</view>
			<view class="goodsRightList">
				<view class="goodsItem" v-for="item in goodsRightList">
					<navigator :url="'../../page/detail?appid='+item.gameid" hover-class="navigator-hover">
					<image :src="item.image_url" @load="onImageLoad" mode="widthFix"></image>
					<view class="goodsName">{{item.name}}</view>
					<view class="goodsPrice">
						<image  src="../../../static/price.png"  ></image>
						<text>{{item.priceNow}}</text>
					</view>
					</navigator>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	const SteamWebapi = require('steamworkers-webapi');
	// import SteamWebapi from 'SteamWebapi'
	export default {
	    data () {
	      return {
	        goodsList:[
	     //    		{
						// gameid:1499190,
	     //    			name:"Lost Caves",
	     //    			priceNow : "1499.00",
	     //    			image_url:"../../../static/bn1.jpg",
	     //    		},
	     //    		{
						// gameid:1498290,
	     //    			name:"青鳥樂園 Blue Bird Land",
	     //    			priceNow : "499.00",
	     //    			image_url:"../../../static/bn1.jpg",
	     //    		},
	     //    		{
						// gameid:1495510,
	     //    			name:"MeyRescuer",
	     //    			priceNow : "499.00",
	     //    			image_url:"../../../static/bn1.jpg",
	     //    		},
	        	],
	            goodsListCount:3,  //加载第i张图片
	        	// 左侧商品列表
	        	goodsLeftList:[{
						gameid:1499190,
	        			name:"双人成行",
	        			priceNow : "198.00",
	        			image_url:"../../../static/img1.jpg",
	        		},{
						gameid:107410,
	        			name:"Arma 3",
	        			priceNow : "29.00",
	        			image_url:"../../../static/img2.jpg",
	        		},
	        		{
						gameid:1498290,
	        			name:"青鳥樂園 Blue Bird Land",
	        			priceNow : "499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},
	        		{
						gameid:108600,
	        			name:"Project Zomboid",
	        			priceNow : "48.00",
	        			image_url:"../../../static/img3.jpg",
	        		},{
						gameid:108600,
	        			name:"Project Zomboid",
	        			priceNow : "48.00",
	        			image_url:"../../../static/img3.jpg",
	        		},{
						gameid:108600,
	        			name:"Project Zomboid",
	        			priceNow : "48.00",
	        			image_url:"../../../static/img3.jpg",
	        		},{
						gameid:108600,
	        			name:"Project Zomboid",
	        			priceNow : "48.00",
	        			image_url:"../../../static/img3.jpg",
	        		},],
	        	goodsLeftListHeight : 0,
	        	// 右侧商品列表
	        	goodsRightList:[{
						gameid:1468810,
	        			name:"鬼谷八荒",
	        			priceNow : "68.00",
	        			image_url:"../../../static/img4.jpg",
	        		},
	        		{
						gameid:1282730,
	        			name:"Loop Hero",
	        			priceNow : "27.00",
	        			image_url:"../../../static/img5.jpg",
	        		},
	        		{
						gameid:1009290,
	        			name:"刀剑神域 彼岸游境",
	        			priceNow : "149.00",
	        			image_url:"../../../static/img6.jpg",
	        		},{
						gameid:1154810,
	        			name:"Going_Under",
	        			priceNow : "102.60",
	        			image_url:"../../../static/img7.jpg",
	        		},{
						gameid:4000,
	        			name:"Garry's Mod",
	        			priceNow : "36.00",
	        			image_url:"../../../static/img6.jpg",
	        		},{
						gameid:5596500,
	        			name:"Witch It",
	        			priceNow : "149.00",
	        			image_url:"https://cdn.cloudflare.steamstatic.com/steam/apps/559650/header_schinese.jpg?t=1619954391",
	        		},{
						gameid:1009290,
	        			name:"刀剑神域 彼岸游境",
	        			priceNow : "149.00",
	        			image_url:"../../../static/img6.jpg",
	        		},],
	        	goodsRightListHeight : 0,

	      }
	    },
		onLoad() {
			console.log(23456)
			const steam = new SteamWebapi('D9BBFE5089DBA9B6F17B54A65D92AC0E');
			console.log(steam)
			steam.resolve('https://steamcommunity.com/id/76561198146931523').then(id=>{
				console.log(id)
			})
			// steam.getGameNews(1426210).then(res=>{
			// 	console.log(res)
			// })
			// steam.getGameDetails(1009290).then(res => {
			// 	console.log(res)
			// })
			// this.$request('/users/login', {
			// // 传参参数名：参数值,如果没有，就不需要传
			// name:this.count,
			// password:this.pwd
			// },"POST").then(res => {
			// // 打印调用成功回调
			// console.log(res)
			// uni.switchTab({url:'/pages/tabBar/home/home'})
			// }).catch((err)=>{
			// 	console.log(err)
			// })
			
			
		},
		methods:{
			// 图片绑定事件，通过比较左右列表高度，实现瀑布流展示
			onImageLoad: function(e){
				let divWidth = 395;			//显示的单栏宽度，我设为295rpx
				let oImgW = e.detail.width; //图片原始宽度
				let oImgH = e.detail.height; //图片原始高度
				let rImgH = divWidth*oImgH/oImgW;	//根据宽高比计算当前载入的图片的高度
				if(rImgH > 600){
					rImgH = 600;       //限制图片最高600rpx，可在css中添加 max-height:600rpx;
				}
				if(this.goodsListCount==0){
					this.goodsLeftListHeight += rImgH;	//第一张图片高度加到goodsLeftListHeight 
					this.goodsListCount++;			//图片索引加1
					this.goodsRightList.push(this.goodsList[this.goodsListCount]);	//添加第二张图片到goodsRightList数组，因为第一张已经初始化到左侧列表中
				}else{
					this.goodsListCount++;		//图片索引加1
						if(this.goodsLeftListHeight > this.goodsRightListHeight){		//把图片的高度加到目前高度更低的栏中
							this.goodsRightListHeight += rImgH;		//第二张图片高度加到goodsRightListHeight 
						}else{
							this.goodsLeftListHeight += rImgH;
						}
					if(this.goodsListCount<this.goodsList.length){				//根据目前的栏高，把下一张图片，push到低的那栏
						if(this.goodsLeftListHeight > this.goodsRightListHeight){
							this.goodsRightList.push(this.goodsList[this.goodsListCount]);
						}else{
							this.goodsLeftList.push(this.goodsList[this.goodsListCount]);
						}
					}
				}
			},
			// 向商品列表添加第一张图片
			async waterfallImage() {
				this.goodsLeftList.push(this.goodsList[0]);
			 },
			toDetail:function(){
				console.log('detail')
				uni.navigateTo({
				    url: 'pages/page/detail'
				});
			}

		}
	  }
</script>

<style lang="scss">
	.content{
		background-color: #f1f1f1;
		width: 100%;
		height: 100%;
		
		
	}
	/* 商品列表 */
		.goodsContent{
			width: 100%;
			background: #f1f1f1;
			display: flex;
			justify-content: center;
		}
		.goodsLeftList{
			margin:0 10rpx 0 40rpx;
			width: 325rpx;
		}
		.goodsRightList{
			margin:0 40rpx 0 10rpx;
			width: 325rpx;
		}
		.goodsItem{
			background: #FFFFFF;
			width:325rpx;
			padding-bottom: 10rpx;
			margin-bottom: 15rpx;
			border-radius: 10px;
		}
		.goodsItem image{
			max-height: 600rpx;
			height: auto;
			width:295rpx;
			padding: 15rpx 15rpx 5rpx;
		}
		.goodsName{
			font-size: 28rpx;
			color: #2e2e2e;
			padding: 0 20rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display:-webkit-box;
			-webkit-line-clamp:2;
			-webkit-box-orient:vertical;
		}
		.goodsPrice{
			display: flex;
			// justify-content: center;
			align-items: center;
			color: #ffac29;
			font-size: 24rpx;
			padding: 0px 15rpx;
		}
		.goodsPrice image{
			width: 20rpx;
			height: 20rpx;
			padding: 0 5rpx;
		}

</style>
