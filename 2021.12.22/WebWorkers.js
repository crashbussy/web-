var w;

function start(){
	if(typeof(Worker)!=="undefined"){
		if(typeof(w)=="undefined"){
			w=new Worker("js文件的使用.js")
		}
		w.onmessage = function(event){
			document.getElementById("r").innerHTML = event.data
			// console.log(event.data)
			
		}
		
	}else{
		document.getElementById("r").innerHTML = "不支持 web workers"
	}
}

function stop(){
	w.terminate()
	w = undefined
}