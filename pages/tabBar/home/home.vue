<template>
	<view>
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view v-if="current==0" class="tab1">
			<u-swiper :list="swiperList"></u-swiper>
			<my-card></my-card>
			<my-card></my-card>
			<my-card></my-card>
			<my-card></my-card>
		</view>
		<view v-if="current==1" class="tab2">
			<my-card></my-card>
		</view>
		<view v-if="current==2" class="tab3">
			lol3
		</view>
	</view>
</template>

<script>
	export default {
		data() {
					return {
						list: [{
							name: '综合'
						}, {
							name: '端游'
						}, {
							name: '手游',
							count: 5
						},{
							name: '最近推出',
							count: 5
						}],
						current: 0,
						swiperList:[
							{
													image: '/static/bn1.jpg',
													title: '昨夜星辰昨夜风，画楼西畔桂堂东'
												},
												{
													image: '/static/bn2.jpg',
													title: '身无彩凤双飞翼，心有灵犀一点通'
												},
												{
													image: '/static/bn3.webp',
													title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
												}
						]
					}
				},
				methods: {
					change(index) {
						this.current = index;
					}
				}
	}
</script>

<style>
	.u-tab{
		box-sizing:border-box;
	}
</style>
