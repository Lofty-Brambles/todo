export const navcreate = () => {
	const nav = document.createElement("div");
	nav.classList.add("nav");
	const assign = [
		["important", "stars"],
		["projects", "task"],
		["recurring", "cached"],
		["analytics", "analytics"],
		["logs", "note"]
	];
	addIcons(assign);
	return nav;

	function createIcon(name, iconTxt) {
		const icon = document.createElement("div");
		icon.classList.add("nav-icon");
		icon.setAttribute("id", name);
		icon.innerHTML = `<span class="material-symbols-outlined md-48">
			${iconTxt}</span>`;
		return icon;
	}

	function addIcons(array) {
		array.forEach(element => {
			nav.appendChild(createIcon(
				element[0], element[1]
			));
		});
	}
}