// Define interactive elements
const profilesContainer = document.getElementById("profilesContainer");
const initialProfiles = document.getElementsByClassName("c-profile");
// selectors
const selectors = document.querySelectorAll(".select select");
// searchbar
const searchBar = document.getElementById("search");
// Deep clone all html elements
const allProfiles = Array.from(initialProfiles).map(profile =>
	profile.cloneNode(true)
);

const composedFilter = e => {
	// current selectors values
	const years = document.getElementById("years").value;
	const language = document.getElementById("programming_languages").value;
	const searchText = searchBar.value.toLowerCase();

	//filter by age
	const filteredProfiles = allProfiles
		.filter(profile => profile.dataset.years >= years)
		.filter(
			profile =>
				language === "all" ||
				profile.dataset.languages.indexOf(language) !== -1
		)
		.filter(
			profile =>
				searchText === "" ||
				profile.dataset.name.toLowerCase().indexOf(searchText) !== -1
		);
	return filteredProfiles;
};

const updateProfilesList = e => {
	profilesContainer.innerHTML = "";
	composedFilter(e).map(profile => profilesContainer.appendChild(profile));
};

// Add event listeners
for (let i = 0; i < selectors.length; i++) {
	selectors[i].addEventListener("change", updateProfilesList);
}
searchBar.addEventListener("keyup", updateProfilesList);
