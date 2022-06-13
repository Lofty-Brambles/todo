function todoFactory(name, description, dueDate, priority) {
	const set = (prop, value) => {
		switch(prop) {
			case "name": name = value;
				break;
			case "description": description = value;
				break;
			case "dueDate": dueDate = value;
				break;
			case "priority": priority = value;
		}
	}

	const get = (prop) => {
		switch(prop) {
			case "name": return name;
			case "description": return description;
			case "dueDate": return dueDate;
			case "priority": return priority;
			default: return null;
		}
	}

	return { name, description,
			dueDate, priority, 
			set, get }
}

function projFactory(projectsObj, gList) {
	const mute = projectsObj.mute ?? false;
	const sort = projectsObj.sort;
	const list = projProcessor(projectsObj, gList);

	return { mute, sort, list }

	function projProcessor(tasksObj, globalList) {
		const list = [];
		tasksObj.forEach(e => {
			const reformed = todoFactory(
				e.name,
				e.description,
				e.dueDate,
				e.priority
			);
			list.push(reformed);

			if (globalList) {
				globalList.push(reformed);
			}
		});
		return list;
	}
}

function globalFactory(globalObj) {
	const recurs = globalObj.recurs;

	const projects = {};
	const global = [];
	for (const pair of Object.entries(globalObj.projects)) {
		projects[pair[0]] = projFactory(pair[1], global);
	}
	projects.global = global;
	return { projects, recurs };
}

export default globalFactory;