var count=6;


$(function(){
	
	for (var i=count;i>0;i--)
	{
	
		var li=' <li>'+
			' <div class="am-gallery-item">'+
			' <a href="images/'+i+'.jpg" class="">'+
			' <img src="images/'+i+'.jpg"  alt="第'+i+'天"/>'+
			' <h3 class="am-gallery-title">第'+i+'天</h3>'+
			' <div class="am-gallery-desc">第'+i+'天</div>'+
			' </a>'+
			' </div>'+
			' </li>';
		
		$("#mainUl").append(li);
		
	}
	
});
