export interface Building {
	id: number;
	name: string;
	images: string[];
	locations: Location[];
}

export interface BuildingInfo {
	id: number;
	name: string;
	description: string;
	images: string[];
	location_google: string;
	location_yandex: string;
}

export interface Location {
	id: number;
	type: 'private' | 'state';
	name: string;
	manager: string;
	head_teacher: string;
	location_google: string;
	location_yandex: string;
}
