// Define interactive elements
const profiles = document.getElementsByClassName("c-profile");
const programmingLanguagesSelector = document.getElementById(
	"programming_languages"
);
const yearsSelector = document.getElementById("years");

// trigger years filter

const filterByYears = e => {
	for (let i = 0; i < profiles.length; i++) {
		if (parseInt(profiles[i].dataset.years) < e.target.value) {
			profiles[i].classList.add("d-none");
			profiles[i].classList.remove("d-flex");
		} else {
			profiles[i].classList.remove("d-none");
			profiles[i].classList.add("d-flex");
		}
	}
};
yearsSelector.addEventListener("change", filterByYears);

// trigger languages filter
const filterByProgLang = e => {
	if (e.target.value === "all") {
		for (let i = 0; i < profiles.length; i++) {
			profiles[i].classList.remove("d-none");
			profiles[i].classList.add("d-flex");
		}
	} else {
		for (let i = 0; i < profiles.length; i++) {
			if (profiles[i].dataset.languages.indexOf(e.target.value) !== -1) {
				profiles[i].classList.remove("d-none");
				profiles[i].classList.add("d-flex");
			} else {
				profiles[i].classList.add("d-none");
				profiles[i].classList.remove("d-flex");
			}
		}
	}
};

programmingLanguagesSelector.addEventListener("change", filterByProgLang);
