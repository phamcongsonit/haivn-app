$(function(){
	$("#message").text("Đang tải dữ liệu, vui lòng đợi trong giây lát");
	if (hasInternets()){
		$("#webmobile").show();
		$("#offline").hide();
	}else{
		$("#webmobile").hide();
		$("#offline").text("Vui lòng kết nối mạng, hoặc server đang bảo trì");
		$("#offline").show();
	}
});
function hasInternets() {
	var s = $.ajax({ 
		type: "HEAD",
		url: "http://m.haivainoi.com",
		async: false
	}).status;
	//thx http://www.louisremi.com/2011/04/22/navigator-online-alternative-serverreachable/	
	return s >= 200 && s < 300 || s === 304;
};