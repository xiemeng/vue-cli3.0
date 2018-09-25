import ToastComponent from './toast.vue'
let $vm;//限制只添加一次,定义一个vue字类对象
const plugin = {
	install(vue,pluginOptions = {}){
		const Toast = vue.extend(ToastComponent)
		//dom节点的插入
		if (!$vm) {
	      $vm = new Toast({
	        el: document.createElement('div')
	      })
	      document.body.appendChild($vm.$el)
	    }
		
		//定义方法
	    const toast = {
	    	show(text,time){
	    		$vm.show(text,time)
	    	}
	    }
	    //添加方法
	    if (!vue.$abbo) {
	      vue.$abbo = {
	        toast
	      }
	    } else {
	      vue.$abbo.toast = toast
	    }
	    //全局注入一个方法
	    vue.mixin({
	      created: function () {
	        this.$abbo = vue.$abbo
	      }
	    })
	}
}



export default plugin