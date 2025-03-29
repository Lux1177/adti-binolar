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
		images: ['/2-bino.jpg', '/2-bino/1.jpg', '/2-bino/2.jpg', '/2-bino/3.jpg',
			'/2-bino/4.jpg', '/2-bino/5.jpg', '/2-bino/6.jpg',
			'/2-bino/7.jpg', '/2-bino/8.jpg', '/2-bino/9.jpg', '/2-bino/10.jpg'],
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
		images: ['/adti-klinikasi.jpg', "/adti-klinikasi/2.jpg",
			"/adti-klinikasi/3.jpg", "/adti-klinikasi/4.jpg", "/adti-klinikasi/5.jpg",
			"/adti-klinikasi/6.jpg", "/adti-klinikasi/7.jpg", "/adti-klinikasi/8.jpg"
			, "/adti-klinikasi/9.jpg", "/adti-klinikasi/10.jpg"],
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