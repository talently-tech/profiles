// Define interactive elements
const profilesContainer = document.getElementById("profilesContainer");
const initialProfiles = document.getElementsByClassName("c-profile");
const allProfiles = Array.from(initialProfiles).map(profile =>
	profile.cloneNode(true)
);
// selectors
const selectors = document.querySelectorAll(".select select");

const composedFilter = e => {
	// current selectors values
	const years = document.getElementById("years").value;
	const language = document.getElementById("programming_languages").value;
	//filter by age
	const filteredProfiles = allProfiles
		.filter(profile => profile.dataset.years >= years)
		.filter(
			profile =>
				language === "all" ||
				profile.dataset.languages.indexOf(language) !== -1
		);
	return filteredProfiles;
};

const updateProfilesList = e => {
	profilesContainer.innerHTML = "";
	composedFilter(e).map(profile => profilesContainer.appendChild(profile));
};

for (let i = 0; i < selectors.length; i++) {
	selectors[i].addEventListener("change", updateProfilesList);
}
