//获取show页面没有播放的广告位
var trs = [].slice.call( document.querySelectorAll('td[title="Played"]') );
var rs = trs.filter( i=>i.innerHTML==0).map(i=>{
	return i.parentNode.parentNode.childNodes[1].childNodes[0].innerHTML;
});
rs = rs.reduce((obj,r)=>{
	if ( !~obj.indexOf(r) ) {
		obj.push(r);
	}
	return obj;
},[]).sort();