/**
 * 
 */
	var tabBox = {
			
		onTabClicked : function(event) {
				var lisSelected = document.getElementsByClassName("selected");
				// unselected
				(lisSelected.length == 1) && (lisSelected[0].className = "");
				// selected
				this.className = "selected";
		},
			
		init : function() {
			console.log(this);
			var div = document.getElementsByClassName("tab-box")[0];
			var ul = div.childNodes[1];
			var lis = ul.getElementsByTagName("li");

			for (var i = 0; i < lis.length; i++) {
				lis[i].addEventListener("click", this.onTabClicked);
			}
		}
	}
