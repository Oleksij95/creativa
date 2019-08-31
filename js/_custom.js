document.addEventListener("DOMContentLoaded", function() {

	function Accordion(){
		let item_titles = document.querySelectorAll(".about_item_title");
		for(let i = 0; i < item_titles.length; i++){
			item_titles[i].addEventListener("click", function(){
				this.closest(".about_item").classList.toggle("active_item");
			})
		}
	}

	Accordion();

});
