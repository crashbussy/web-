var i=0;
function count(){
	i+=1
	postMessage(i)
	setTimeout("count()",100)
}
count();