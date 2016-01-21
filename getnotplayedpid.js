//获取播放量为0的广告位 检查bug
var trs = [].slice.call( document.querySelectorAll('td[title="Played"]') );
var played = trs.filter( i=> parseInt(i.innerHTML)||0 > 0).map(i=>{
	return i.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML;
});
var notplayed = trs.filter( i=>i.innerHTML==0).map(i=>{
	return i.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML;
});
//去重
rs = notplayed.reduce((obj,r)=>{
	if ( !~obj.indexOf(r) && !~played.indexOf(r) ) {
		obj.push(r);
	}
	return obj;
},[]).sort();
console.log(rs);