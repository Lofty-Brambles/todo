import { navcreate } from "./components/tab";
import { sidebarcreate } from "./components/sidebar";
import { mainbodycreate } from "./components/mainBody";

function linkIcons() {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
	document.head.appendChild(link);
}

function initPage() {
	document.body.appendChild(navcreate());
	document.body.appendChild(sidebarcreate());
	document.body.appendChild(mainbodycreate());
}

export {linkIcons, initPage};