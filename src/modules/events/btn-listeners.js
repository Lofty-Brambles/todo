export function btnListeners() {
	const btns = document.querySelectorAll(".button-list > button");

	btns[2].addEventListener("click", () => {
		location.href = "https://github.com/Lofty-Brambles/todo";
	});

}