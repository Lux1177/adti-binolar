import type {BuildingInfo} from "~/types/building";

export const buildings:BuildingInfo[] = [
	{
		id: 1,
		name: '1-бино',
		description: 'Асосий бино',
		images: ['/1-bino.jpg', '/1-bino.jpg', '/1-bino.jpg', '/1-bino.jpg', '/1-bino.jpg',],
		location_map: ['yandex', 'google'],
	},
	{
		id: 2,
		name: '2-бино',
		description: '2000 ўринлик ўкув бино',
		images: ['/2-bino.jpg'],
		location_map: ['']
	},
	{
		id: 3,
		name: '3-бино',
		description: 'Чоргузар',
		images: ['/3-bino.jpg'],
		location_map: ['']
	},
	{
		id: 4,
		name: 'АДТИ клиникаси',
		description: 'Ю. Отабеков номли',
		images: ['/adti-klinikasi.jpg'],
		location_map: ['']
	},
	{
		id: 5,
		name: 'Талабалар турар жойи',
		description: '',
		images: ['/adti-talabalar-turargi-joy.jpg'],
		location_map: ['']
	},
]