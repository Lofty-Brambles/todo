function fetch(query) {
	return document.querySelector(query);
}

const body = fetch("body");
const navElements = {
	main: fetch(".nav"),
	important: fetch("#important"),
	projects: fetch("#projects"),
	recur: fetch("#recurring"),
	analytics: fetch("#analytics"),
	logs: fetch("#logs")
}
const sideElements = {
	main: fetch(".sidebar"),
	title: fetch(".sidebar-title"),
	button: fetch(".more-menu"),
	light: fetch("#light-mode"),
	
	content: fetch(".sidebar-mid"),
	settings: fetch(".sidebar-bottom > button")
}

export {
	body,
	navElements,
	sideElements
}