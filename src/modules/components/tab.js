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
		icon.classList.add(name);
		icon.setAttribute("id", name);
		icon.innerHTML = `<span class="material-symbols-outlined md-40">
			${iconTxt}</span>`;

		const iconPill = document.createElement("div");
		iconPill.classList.add("nav-icon-pill");
		icon.classList.add(name);

		const iconWrapper = document.createElement("div");
		iconWrapper.classList.add("nav-icon-wrapper");
		iconWrapper.appendChild(iconPill);
		iconWrapper.appendChild(icon);
		return iconWrapper;
	}

	function addIcons(array) {
		array.forEach(element => {
			nav.appendChild(createIcon(
				element[0], element[1]
			));
		});
	}
}