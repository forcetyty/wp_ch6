/**
 * 
 */
// DOM을 파싱해서 읽어오는 기능!!!
	var tabBox = {
		liSelected : null, 
		onTabClicked : function(){
			if (tabBox.liSelected != null) {
				tabBox.liSelected.className = "";
			}
			this.className = "selected";
			tabBox.liSelected = this;
		},	
		init : function() {
			var div = document.getElementsByClassName("tab-box")[0];
			var ul = div.childNodes[1]; /* 트레버스  */
			var lis = ul.getElementsByTagName("li");
			for (var i = 0; i < lis.length; i++) {
				lis[i].onclick = this.onTabClicked;
			}
		}
	}