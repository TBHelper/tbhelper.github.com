document.writeln("<div class=\"float-contact\" id=\"float-contact\" style=\"position: fixed;z-index:1000; right: 1px; display: block;\">");
document.writeln("<a title=\"点击收缩\" href=\"javascript:void(0);\" onclick=\"show()\" class=\"close\" id=\"float-contact-close\">点击收缩</a>");
document.writeln("<div class=\"container\">");
document.writeln("<div class=\"qq\">");
document.writeln("<h3 class=\"qqtitle\">在线客服</h3>");
document.writeln("<ul class=\"btn\">");
document.writeln("<li><a title=\"咨询客服\" target=\"_blank\" href=\"tencent://message/?uin=1813380077&Site=qq&Menu=yes\">咨询客服</a></li>");
document.writeln("<li><a title=\"咨询客服\" target=\"_blank\" href=\"tencent://message/?uin=1813380077&Site=qq&Menu=yes\">咨询客服</a></li>");
document.writeln("<li><a title=\"咨询客服\" target=\"_blank\" href=\"tencent://message/?uin=1815570077&Site=qq&Menu=yes\">咨询客服</a></li>");
document.writeln("<li><a title=\"咨询客服\" target=\"_blank\" href=\"tencent://message/?uin=1815570077&Site=qq&Menu=yes\">咨询客服</a></li>");
document.writeln("</ul>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("<div class=\"float-contact-mini\" id=\"float-contact-mini\" style=\"display: none; position: fixed; right: 1px;\">");
document.writeln("<a href=\"javascript:void(0);\" onmousemove=\"show()\" id=\"float-contact-mini\">联系我们</a>");
document.writeln("</div>");
function show() {
	var floatContact = document.getElementById('float-contact');
	var floatContactMini = document.getElementById('float-contact-mini');
	if(floatContact.style.display=="none") {
		floatContact.style.display="block";
		floatContactMini.style.display="none";
	}else {
		floatContact.style.display="none";
		floatContactMini.style.display="block";
	}
}
 