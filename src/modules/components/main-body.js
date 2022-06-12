export const mainbodycreate = () => {
	const buttonList = document.createElement("div");
	buttonList.classList.add("button-list");
	buttons(
		["search", "search"],
		["sort", "sort"],
		["github", "data_array"]
	).forEach(ele => {
		buttonList.appendChild(ele);
	});
	const topicTxt = document.createElement("div");
	topicTxt.classList.add("topic-txt");
	const topicBar = document.createElement("div");
	topicBar.classList.add("topic-bar");
	topicBar.appendChild(topicTxt);
	topicBar.appendChild(buttonList);

	const taskWrapper = document.createElement("div");
	taskWrapper.classList.add("task-wrapper");

	const mainBody = document.createElement("main");
	[topicBar, taskWrapper].forEach(ele => {
		mainBody.appendChild(ele);
	});
	return mainBody;

	function buttons(...args) {
		const array = [];
		args.forEach(ele => {
			const butt = document.createElement("button");
			butt.classList.add(ele[0]);
			const inner = document.createElement("span");
			inner.classList.add("material-symbols-outlined");
			inner.textContent = ele[1];
			butt.appendChild(inner);
			array.push(butt);
		});
		return array;
	}
};