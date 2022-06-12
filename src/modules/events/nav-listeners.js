import {
	loadStars,
	loadProjects,
	loadRepeats,
	loadNotes,
	loadStats
} from "./loaders";

export function navListeners() {
	const names = [
		"important",
		"projects",
		"recurring",
		"analytics",
		"logs"
	];
	const elements = fetchElements(names);
	elements.forEach(ele => {
		ele.addEventListener("click", e => {listen(e)});
	});

	function fetchElements(nameArray) {
		const array = [];
		nameArray.forEach(element => {
			array.push(
				document.querySelector("#"+element)
			);
		});
		return array;
	}

	function listen(e) {
		document.querySelectorAll(".nav-icon-pill").forEach(ele => {
			ele.classList.remove("active");
		});
		const navIconPill = e.target.parentNode.previousSibling;
		navIconPill.classList.add("active");
		decideAction(
			e.target.textContent.trim(),
			document.querySelector(".section-title"),
			[...document.querySelectorAll(".button-list > button")],
			document.querySelector(".topic-txt")
		);
	}

	function decideAction(str, title, btns, topic) {
		switch(str) {
			case "stars": 
				title.textContent = "🌠 Importants";
				topic.textContent = "This is where you view all your starred tasks.";
				btns.forEach(btn => {
					btn.style.display = "flex";
				});
				loadStars();
				break;
			case "task": 
				title.textContent = "📝 Task Lists";
				topic.textContent = "This is where you manage all your tasks.";
				btns.forEach(btn => {
					btn.style.display = "flex";
				});
				loadProjects();
				break;
			case "cached": 
				title.textContent = "🔄 Repeating Tasks";
				topic.textContent = "This is where you manage repeating tasks.";
				btns.forEach(btn => {
					btn.style.display = "flex";
				});
				loadRepeats();
				break;
			case "analytics": 
				title.textContent = "📊 Analytics";
				topic.textContent = "This is where you view statistics.";
				btns.forEach(btn => {
					btn.style.display = "flex";
				});
				btns[0].style.display = "none";
				btns[1].style.display = "none";
				loadStats();
				break;
			case "note": 
				title.textContent = "📜 Logs";
				topic.textContent = "This is where you manage random snippets.";
				btns.forEach(btn => {
					btn.style.display = "flex";
				});
				btns[0].style.display = "none";
				btns[1].style.display = "none";
				loadNotes();
				break;
		}
	}
};