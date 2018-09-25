<template>
	<transition name="opacity">
		<div id="xmToast" v-show="isShow">
			<div class="tips">{{text}}</div>
		</div>
	</transition>
	
</template>

<script>
	export default{
		name:"toast",
		components:{
			
		},
		data(){
			return {
				isShow:false,
				text:'',//提示文字
			}
		},
		mounted(){
			
  		},
  		methods:{
  			show(text,time){//显示
  				this.isShow = true;
  				this.text = text;
  				clearTimeout(this.timeout)
  				this.timeout = setTimeout(() => {
		          this.isShow = false
		        },time || 2000)
  			},
  			hide(){  //隐藏
  				this.isShow = false;
  			}
  		},
  		computed:{
  			
  		}
	}
</script>

<style lang="less" scoped>
	#xmToast{
		text-align: center;
		position: absolute;left: 50%;top: 50%;
		transform: translate(-50%,-50%);width: 100%;
		.tips{
			background-color: #444;display: inline-block;max-width: 60%;
			color: #fff;padding: 10px 20px;border-radius: 10px;
		}
	}
	
	
	/*透明度动画*/
	.opacity-enter-active, .opacity-leave-active {
	  transition: opacity .25s;
	}
	.opacity-enter, .opacity-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>