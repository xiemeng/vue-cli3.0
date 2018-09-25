<template>
	<ul class="topWrap">
		<li :class="isActive == index?'active':''" @click="isItem(index,dataList.length)" class="tabItem" v-for="(item,index) in dataList">
			<span>{{item.title}}</span>
		</li>
		<div class="abbp-tab-item">
			<span></span>
		</div>
	</ul>
</template>

<script>
	export default{
		data(){
			return {
				isActive: 0
			}
		},
		props:{
			selectActive:{//默认选中下标
				type:[String,Number],
				default:0
			},
			dataList:{//渲染数组
				type:[Array],
				default:[]
			}
		},
		mounted(){
			this.isActive = this.selectActive;
			this.getPercentage(this.isActive,this.dataList.length)
  		},
  		methods:{
  			isItem(index,allNum) {
		      this.isActive = index;
		      this.getPercentage(index,allNum)
		    },
		    getPercentage(index,allNum){
		    	let leftNum = (100/allNum).toFixed(4);
		    	document.querySelector(".abbp-tab-item").style.left = leftNum*index+'%';
		        document.querySelector(".abbp-tab-item").style.right = (100-leftNum*(index-0+1))+'%';
		        this.$emit('selectIndex',index)
		    }
  		}
	}
</script>

<style lang="less" scoped>
	.topWrap{
    	display: flex;text-align: center;
    	 position: relative;
    }
    .topWrap .abbp-tab-item{
    	background-color: transparent;
        height: 2px;
        position: absolute;
        left: 0;
        right: 50%;
        bottom: 0;
        transition: all 0.3s ease;
    }
    .topWrap .abbp-tab-item span{
    	display: block;
        height: 100%;
        background: #fb7618;
        width: 4em;
        margin: 0 auto;
    }
    .tabItem{
    	flex: 1;
    }
    .tabItem.active{
    	color: #fb7618;
    }
    .tabItem span{
    	font-size: 13px;
        padding-bottom: 5px;
        display: inline-block;
    }
</style>