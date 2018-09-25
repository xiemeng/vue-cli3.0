<template>
    <input class="abbo-switch" type="checkbox" @change="change" v-model="isChecked"/>
</template>

<script>
	export default{
		data(){
			return {
				isChecked:false
			}
		},
		props:{
			isSelect:{  //是否选中
				type:[Boolean],
				default:false
			}
		},
		mounted(){
			this.isChecked = this.isSelect;
			
  		},
  		methods:{
  			change(){
  				this.$emit('change',this.isChecked)
  				
  			}
  		}
	}
</script>

<style lang="less" scoped>
	/*
	 * abbo 修改与 2018/9/3
	 * 
	 * 
	 */
	/*选中的颜色*/
	.abbo-switch{
		position: relative;
	    width: 52px;
	    height: 32px;
	    border: 1px solid currentcolor;
	    outline: 0;
	    color: yellowgreen;
	    border-radius: 16px;
	    box-sizing: border-box;
	    background-color: currentcolor;
	    -webkit-transition: background-color 0.1s, border 0.1s;
	    transition: background-color 0.1s, border 0.1s;
	     -webkit-appearance: none;
	    -moz-appearance: none;
	    appearance: none;
	}
	/*未选中的颜色*/
	.abbo-switch:before{
		content: " ";
        position: absolute;
        top: -1px;
        left: -1px;
        width: 50px;
        height: 30px;
        border-radius: 15px;
        color: #DFDFDF;
        background-color: currentcolor;
        border: 1px solid currentcolor;
        transition:transform .35s cubic-bezier(0.45, 1, 0.4, 1);
	}
	/*圆圈的颜色*/
	.abbo-switch:after{  
		content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        color: #fff;
        border-radius: 15px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
        background-color: currentcolor;
        transition:transform .35s cubic-bezier(0.45, 1, 0.4, 1);
	}
	.abbo-switch:checked:before{
		transform: scale(0);
	}
	.abbo-switch:checked:after{
		transform: translateX(20px);
	}
</style>