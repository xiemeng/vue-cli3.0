import {touch} from './base.js'
/*
 * 正则匹配，金钱隔3位加逗号，电话隔4位加空格  使用方法，接收数字和字符串，接收第二个参数，传入tel时，采用电话格式
 * 
 * */
export const moneyFilter = function(moneyNum,str){
	moneyNum = String(moneyNum)
	if(str == 'tel'){
		var newMoney=moneyNum.replace(/(\d)(?=(\d{4})+(?!\d))/g, "$1 ")
	}else{
		var newMoney=moneyNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
	}
	return newMoney
}
/*
 * hash地址 获取特点参数方法    使用方法  var tel = getQueryString('act_id');
 * 
 * */
export const getQueryString = function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
		var url = window.location.href;
				
				var str=location.hash;
				var i=str.indexOf("?");
				var r = str.substr((i+1),str.length).match(reg);
				if (r!=null){
	    	console.log(unescape(r[2]))
	        return unescape(r[2]);
	    }else{
	        return null
	    };
	
	}
/*
 * 
 * 时间转换函数，传入时间戳，
 *
 */
export const formatDate = function(needTime){
			needTime = Number(needTime);
			function add0(m){return m<10?'0'+m:m }
	       var time = new Date(needTime);  
	       var y = time.getFullYear();  
	       var m = time.getMonth()+1;  
	       var d = time.getDate();  
	       var h = time.getHours();  
	      var mm = time.getMinutes();  
	      var s = time.getSeconds();  
		return add0(y)+'/'+add0(m)+'/'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);  
}
/*
 * 
 * 实现深复制  复制数组和对象  首选
 *
 */
export const cloneObj = function(obj){  
		    var str, newobj = obj.constructor === Array ? [] : {};
		    if(typeof obj !== 'object'){
		        return;
		    } else if(obj.constructor === Array){  //数组的话，采用系列化对象
		        str = JSON.stringify(obj), //系列化对象
		        newobj = JSON.parse(str); //还原
		    } else {    //对象采用循环赋值法
		        for(var i in obj){
		            newobj[i] = typeof obj[i] === 'object' ? 
		            cloneObj(obj[i]) : obj[i]; 
		        }
		    }
		    return newobj;
	}
/*
 * 
 * 判断手机还是电脑，手机返回true 电脑返回false
 *
 */
export const isPhone = function(){
	var system ={  
        win : false,  
        mac : false,  
        xll : false  
    };  
    var p = navigator.platform; 
    system.win = p.indexOf("Win") == 0;  
    system.mac = p.indexOf("Mac") == 0;  
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
    if(system.win||system.mac||system.xll){//电脑 
    	return false; 
    }else{     //手机
        return true;
    }  
}
/*
 * 
 * 获取相邻兄弟节点
 *
 */
export const siblings = (o)=>{  
	    let arr = [] ; //保存兄弟节点  
	    let prev = o.previousSibling; //o的前一个同胞节点  
	    //先往上查询兄弟节点  
	    while(prev){  
	        if(prev.nodeType == 1){  
	            arr.unshift(prev);//数组首部插入数组，保证节点顺序  
	        }  
	        prev = prev.previousSibling;//把上一节点赋值给prev  
	    }  
	    //往下查询兄弟节点  
	    let next = o.nextSibling;//o的后一个同胞节点  
	    while(next){  
	        if(next.nodeType == 1){  
	            arr.push(next);//数组尾部插入，保证节点顺序  
	        }  
	        next = next.nextSibling;//下一节点赋值给next，用于循环  
	    }  
	    return arr;  
	} 
/*
 * 
 * 给dom节点添加类名
 *
 */
export const addClass = (element, value)=>{  
			let newClassName;
			console.log(element.className)
	    if(!element.className){  
	        element.className = value;  
	    }else{  
	        newClassName = element.className;  
	        newClassName += " ";  
	        newClassName += value;  
	        element.className = newClassName;  
	    }  
	}  
/*
 * 
 * 给dom节点添加类名  ,如果有，就删除 ,3个参数，事件对象，添加或者删除的类名，标签名字
 *
 */
