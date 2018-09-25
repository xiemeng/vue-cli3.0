<template>
	<div id="invest">
		<a>{{reversedMessage}}</a>
		<swiper @change="change" :isSelect="true"></swiper>
		<tab :dataList="dataList" :selectActive="'1'" @selectIndex="selectIndex"></tab>
		<foot></foot>   <!--底部组件-->
	</div>
</template>


<script>
	import foot from '@/components/footer.vue';
	import swiper from '@/components/template/swiper';
	import tab from '@/components/template/tab';
	export default {
	  components: {foot,swiper,tab},
	  data () {
	    return {
	    	dataList:[
	    		{title:'学校'},
	    		{title:'家'},
	    		{title:'作业'},
	    		{title:'女人'}
	    	],
	    	message: 'Hello'
	    }
	  },
	  created(){
	  	
	  },
	  computed:{
	  	//当依赖发生变化时，这个函数也会变化
	  	reversedMessage:{
	  		get:function(){
	  			return this.message
	  		},
	  		set:function(newVal){
	  			this.message = newVal
	  		}
	  	}
	  },
	  activated(){
	  	
	  },
	  mounted(){
	  	console.log(this.reversedMessage)
	  },
	  methods:{
	  		change(isChecked){
	  			console.log(isChecked)
	  			this.reversedMessage = '1111'
	  		},
	  		selectIndex(index){
	  			console.log(index)
	  		}
	  },
	  watch: {
	   
	  },

	}
	
</script>


<style lang="less" scoped>
/*深度选择器了解一下*/
@deep:~'>>>';
#invest{
	.abbo-switch{
		color: red;
	}
	.abbo-switch:before{
		color: blue;
	}
	.abbo-switch:after{
		color: aquamarine;
	}
	
	
	.topWrap{
		@{deep} .tabItem{
			span{
				padding-bottom: 20px;
			}
		}
	}
}
	
</style>