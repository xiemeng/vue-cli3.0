<template>
  <div id="app">
    <transition :name="direction">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  	export default {
    computed: {
      direction(){
      	return this.$store.state.common.direction;
      },
      
    },
    data () {
      return {
      	
      }
    },
    mounted(){
    	
    },
    methods: {
    	
    },
  }
</script>
<style lang="less">
	@import url("./assets/css/common.css");
	@import url("./assets/font/iconfont.css");
	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 680px;
}
.router-view {
    min-height: 100%;
    min-width: 100%;
    backface-visibility: hidden;
    position: relative;
  }
  
  
  /*动画*/
.vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    backface-visibility: hidden;
    transition: all 500ms;
    position: absolute;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
