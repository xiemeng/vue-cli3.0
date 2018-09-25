<template>
	<section class="scrollBox" ref="scrollBox">
		<div class="scrollConent">
			<slot name="conent"></slot>
		</div>
		<div class="loadStatus">
			<i class="weui-loading" v-if="haveData"></i>
			<span class="weui-loadmore__tips">{{tipText2 || tipText}}</span>
		</div>
	</section>
</template>
<script>
	//  注意得设置 load-more一个固定的高度
	
	export default {
	  data () {
	    return {
	    	haveData:true,
	    	isPullUp:true,
	    	tipText2:'加载中',
	    	isOne:true,//执行一次
	    }
	  },
	  props:{
	  	tipText:{  //底部文字提示
	  		type:[String],
	  		default:'加载中'
	  	},
	  },
	  methods:{
			getDta(){  //监听滚动
				let boxDom = this.$refs.scrollBox // 父盒子dom
			    let contentDom = boxDom.querySelector('div') // 内容盒子dom
			    let boxDomH = this.$refs.scrollBox.clientHeight // 父盒子高度
			    let contentDomH = contentDom.scrollHeight // 内容盒子高度
			    let clientHeight = window.innerHeight;//屏幕高度
			    if (boxDomH > contentDomH) { // 如果内容盒子高度比父盒子高度小  执行获取操作
			    	if(contentDomH<clientHeight){  //如果屏幕高度>内容盒子高度.执行获取操作
			    		
			    		this.$emit('onScroll',this)
			    	}
		      	}
		      	// 监听这个dom的scroll事件
			    boxDom.onscroll = ()=>{
			      	let scrollTopH = this.$refs.scrollBox.scrollTop // 滚动的高度
//			      	console.log(scrollTopH)//scrollTopH:171  boxDomH:534  contentDomH:640
			        if((scrollTopH + boxDomH -64>= contentDomH) && this.isPullUp){ //滚动到底部，c触发加载
//			        		console.log('滚动到底部，c触发加载1')
			        		this.isPullUp = false
			        		this.$emit('onScroll',this)
			        }
			    }
		      // 监听这个winow的scroll事件
				window.onscroll = ()=>{
					let scrollTopH = document.documentElement.scrollTop // 滚动条的高度
//					console.log(scrollTopH)//scrollTopH:415  boxDomH:865  contentDomH:800
			        if((scrollTopH + boxDomH >= contentDomH) && this.isPullUp){ //滚动到底部，c触发加载
//			        		console.log('滚动到底部，c触发加载2')
			        		this.isPullUp = false
			        		this.$emit('onScroll',this)
			        }
				}
			},
			scrollHave(){//还有数据
				this.isPullUp = true;
				this.$nextTick(()=>{
					this.getDta()
				})
			},
			scrollEnd(){//全部加载完成
				this.haveData = false;
				this.isPullUp = false;
				this.tipText2 = '';
			}
	  },
	  mounted(){
	 	this.$emit('onScroll',this)
	  }
	}
</script>


<style lang="less" scoped>
	@import '../../style/weui-loadmore.css';
	.scrollBox{
		 -webkit-overflow-scrolling: touch;
	}
	.loadStatus{
	    width: 65%;
	    margin: 1.5em auto;
	    line-height: 1.6em;
	    font-size: 14px;
	    text-align: center;
		.weui-loadmore__tips {
			display: inline-block;
			vertical-align: middle;
		}
	}
	
</style>
