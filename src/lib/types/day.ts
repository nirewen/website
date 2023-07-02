export interface Day {
	weekday: string;
	date: string;
	menu: Menu[];
}

export interface Menu {
	type: string;
	content: Content[];
}

export interface Content {
	title: string;
	ingredients: string[];
}
