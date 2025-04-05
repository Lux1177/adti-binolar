export interface Building {
	id: number;
	name: string;
	location: string;
	image: string;
	description?: string;
	manager: string;
	head_teacher: string;
	location_google: string;
	location_yandex: string;
}

export interface BuildingInfo {
	id: number;
	name: string;
	description: string;
	images: string[];
	location_google: string;
	location_yandex: string;
}