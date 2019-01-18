<template>
	<!-- 手势滑动组件 -->
	<div 
	  class="inner" 
	  :class="isMove?'touch-move-active':''"
	  @touchstart="touchstart" 
	  @touchmove="touchmove">
	  <div class="conent"><slot name="conent"></slot></div>
	  <div class="sidebasr"><slot name="sidebasr"></slot></div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				isMove: false,//是否移动
				startX: 0, //开始坐标
				startY: 0
			};
		},
		methods: {
			// 这里是一个自定义方法
			touchstart (even) {
			  this.startX = even.changedTouches[0].clientX;
			  this.startY = even.changedTouches[0].clientY;
			},
			touchmove (even) {
			  var index = even.currentTarget.dataset.index,//当前索引
				startX = this.startX,//开始X坐标
				startY = this.startY,//开始Y坐标
				touchMoveX = even.changedTouches[0].clientX,//滑动变化坐标
				touchMoveY = even.changedTouches[0].clientY,//滑动变化坐标
				//获取滑动角度
				angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
			  //滑动超过30度角 return
			  if (Math.abs(angle) > 30) return;
			  if (touchMoveX > startX) {
				this.isMove = false;
			  } else {//左滑
				this.isMove = true;
			  }


			},
			/**    
			* 计算滑动角度   
			* @param {Object} start 起点坐标   
			* @param {Object} end 终点坐标   
			*/
			angle: function (start, end) {
			  var _X = end.X - start.X,
				_Y = end.Y - start.Y
			  //返回角度 /Math.atan()返回数字的反正切值
			  return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
			},
		}
	}
</script>

<style>
	.inner{
	  display: flex;justify-content: space-between;width: 100%;
	  overflow: hidden;
	}
	.inner .conent{
	  margin-left: -90px;
	  margin-right:0;width:100%;
	  -webkit-transition: all 0.4s;
	  transition: all 0.4s;
	  -webkit-transform: translateX(90px);
	  transform: translateX(90px);
	}
	.inner .sidebasr{
	  width: 90px;text-align: center;
	  transform: translateX(90px);
	  -webkit-transition: all 0.4s;
	  transition: all 0.4s;
	}
	.touch-move-active .conent,.touch-move-active .sidebasr{
	  -webkit-transform: translateX(0px);
	  transform: translateX(0px);
	}
</style>