export const addClass2 = ($event,value,nodeCode)=>{  
		let newClassName,element;
		
		for(let i = 0;i<$event.path.length;i++){
			if($event.path[i].localName == nodeCode){
				
				element = $event.path[i];
				if(!element.className){    //如果有，直接加上去
			        element.className = value;  
			    }else if(element.className.indexOf(value)>=0){  //如果存在，就删除
			    	newClassName = element.className;
			    	let arr = newClassName.split(' ');
			    	let newArr = arr.filter(function(val){
			    		return val != value;
			    	})
			    	element.className = newArr.join(' '); 
			    }else{   //不存在，就加上去
			        newClassName = element.className;  
			        newClassName += " ";  
			        newClassName += value;  
			        element.className = newClassName;  
			    }  
				return;
			}
			
		} 
} 
//上传照片   图片上传及压缩  event2  change 对象  ，compression压缩值   返回新对象和旧对象
export const imgZigp = (event2,compression=30)=>{
	var files = event2.target.files || event2.dataTransfer.files;
    if (!files.length) {

    } else {
        var leng = files.length;
        for (var i = 0; i < leng; i++) {
            reader = new window.FileReader()
            reader.readAsDataURL(files[i]);
            reader.onerror = function(){
            	alert('添加失败1')
            };
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function () {
                    var mime_type = "image/jpeg";
                    var cvs = document.createElement('canvas');
                    imgWidth = this.width;
                    imgHeight = this.height;
                    cvs.width = this.width;
                    cvs.height = this.height;
                    var ctx = cvs.getContext("2d").drawImage(this, 0, 0,this.width,this.height);
                    var newImageData = cvs.toDataURL(mime_type, compression/100);
                    return [newImageData,e.target.result]
                };
                image.onerror = function(){
	                	alert('添加失败2')
	                }
            }
        }
    }
}
/拖拽事件  的封装，依赖上面touch  事件，  传入拖拽dom对象
export const dragw = function(drag,callBack){
		let wheight = window.innerHeight;
		let wWidth = window.innerWidth;
    	var startX,startY,dx,dy;
		
		var x = drag.offsetLeft;
    	var y = drag.offsetTop;
		let cHeight = drag.clientHeight/2;  
		let cWidth = drag.clientWidth/2;
		touch(drag,startFun,touchMove,touchEnd)
		function startFun(event){
			
			event.preventDefault();
	        //拿到这个手指
	        var thefinger = event.touches[0];
	        //记录开始触摸的位置
	        startX = thefinger.clientX;
	        startY = thefinger.clientY;
	        isDrag = true;
	        setTimeout(()=>{
				if(isDrag){
		  			if(callBack){
		  				callBack();
		  			}
				}
			},300)
    	};
    function touchMove(event,coord){
    	if(coord && Math.abs(coord.x)>5){//认定是滑动
    		isDrag = false;	
    		//拿到这个手指
	        var thefinger = event.touches[0];
	        //记录开始触摸的位置
	        dx = thefinger.clientX - startX;
	        dy = thefinger.clientY - startY;
	        drag.style.left = startX-cHeight + dx + "px";
	        drag.style.top = startY-cWidth + dy + "px";
	        if(startY-cWidth + dy<=0){
	        	drag.style.top = 0;
	        }
	        if(startY-cWidth + dy>=wheight-cWidth*2-61){
	        	drag.style.top = wheight-cWidth*2-61+'px';
	        }
	        if(startX-cHeight + dx<10){
	        	drag.style.left = 0;
	        }
	        if(startX-cHeight + dx>=innerWidth-cWidth*2){
	        	drag.style.left = innerWidth-cWidth*2+'px';
	        }
    	}
        
    };
    function touchEnd(coord){
//		    		if(startX-cHeight + dx<innerWidth/2){
//		            	drag.style.left = 0;
//		            }
//		            if(startX-cHeight + dx>=innerWidth/2){
//		            	drag.style.left = innerWidth-cWidth*2+'px';
//		            }
    }
}
/**
 *  封装四则运算，防止精度丢失
 * 
 *  返回一个 operation对象，含有4个方法
 **/

function Operation() {}
Operation.prototype = {
	constructor:Operation,
	// 加    
	numAdd (arg1, arg2) {
	    let r1, r2, m;
	    try {
	      r1 = arg1.toString().split(".")[1].length
	    } catch (e) {
	      r1 = 0
	    }
	    try {
	      r2 = arg2.toString().split(".")[1].length
	    } catch (e) {
	      r2 = 0
	    }
	    m = Math.pow(10, Math.max(r1, r2));
	    return (arg1 * m + arg2 * m) / m;
	},
	// 减    
	numSub(arg1, arg2) {
	    let r1, r2, m, n;
	    try {
	      r1 = arg1.toString().split(".")[1].length
	    } catch (e) {
	      r1 = 0
	    }
	    try {
	      r2 = arg2.toString().split(".")[1].length
	    } catch (e) {
	      r2 = 0
	    }
	    m = Math.pow(10, Math.max(r1, r2));
	    //动态控制精度长度    
	    n = (r1 >= r2) ? r1 : r2;
	    return ((arg1 * m - arg2 * m) / m).toFixed(n);
	},
	// 乘    
	numMul(arg1, arg2) {
	    let m = 0,
	      s1 = arg1.toString(),
	      s2 = arg2.toString();
	    try {
	      m += s1.split(".")[1].length
	    } catch (e) {}
	    try {
	      m += s2.split(".")[1].length
	    } catch (e) {}
	    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	},
	// 除   
	numDiv(arg1, arg2) {
	    let t1 = 0,
	      t2 = 0,
	      r1, r2;
	    try {
	      t1 = arg1.toString().split(".")[1].length
	    } catch (e) {}
	    try {
	      t2 = arg2.toString().split(".")[1].length
	    } catch (e) {}
	
	    r1 = Number(arg1.toString().replace(".", ""));
	
	    r2 = Number(arg2.toString().replace(".", ""));
	    return (r1 / r2) * Math.pow(10, t2 - t1);
	}
}

export const operation = new Operation();