<template>
  <div id="home">
  	首页{{ovj.abc}}
  	<router-link :to="{path:'/model'}">条状</router-link>
  	<div class="xButoon" @click="xToast">11</div>
  	
  	<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
  	
  	<foot></foot>
  </div>
  	
</template>

<script>
	import foot from '@/components/footer.vue';
	export default {
		components: {foot},
	  data () {
	    return {
	    	rangeValue:50,
	    	ovj:{
	    		abc:123456
	    	}
	    }
	  },
	  
	  methods:{
	  	xToast(){
	  		this.ovj.abc = 'ffff'
	  		console.log(this.$abbo)
	  		this.$abbo.toast.show('我是中国人')
	  	}
	  },
	  created(){
				
	  },
	  activated(){
	  	
	  },
	  mounted(){
	  	
	  }
	}
</script>


<style lang="less" scoped>
	
</style>
