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
		images: ['/3-bino.jpg', '/3-bino/1.jpg', '/3-bino/2.jpg', '/3-bino/3.jpg',
			'/3-bino/4.jpg', '/3-bino/5.jpg'],
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
		description: 'Талабалар турар жойлари',
		images: ["/ttj.jpg", "/ttj/1.png", "/ttj/2.png", "/ttj/3.png", "/ttj/4.png",
			"/ttj/5.png", "/ttj/6.png", "/ttj/7.png", "/ttj/8.png", "/ttj/9.png", "/ttj/10.png",
			"/ttj/11.png", "/ttj/12.png", "/ttj/13.png", "/ttj/14.png", "/ttj/15.png", "/ttj/16.png",
			"/ttj/17.png"],
		location_map: ['defefw']
	},
]