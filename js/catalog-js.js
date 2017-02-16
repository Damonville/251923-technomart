var buy = document.querySelectorAll(".btn-buy-item");

var contantCatalog = document.querySelector(".modal-content-catalog");

var close = contantCatalog.querySelector(".modal-content-close");

	for(var i=0;i<buy.length;i++){
		buy[i].addEventListener("click", function(event) {
		event.preventDefault();
		contantCatalog.classList.add("modal-content-show");
		});
	}
	close.addEventListener("click", function(event) {
	event.preventDefault();
	contantCatalog.classList.remove("modal-content-show");
});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
		if (contantCatalog.classList.contains("modal-content-show")) {
			contantCatalog.classList.remove("modal-content-show");
		}
	}
});