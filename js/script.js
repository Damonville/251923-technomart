var link = document.querySelector(".btn-lost");

var popup = document.querySelector(".modal-content");

var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector(".login-form");

var clientName = popup.querySelector(".client-name");

var email = popup.querySelector(".client-email");

var letter = popup.querySelector(".client-letter");

var storage = localStorage.getItem(".client-name");

	link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");

	if (storage) {
		clientName.value = storage;
		email.focus();
		} else {
		clientName.focus();
	}
});

	close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});

	form.addEventListener("submit", function(event) {
		if (!clientName.value || !email.value || !letter.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;

	popup.classList.add("modal-error"); 
}
	else {
		localStorage.setItem(".client-name", clientName.value);
	}
});
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
		}
	}
});

var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".modal-content-map");

var mapClose = mapPopup.querySelector(".modal-content-close");

	mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
});

	mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
		}
	}
});

var slideopen = document.querySelector(".slider-next");

var slideclose = document.querySelector(".slider-prev");

var slider2show = document.querySelector(".slider-2");

var slider1hide = document.querySelector(".slider-1");

	slideopen.addEventListener("click", function(event) {
	event.preventDefault(); 
	if (slider2show.classList.contains("show-slider")) {
	slider2show.classList.remove("show-slider");
	} else {
		slider2show.classList.add("show-slider");
	}
});
	slideopen.addEventListener("click", function(event) {
	event.preventDefault();
	if (slider1hide.classList.contains("slider-1-none")) {
	slider1hide.classList.remove("slider-1-none");
	} else {
		slider1hide.classList.add("slider-1-none");
	}
});
	slideclose.addEventListener("click", function(event) {
	event.preventDefault(); 
	if (slider2show.classList.contains("show-slider")) {
	slider2show.classList.remove("show-slider");
	} else {
		slider2show.classList.add("show-slider");
	}
});
	slideclose.addEventListener("click", function(event) {
	event.preventDefault();
	if (slider1hide.classList.contains("slider-1-none")) {
	slider1hide.classList.remove("slider-1-none");
	} else {
		slider1hide.classList.add("slider-1-none");
	}
});