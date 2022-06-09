export const sidebarcreate = () => {
	const sideBar = document.createElement("div");
	sideBar.classList.add("sidebar");

	const topBar = addTopBar();
	const bottomBar = addBottomBar();
	const midBar = document.createElement("div");
	midBar.classList.add("sidebar-mid");

	[topBar, midBar, bottomBar].forEach(element => {
		sideBar.appendChild(element);
	});
	return sideBar;

	function addTopBar() {
		const top = document.createElement("div");
		top.classList.add("sidebar-top");

		const contentLeft = document.createElement("div");
		const contentRight = document.createElement("button");

		contentLeft.classList.add("section-title");
		contentRight.classList.add("more-menu");
		contentRight.innerHTML = `<span class="material-symbols-outlined">
			more</span>`;

		top.appendChild(contentLeft);
		top.appendChild(contentRight);
		return top;
	}

	function addBottomBar() {
		const bottom = document.createElement("div");
		bottom.classList.add("sidebar-bottom");

		const logoImg = document.createElement("img");
		const logoTxt = document.createElement("div");
		const settingBtn = document.createElement("button");
		const settings = document.createElement("span");

		logoImg.classList.add("logo-img");
		logoImg.classList.add("block");
		logoImg.src = "./../../assets/";
		logoImg.alt = "logo";

		logoTxt.classList.add("logo-txt");
		logoTxt.textContent = "Let's To-Do!";

		settings.classList.add("block");
		settings.classList.add("material-symbols-outlined");
		settings.textContent = "settings";
		settingBtn.appendChild(settings);

		[logoImg, logoTxt, settingBtn].forEach(element => {
			bottom.appendChild(element);
		});
		return bottom;
	}
};