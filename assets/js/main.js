// Define interactive elements
const profilesContainer = document.getElementById("profilesContainer");
const initialProfiles = document.getElementsByClassName("c-profile");
// selectors
const selectors = document.querySelectorAll(".select select");
// searchbar
const searchBar = document.getElementById("search");
// Deep clone all html elements so we can use it as base for our
// filtering needs
const allProfiles = Array.from(initialProfiles).map(profile =>
	profile.cloneNode(true)
);

/**
 * Uses the deep copy of the original profiles and then filteres it
 * using functional methods so that the original list doesn't get destroyed.
 * A new filtered list is returned on every filtering iteration
 */
const composedFilter = () => {
	// current selectors values
	const years = document.getElementById("years").value;
	const language = document.getElementById("programming_languages").value;
	const workOptions = document.getElementById("work_options").value;
	const availability = document.getElementById("availability").value;
	const searchText = searchBar.value.toLowerCase();

	//filter by age
	const filteredProfiles = allProfiles
		.filter(
			profile =>
				years === "all" || profile.dataset.years.indexOf(years) !== -1
		) //by years
		.filter(
			// by prog languages
			profile =>
				language === "all" ||
				profile.dataset.languages.indexOf(language) !== -1
		)
		.filter(
			// by work option
			profile =>
				workOptions === "all" ||
				profile.dataset.woptions.indexOf(workOptions) !== -1
		)
		.filter(
			// by availability
			profile =>
				availability === "all" ||
				profile.dataset.availability.indexOf(availability) !== -1
		)
		.filter(
			// by search input
			profile =>
				searchText === "" ||
				profile.dataset.name.toLowerCase().indexOf(searchText) !== -1
		);
	return filteredProfiles;
};

/**
 * replaces the current profiles with the filtered one
 *
 */
const updateProfilesList = () => {
	profilesContainer.innerHTML = "";
	composedFilter().map(profile => profilesContainer.appendChild(profile));
};

// Add event listeners
for (let i = 0; i < selectors.length; i++) {
	selectors[i].addEventListener("change", updateProfilesList);
}

// TODO throttle this if  rendering delays start to show up
searchBar.addEventListener("keyup", updateProfilesList);
