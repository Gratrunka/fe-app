<template>
	<view class="content">
		<view class="goodsContent">
			<view class="goodsLeftList" >
				<view class="goodsItem" v-for="item in goodsLeftList">
					<image :src="item.image_url" @load="onImageLoad" mode="widthFix"></image>
					<view class="goodsName">{{item.name}}</view>
					<view class="goodsPrice">
						<image  src="../../../static/bn1.jpg"  mode="widthFix"></image>
						<text>{{item.priceNow}}</text>
					</view>
				</view>
			</view>
			<view class="goodsRightList">
				<view class="goodsItem" v-for="item in goodsRightList">
					<image :src="item.image_url" @load="onImageLoad" mode="widthFix"></image>
					<view class="goodsName">{{item.name}}1212345678</view>
					<view class="goodsPrice">
						<image  src="../../../static/bn1.jpg"  mode="widthFix"></image>
						<text>{{item.priceNow}}</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
	    data () {
	      return {
	        goodsList:[
	        		{
	        			name:"高配版热水器",
	        			priceNow : "1499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},
	        		{
	        			name:"速热高温煮水蛋",
	        			priceNow : "499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},
	        		{
	        			name:"速热高温煮水蛋",
	        			priceNow : "499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},
	        	],
	            goodsListCount:3,  //加载第i张图片
	        	// 左侧商品列表
	        	goodsLeftList:[{
	        			name:"高配版热水器",
	        			priceNow : "1499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},
	        		{
	        			name:"速热高温煮水蛋",
	        			priceNow : "499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},
	        		{
	        			name:"速热高温煮水蛋",
	        			priceNow : "499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},],
	        	goodsLeftListHeight : 0,
	        	// 右侧商品列表
	        	goodsRightList:[{
	        			name:"高配版热水器",
	        			priceNow : "1499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},
	        		{
	        			name:"速热高温煮水蛋",
	        			priceNow : "499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},
	        		{
	        			name:"速热高温煮水蛋111111111111",
	        			priceNow : "499.0000000000000000",
	        			image_url:"../../../static/bn1.jpg",
	        		},{
	        			name:"速热高温煮水蛋",
	        			priceNow : "499.00",
	        			image_url:"../../../static/bn1.jpg",
	        		},],
	        	goodsRightListHeight : 0,

	      }
	    },
		onLoad() {
			console.log(23456)
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
			color: #ffac29;
			font-size: 24rpx;
			padding: 0 15rpx;
		}
		.goodsPrice image{
			width: 20rpx;
			height: 20rpx;
			padding: 0 5rpx;
		}

</style>
