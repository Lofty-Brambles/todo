import swal from "sweetalert";

export function loadTheme() {
	(function setTheme() {
		const theme = localStorage.getItem("theme");
		if ( theme ) {
			document.body.classList.add(theme);
		} else {
			document.body.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
	})();

	(function settingsListener() {
		const sett = document.querySelector(".sidebar-bottom > button");
		sett.addEventListener("click", () => {
			swal({

				content: themer(),
				buttons: {
					cancel: true,
					confirm: true,
				},

			}).then( ( value ) => {
				if ( value ) {

					const theme = document.body.classList[0];
					localStorage.setItem("theme", theme);
					swal({
						content: themeSetConfirm(),
						icon: "success"
					});

				} else {

					document.body.removeAttribute("class");
					document.body.classList.add(
						localStorage.getItem("theme")
					);

				}
			} );
		});
	})();

	function themer() {

		const selectMenu = document.createElement("div");
		selectMenu.classList.add("theming-div");
		selectMenu.innerHTML = `<h4>Select your theme!</h4>`;

		const menu = document.createElement("select");
		menu.setAttribute("id", "theme-menu");

		const op1 = document.createElement("option");
		op1.value = "dark";
		op1.textContent = "⬛ Dark";
		const op2 = document.createElement("option");
		op2.value = "light";
		op2.textContent = "⬜ Light";

		[op1, op2].forEach(e => {
			if (e.value === document.body.classList[0]) {
				e.setAttribute("selected", true);
			} else {
				e.removeAttribute("selected");
			}
			menu.appendChild(e);
		});
		selectMenu.appendChild(menu);

		menu.addEventListener("change", e => {
			document.body.removeAttribute("class");
			document.body.classList.add(e.target.value);
		});
		return selectMenu;
	}

	function themeSetConfirm() {
		const doneMsg = document.createElement("div");
		doneMsg.classList.add("theming-div");
		doneMsg.innerHTML = "<h4>Your theme is now set!</h4>";
		return doneMsg;
	}
}