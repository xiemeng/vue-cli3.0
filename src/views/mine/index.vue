<template>
  <div id="home">
  	<div class="wrap">
  		<load-more class="loadermore" @onScroll="onScroll" :tipText="'没有更多数据了'">
	  		<ul slot="conent" class="loadConent">
	  			<li v-for="(item,index) in orderList">{{item.id}}wwwwwwww{{index}}</li>
	  		</ul>
	  	</load-more>
  	</div>
  	
  	<foot></foot>
  </div>
  	
</template>

<script>
	import foot from '@/components/footer.vue';
	import loadMore from '@/components/template/loadMore';
	import {goodsList} from '@/api/index.js';
	export default {
		components: {foot,loadMore},
	  data () {
	    return {
	    	orderList:[],
	    	arr:[
					{"name":1},
					{"name":2},
					{"name":3},
					{"name":4},
					{"name":5},
					{"name":6},
					{"name":1},
					{"name":2}
				],
				currentPage:1,//当前页
				pageSize:10,//每页数据大小
	    }
	  },
	  methods:{
	  		getData($state){
			    	goodsList(this.currentPage,this.pageSize).then((res)=>{
			    		if(res.code == 0){
			    			this.orderList.push(...res.data.data);
			    			this.currentPage++
			    			if(res.data.currentPage<res.data.totalsPage){ //还有数据
			    				if($state){
			    						$state.scrollHave();
			    				}
			    			}else{  //数据加载完
			    				$state.scrollEnd();
			    			}
			    		}
			    	}).catch((error)=>{
			    		$state.scrollEnd();
			    	})
		    },
		    onScroll($state){  //无限加载
		    	this.getData($state)
		    }
	  },
	  created(){
	  	
	  },
	  activated(){
	  	
	  },
	  mounted(){
	 			
	  },
	  
	}
</script>


<style lang="less" scoped>
	.loadermore{
		height:100vh;
		overflow: scroll;
		padding-bottom: 50px;box-sizing: border-box;
	}
	.wrap{
		
	}
	.loadConent{
		overflow: auto;
	}
</style>
