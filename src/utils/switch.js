//切换动画
import router from '@/router'
import store from '@/store'
const history = window.sessionStorage;
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0);
router.beforeEach(function (to, from, next) {
	const toIndex = history.getItem(to.path);
	const fromIndex = history.getItem(from.path);
	store.commit('updateLoadingStatus', {isLoading: true});
	if (toIndex) {//页面过渡效果 
	    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
	    	 //第一次进入页面
	    	 if(to.name=="home" || to.name=="mine" || to.name=="invest"){
	    	 	store.commit('updateDirectionStatus', {direction: 'names'})
	    	 }else{
	    	 	store.commit('updateDirectionStatus', {direction: 'vux-pop-in'})
	    	 }
	    } else {   
	    	//第二次进入页面
	    	if(from.name=="home" || from.name=="mine" || from.name=="invest"){
	    	 	store.commit('updateDirectionStatus', {direction: 'names'})
	    	 }else{
	    	 	store.commit('updateDirectionStatus', {direction: 'vux-pop-out'})
	    	 }
	    }
	} else {   //新页面
			++historyCount
		    history.setItem('count', historyCount)
		    to.path !== '/' && history.setItem(to.path, historyCount);
		    if(to.name=="home" || to.name=="mine" || to.name=="invest"){
	    	 	store.commit('updateDirectionStatus', {direction: 'names'})
	    	 }else{
	    	 	store.commit('updateDirectionStatus', {direction: 'vux-pop-in'})
	    	 }
	}
	document.title = to.meta.title || '银蝶';
	next();
})
router.afterEach(function (to) {
	store.commit('updateLoadingStatus', {isLoading: false})
})