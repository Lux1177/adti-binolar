import type {Building} from "~/types/building";

export const faculties: Building[] = [
	{
		id: 1,
		name: "Офтальмология кафедраси",
		images: [
			"/kafedralar/5-op.jpg",
			"/Furqat.jpg",
			"/kafedralar/vizion-optima.jpg",
			"/kafedralar/lens-optima.jpg",
		],
		locations: [
			{
				id: 1,
				type: "private",
				name: "Vizion optima",
				manager: "Мудири Икромов А.Ф. - (90) 269-01-00",
				head_teacher: "Завуч Умарова Б. - (91) 477-30-65",
				location_google: "https://maps.app.goo.gl/NqzJQwsCyasMMGBn6",
				location_yandex: "https://yandex.uz/maps/-/CHrY5H5s"
			},
			{
				id: 2,
				type: "private",
				name: "Lens optima (темир йўл вокзали) 8-OP",
				manager: "Мудири Икромов А.Ф. - (90) 269-01-00",
				head_teacher: "Завуч Умарова Б. - (91) 477-30-65",
				location_google: "https://maps.app.goo.gl/BiEBBHAonNvweeBD9",
				location_yandex: "https://yandex.uz/maps/-/CHrYBJJ4"
			},
			{
				id: 3,
				type: "state",
				name: "5-OP",
				manager: "Мудири Икромов А.Ф. - (90) 269-01-00",
				head_teacher: "Завуч Умарова Б. - (91) 477-30-65",
				location_google: "https://maps.app.goo.gl/rJ4vGsbhreXKvVTb9",
				location_yandex: "https://yandex.uz/maps/-/CHrY5F5m"
			},
			{
				id: 4,
				type: "state",
				name: "VBKTTM (furqat)",
				manager: "Мудири Икромов А.Ф. - (90) 269-01-00",
				head_teacher: "Завуч Умарова Б. - (91) 477-30-65",
				location_google: "https://maps.app.goo.gl/J2gcVtEZQgEzN3YZ8",
				location_yandex: "https://yandex.uz/maps/-/CHrY5CNM"
			}
		]
	},
	{
		id: 2,
		name: "Анатомия ва клиник анатомия кафедраси",
		images: [
			"/adti.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "АДТИ 1-ўқув биноси",
				manager: "Мудири Кахаров З. - (93) 524-96-19",
				head_teacher: "Завуч Тулянова Д. - (94) 568-11-58",
				location_google: "https://maps.app.goo.gl/QiJNzAi17qLrf2DX7",
				location_yandex: "https://yandex.uz/maps/-/CHVFV45v"
			}
		]
	},
	{
		id: 3,
		name: "Юкумли касалликлар кафедраси",
		images: [
			"/yuqumli-kasalliklar.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Вилоят юқумли касалликлар шифохонаси",
				manager: "Мудири Мирзакаримова Д.Б. - (90) 526-02-32",
				head_teacher: "Завуч Каюмов А. - (97) 473-65-52",
				location_google: "https://maps.app.goo.gl/ts36Vn19CXen79v88",
				location_yandex: "https://yandex.uz/maps/-/CHVFv4ib"
			}
		]
	},
	{
		id: 4,
		name: "Жаррохлик касалликлари ва фуқаролар мухофазаси кафедраси",
		images: [
			"/kafedralar/sanchas.jpg",
			"/kafedralar/musaffo-limfa.jpg",
			"/kafedralar/musaffo-limfa.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "ВКТТМ (Санчас)",
				manager: "Мудири Эгамов Й.С. - (90) 253-92-29",
				head_teacher: "Завуч Азизов Дилшодбек - (90) 166-88-44",
				location_google: "https://maps.app.goo.gl/brxTmmDw1KVLZ5zk6",
				location_yandex: "https://yandex.uz/maps/-/CHVFv2px"
			},
			{
				id: 2,
				type: "state",
				name: "Oнкология",
				manager: "Мудири Эгамов Й.С. - (90) 253-92-29",
				head_teacher: "Завуч Азизов Дилшодбек - (90) 166-88-44",
				location_google: "https://maps.app.goo.gl/brxTmmDw1KVLZ5zk6",
				location_yandex: "https://yandex.uz/maps/-/CHVFv2px"
			},
			{
				id: 3,
				type: "private",
				name: "Мусаффо лимфа клиникаси",
				manager: "Мудири Эгамов Й.С. - (90) 253-92-29",
				head_teacher: "Завуч Азизов Дилшодбек - (90) 166-88-44",
				location_google: "https://maps.app.goo.gl/brxTmmDw1KVLZ5zk6",
				location_yandex: "https://yandex.uz/maps/-/CHVFv2px"
			},
			{
				id: 4,
				type: "private",
				name: "Агиф клиникаси",
				manager: "Мудири Эгамов Й.С. - (90) 253-92-29",
				head_teacher: "Завуч Азизов Дилшодбек - (90) 166-88-44",
				location_google: "https://maps.app.goo.gl/brxTmmDw1KVLZ5zk6",
				location_yandex: "https://yandex.uz/maps/-/CHVFv2px"
			},
			{
				id: 5,
				type: "state",
				name: "6-ОП",
				manager: "Мудири Эгамов Й.С. - (90) 253-92-29",
				head_teacher: "Завуч Азизов Дилшодбек - (90) 166-88-44",
				location_google: "https://maps.app.goo.gl/brxTmmDw1KVLZ5zk6",
				location_yandex: "https://yandex.uz/maps/-/CHVFv2px"
			},
			{
				id: 6,
				type: "state",
				name: "АДТИ 3-ўқув биноси",
				manager: "Мудири Эгамов Й.С. - (90) 253-92-29",
				head_teacher: "Завуч Азизов Дилшодбек - (90) 166-88-44",
				location_google: "https://maps.app.goo.gl/brxTmmDw1KVLZ5zk6",
				location_yandex: "https://yandex.uz/maps/-/CHVFv2px"
			}
		]
	},
	{
		id: 5,
		name: "Факультет педиатрия ва неонатология кафедраси",
		images: [
			"/kafedralar/bolalar-shifoxonasi.jpg",
			"/kafedralar/bolalar-shifoxonasi.jpg",
			"/kafedralar/bolalar-shifoxonasi.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "ШБКТТМ (осма кўприк проспект 24-макатаб ёнида)",
				manager: "Мудири Атажанова Ш. - (90) 254-38-66",
				head_teacher: "Завуч Арзибекова У. - (91) 608-41-19",
				location_google: "https://maps.app.goo.gl/t7YJRsaLfvJUaaV79",
				location_yandex: "https://yandex.uz/maps/-/CHVFzZJd"
			}
		]
	},
	{
		id: 6,
		name: "Госпитал педиатрия кафедраси",
		images: [
			"/Furqat.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Вилоят кўп тармоқли болалар шифохонаси (Фуркат)",
				manager: "Мудири Ганиева М.Ш. - (93) 443-18-53",
				head_teacher: "Завуч Хайдарова Л. - (93) 440-96-33",
				location_google: "https://maps.app.goo.gl/bbNu8ARejoGR3mkC9",
				location_yandex: "https://yandex.uz/maps/-/CHVFzTlK"
			}
		]
	},
	{
		id: 7,
		name: "Болалар касалликлари пропедевтикаси ва поликлиник педиатрия кафедраси",
		images: [
			"/kafedralar/1-op.jpg",
			"/Furqat.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "1-ОП",
				manager: "Мудири М.Э. Абдуллаева - (90) 258-10-23",
				head_teacher: "Завуч Р. Абдулхакова - (97) 446-82-44",
				location_google: "https://maps.app.goo.gl/1YCSXQN1ucTCKHSg9",
				location_yandex: "https://yandex.uz/maps/-/CHrYb4pG"
			},
			{
				id: 2,
				type: "state",
				name: "МКТП-5-этаж ВБКТТМ (фуркат)",
				manager: "Мудири М.Э. Абдуллаева - (90) 258-10-23",
				head_teacher: "Завуч Р. Абдулхакова - (97) 446-82-44",
				location_google: "https://maps.app.goo.gl/M2ZSFc1dFpeUKMUXA",
				location_yandex: "https://yandex.uz/maps/-/CHVFzTlK"
			}
		]
	},
	{
		id: 8,
		name: "Дерматовенерология кафедраси",
		images: [
			"/kafedralar/derma.jpg",
			"/kafedralar/derma.jpg",
			"/kafedralar/derma.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Вилоят тери-таносил касалликлар шифохонаси",
				manager: "Мудири Пакирдинов А.Б. - (90) 571-17-75",
				head_teacher: "Завуч Кучкаров А. - (97) 380-36-33",
				location_google: "https://maps.app.goo.gl/BThFmZpCXSz5x6nG6",
				location_yandex: "https://yandex.uz/maps/-/CHVF7OIy"
			}
		]
	},
	{
		id: 9,
		name: "Ижтимоий гигиена ва ССБ кафедраси",
		images: [
			"/1-bino.jpg",
			"/1-bino.jpg",
			"/1-bino.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "АДТИ 2-ўқув биноси",
				manager: "Мудири Бабич С.М. - (90) 622-39-95",
				head_teacher: "Завуч Темирова Д. - (97) 797-00-44",
				location_google: "https://maps.app.goo.gl/QiJNzAi17qLrf2DX7",
				location_yandex: "https://yandex.uz/maps/-/CHVFV45v"
			}
		]
	},
	{
		id: 10,
		name: "Болалар жаррохлиги кафедраси",
		images: [
			"/Furqat.jpg",
			"/Furqat.jpg",
			"/Furqat.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Вилоят кўп тармоқли болалар шифохонаси (фуркат) РШТТЁАФ (облосной)",
				manager: "Мудири Мирзакаримов Б.Х. - (91) 606-12-73",
				head_teacher: "Завуч Юлдашев М. - (91) 499-46-56",
				location_google: "https://maps.app.goo.gl/bbNu8ARejoGR3mkC9",
				location_yandex: "https://yandex.uz/maps/-/CHVFzTlK"
			}
		]
	},
	{
		id: 11,
		name: "1-Акушерлик ва гинекология кафедраси",
		images: [
			"/Perenatal_markaz.jpg",
			"/Perenatal_markaz.jpg",
			"/Perenatal_markaz.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Вилоят перенатал маркази (семашко)",
				manager: "Мудири Асранкулова Д.Б. - (91) 167-23-30",
				head_teacher: "Завуч Абдуллаева М. - (91) 493-25-88",
				location_google: "https://maps.app.goo.gl/1DgTUe2Bv9JRotiP6",
				location_yandex: "https://yandex.uz/maps/-/CHVJAC9C"
			},
			{
				id: 2,
				type: "private",
				name: "Family med клиникаси",
				manager: "Мудири Асранкулова Д.Б. - (91) 167-23-30",
				head_teacher: "Завуч Абдуллаева М. - (91) 493-25-88",
				location_google: "https://maps.app.goo.gl/1DgTUe2Bv9JRotiP6",
				location_yandex: "https://yandex.uz/maps/-/CHVJAC9C"
			}
		]
	},
	{
		id: 12,
		name: "Болалар травматологияси, ортопедияси ва нейрожаррохлик кафедраси",
		images: [
			"/kafedralar/sehat.jpg",
			"/kafedralar/sehat.jpg",
			"/kafedralar/sehat.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Телмон вилоят травматалогия шифохонаси",
				manager: "Мудири Кулдашев К.А. - (97) 995-00-01",
				head_teacher: "Завуч Расулов Жахонгир - (93) 855-77-88",
				location_google: "https://maps.app.goo.gl/QDMaJVx8Nk5tGKMcA",
				location_yandex: "https://yandex.uz/maps/-/CHVJA28b"
			},
			{
				id: 2,
				type: "state",
				name: "РШТТЁАФ (облосной)",
				manager: "Мудири Кулдашев К.А. - (97) 995-00-01",
				head_teacher: "Завуч Расулов Жахонгир - (93) 855-77-88",
				location_google: "https://maps.app.goo.gl/QDMaJVx8Nk5tGKMcA",
				location_yandex: "https://yandex.uz/maps/-/CHVJA28b"
			},
			{
				id: 3,
				type: "private",
				name: "Сехат клиникаси",
				manager: "Мудири Кулдашев К.А. - (97) 995-00-01",
				head_teacher: "Завуч Расулов Жахонгир - (93) 855-77-88",
				location_google: "https://maps.app.goo.gl/QDMaJVx8Nk5tGKMcA",
				location_yandex: "https://yandex.uz/maps/-/CHVJA28b"
			},
			{
				id: 4,
				type: "private",
				name: "Ибн сино клиникаси",
				manager: "Мудири Кулдашев К.А. - (97) 995-00-01",
				head_teacher: "Завуч Расулов Жахонгир - (93) 855-77-88",
				location_google: "https://maps.app.goo.gl/QDMaJVx8Nk5tGKMcA",
				location_yandex: "https://yandex.uz/maps/-/CHVJA28b"
			}
		]
	},
	{
		id: 13,
		name: "Педиатрия факультети учун ички касалликлари пропедевтикаси",
		images: [
			"/kafedralar/sanchas.jpg",
			"/kafedralar/sanchas.jpg",
			"/kafedralar/sanchas.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "ШКТТМ (санчас)",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/VmUYPURQQuq6rYzS9",
				location_yandex: "https://yandex.uz/maps/-/CHVJE4N0"
			},
			{
				id: 2,
				type: "state",
				name: "Вилоят кардиология маркази",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/VmUYPURQQuq6rYzS9",
				location_yandex: "https://yandex.uz/maps/-/CHVJE4N0"
			}
		]
	},
	{
		id: 14,
		name: "Превентив тиббиёт асослари кафедраси",
		images: [
			"/1-bino.jpg",
			"/1-bino.jpg",
			"/1-bino.jpg"
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "АДТИ 2-ўқув биноси",
				manager: "Мудири Салиева М.Х. - (91) 612-65-02",
				head_teacher: "Завуч Хожиахматова Р. - (93) 215-91-61",
				location_google: "https://maps.app.goo.gl/QiJNzAi17qLrf2DX7",
				location_yandex: "https://yandex.uz/maps/-/CHVFV45v"
			}
		]
	},
	{
		id: 15,
		name: "Госпитал терапия ва эндокринология кафедраси",
		images: [
				"https://adti.uz/wp-content/uploads/2024/08/1V9A4383.jpg",
				"https://adti.uz/wp-content/uploads/2024/08/1V9A4383.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Б.Шох кўчаси 8 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/5zZsMiiP8M9ArFPf7",
				location_yandex: "https://yandex.uz/maps/-/CHVnmY22"
			},
			{
				id: 2,
				type: "state",
				name: "АДТИ клиникаси худуди",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/5zZsMiiP8M9ArFPf7",
				location_yandex: "https://yandex.uz/maps/-/CHVnmY22"
			},
		],
	},
	{
		id: 16,
		name: "Фтизиатрия ва пулманология, микробиология ,иммунология ва вирусология кафедраси",
		images: [
				"/3-bino.jpg",
				"/3-bino.jpg",
				"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],
	},
	{
		id: 17,
		name: "1-Фармацевтик фанлар кафедраси",
		images: [
				"/3-bino.jpg",
				"/3-bino.jpg",
				"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],

	},
	{
		id: 18,
		name: "2-Фармацевтик фанлар кафедраси",
		images: [
			"/3-bino.jpg",
			"/3-bino.jpg",
			"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],
	},
	{
		id: 19,
		name: "Биологик физика, информатика, тиббий технологиялар кафедраси",
		images: [
				"/adti.jpg",
				"/adti.jpg",
				"/adti.jpg",
			],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Ю.Отабеков кўчаси 1 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/wRwe4oJZTMDD8gsf6",
				location_yandex: "https://yandex.uz/maps/-/CHVnj4ML"
			}
		],
	},
	{
		id: 20,
		name: "Ижтимоий - гуманитар фанлар кафедраси",
		images: [
				"/3-bino.jpg",
				"/3-bino.jpg",
				"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],
	},
	{
		id: 21,
		name: "Биологик кимё кафедраси",
		images: [
			"/3-bino.jpg",
			"/3-bino.jpg",
			"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],
	},
	{
		id: 22,
		name: "Тиббий кимё кафедраси",
		images: [
			"/3-bino.jpg",
			"/3-bino.jpg",
			"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],
	},
	{
		id: 23,
		name: "Тиббий биология ва гистология кафедраси",
		images: [
			"/3-bino.jpg",
			"/3-bino.jpg",
			"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],
	},
	{
		id: 24,
		name: "Фармакология, клиник фармакология ва тиббиёт биотехнологияси",
		images: [
			"/adti.jpg",
			"/adti.jpg",
			"/adti.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Ю.Отабеков кўчаси 1 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/wRwe4oJZTMDD8gsf6",
				location_yandex: "https://yandex.uz/maps/-/CHVnj4ML"
			}
		],
	},
	{
		id: 25,
		name: "2-Факультет ва госпитал жаррохлик кафедраси",
		images: [
			"/adti.jpg",
			"/adti.jpg",
			"/adti.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Ю.Отабеков кўчаси 1 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/wRwe4oJZTMDD8gsf6",
				location_yandex: "https://yandex.uz/maps/-/CHVnj4ML"
			}
		],
	},
	{
		id: 26,
		name: "Неврология кафедраси",
		images: [
				"/2-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Б.Шох кўчаси 8 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
			{
				id: 1,
				type: "state",
				name: "АДТИ клиникаси худуди",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
		],
	},
	{
		id: 27,
		name: "Тиббий радиология кафедраси",
		images: [
			"/adti.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Ю.Отабеков кўчаси 1 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/wRwe4oJZTMDD8gsf6",
				location_yandex: "https://yandex.uz/maps/-/CHVnj4ML"
			}
		],
	},
	{
		id: 28,
		name: "Тиббий профилактика кафедраси",
		images: [
			"/3-bino.jpg",
			"/3-bino.jpg",
			"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],
	},
	{
		id: 29,
		name: "Ўзбек тили ва адабиёти, тиллар кафедраси",
		images: [
			"/3-bino.jpg",
			"/3-bino.jpg",
			"/3-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Улица: Абдурауф Фитрат 212",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: 'https://maps.app.goo.gl/Y9BzreNgXoR4h2pGA',
				location_yandex: 'https://yandex.uz/maps/-/CHVGr8~m'
			},
		],
	},
	{
		id: 30,
		name: "Травматология, ортопедия ва нейрохирургия",
		images: [
			"/kafedralar/tty.jpg",
			"/kafedralar/ashtb.jpg",
			"/kafedralar/mubinaxon-shifo.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Пушкин кўчаси 58, Республика шошилинч тез тиббий ёрдам илмий маркази Андижон филиали",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/3TDmTBoPgDsg24UB6",
				location_yandex: "https://yandex.uz/maps/-/CHrEq66E"
			},
			{
				id: 2,
				type: "state",
				name: "Ю.Отабеков кўчаси 1-уй, Андижон шаҳар тиббиёт бирлашмаси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/xNyzzGZpX3zahG7KA",
				location_yandex: "https://yandex.uz/maps/-/CHrEq-93"
			},
			{
				id: 3,
				type: "private",
				name: "Лойихавий 74, Мубинахон шифо хусусий шифохонаси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/Kkc25ZTb9ZFvP1QD7",
				location_yandex: "https://yandex.uz/maps/-/CHrEN69m"
			},
		],
	},
	{
		id: 31,
		name: "Умумий жаррохлик ва трансплантология",
		images: [
			"/2-bino.jpg",
			"/kafedralar/ashtb.jpg",
			"/kafedralar/tybsh.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Б.Шох кўчаси 8 уй, АДТИ клиникаси худуди",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
			{
				id: 2,
				type: "state",
				name: "Ю.Атабеков кўчаси, 74",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/xNyzzGZpX3zahG7KA",
				location_yandex: "https://yandex.uz/maps/-/CHrEq-93"
			},
			{
				id: 3,
				type: "state",
				name: "Андижон ш., Нихол кўчаси, 48, М.Юсуф майдони ёнида",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/eKDGwDWG3Pj7M3zC8",
				location_yandex: "https://yandex.uz/maps/-/CHrEVTLT"
			},
		],
	},
	{
		id: 32,
		name: "Ички касалликлар пропедевтикаси",
		images: [
			"/2-bino.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Б.Шох кўчаси 8 уй, АДТИ клиникаси худуди",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
		],
	},
	{
		id: 33,
		name: "Психиатрия, наркология, тиббий психология ва психотерапия курси",
		images: [
			"/kafedralar/avpd.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Андижон шаҳар, Ю.Атабеков кўчаси, 3-уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/HddUYeoRBfhrqtgj6",
				location_yandex: "https://yandex.uz/maps/-/CHrIEKMT"
			},
		],
	},
	{
		id: 34,
		name: "Даволаш факултети учун Педиатрия кафедраси",
		images: [
			"/kafedralar/bolalar-shifoxonasi.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Андижон шахар, Университет кўчаси 1 уй, Андижон шахар болалар шифохонаси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/t7YJRsaLfvJUaaV79",
				location_yandex: "https://yandex.uz/maps/-/CHVFzZJd"
			},
		],
	},
	{
		id: 35,
		name: "ОШТ",
		images: [
			"/2-bino.jpg",
			"/kafedralar/teri-tanosil.jpg",
			"/adti.jpg",
			"/kafedralar/magnus.jpg",
			"/kafedralar/medlife.jpg",
			"/kafedralar/endokrin.jpg",
			"/kafedralar/musaffo-limfa.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Б.Шох кўчаси 8-уй, АДТИ клиникаси худуди",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
			{
				id: 2,
				type: "private",
				name: "Бобур шох кучаси 3 г-уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/dWoSmpthwVtY1DPH9",
				location_yandex: "https://yandex.uz/maps/-/CHrUfGJZ"
			},
			{
				id: 3,
				type: "state",
				name: "Каландаров кўчасиб 709-уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.google.com/maps?q=40.810819,72.323823&ll=40.810819,72.323823&z=16",
				location_yandex: "https://yandex.uz/maps/-/CHrUfDYN"
			},
			{
				id: 4,
				type: "private",
				name: "Бобуршох кўчаси 37 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/1rfbCunKu1omG3zB8",
				location_yandex: "https://yandex.uz/maps/-/CHrUfP~e"
			},
			{
				id: 5,
				type: "private",
				name: "Ю.Отабеков кўча 11 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/2LQ6bb9Kh4u8ZLyS8",
				location_yandex: "https://yandex.uz/maps/-/CHrUj4OU"
			},
			{
				id: 6,
				type: "state",
				name: "Ю.Отабеков кўчаси 1 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/wRwe4oJZTMDD8gsf6",
				location_yandex: "https://yandex.uz/maps/-/CHVnj4ML"
			},
			{
				id: 7,
				type: "private",
				name: "Андижон шахар Кушарак 12Б Мусаффо- лимфа",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/fXqqAdcJqrtidNar9",
				location_yandex: "https://yandex.uz/maps/-/CHrUj6Ln"
			},
		],
	},
	{
		id: 36,
		name: "Жаррохлик касалликлари",
		images: [
			"/kafedralar/ashtb.jpg",
			"/kafedralar/fanomed.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Ю. Отабеков кўчаси 1, Андижон шахар тиббиёт бирлашмаси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/xNyzzGZpX3zahG7KA",
				location_yandex: "https://yandex.uz/maps/-/CHrEq-93"
			},
			{
				id: 2,
				type: "state",
				name: "Андижон шаҳар А.Темур кўча, Фаномед хусусий клиникаси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/apZcCPnyYq1e7u4m9",
				location_yandex: "https://yandex.uz/maps/-/CHrUnViK"
			},
		],
	},
	{
		id: 37,
		name: "Анестезиология-реаниматология ва тез тиббий ёрдам",
		images: [
			"/2-bino.jpg",
			"/kafedralar/tty.jpg",
			"/Furqat.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Ю.Отабеков кўчаси АДТИ клиникаси 2000 ўринли ўқув биноси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
			{
				id: 2,
				type: "state",
				name: "А.Навоий шох кўчаси 58. РШТЁИМ АФ",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/3TDmTBoPgDsg24UB6",
				location_yandex: "https://yandex.uz/maps/-/CHrEq66E"
			},
			{
				id: 3,
				type: "state",
				name: "Фурқат кўчаси,  5 уй. Андижон вилоят болалар кўп тармоқли тиббиёт маркази",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/bbNu8ARejoGR3mkC9",
				location_yandex: "https://yandex.uz/maps/-/CHVFzTlK"
			},
		],
	},
	{
		id: 38,
		name: "Даволаш факультети учун болалар жарроҳлиги",
		images: [
			"/Furqat.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Фурқат кўчаси,  5 уй. Андижон вилоят болалар кўп тармоқли тиббиёт маркази",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/bbNu8ARejoGR3mkC9",
				location_yandex: "https://yandex.uz/maps/-/CHVFzTlK"
			},
		],
	},
	{
		id: 40,
		name: "Госпитал терапия",
		images: [
			"/2-bino.jpg",
			"/kafedralar/ilmiy-endokrin.jpg",
			"/kafedralar/sanchas.jpg",
			"/kafedralar/akademik-litsey.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Б.Шох кўчаси 8-уй, АДТИ клиникаси худуди",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
			{
				id: 2,
				type: "state",
				name: "Майбоғча кўчаси 59,  Академик Ё.Х.Тўракулов номидаги Республика ихтисослаштирилган эндокринология илмий-амалий тиббиёт маркази Андижон филиали",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/BWVTEuKU7QSTkENK7",
				location_yandex: "https://yandex.uz/navi/-/CHrUn-Nb"
			},
			{
				id: 3,
				type: "state",
				name: "Ахмад дониш 6. Андижон вилояти кўп тармоқли тиббиёт маркази.",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/VmUYPURQQuq6rYzS9",
				location_yandex: "https://yandex.uz/maps/-/CHVJE4N0"
			},
			{
				id: 4,
				type: "state",
				name: "Навоий шох кўчаси  124 уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/5anaNadRNWJDUvvQ9",
				location_yandex: "https://yandex.uz/maps/-/CHrUvQLf"
			},
		],
	},
	{
		id: 41,
		name: "2-акушерлик ва гинекология  кафедраси",
		images: [
			"/kafedralar/2-tk.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Чоргузар кўча 3 уй  Кўтанарик МФЙ Андижон шахар 2-туғрук комплекси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/9L9aHh6mKd6YRDxA6",
				location_yandex: "https://yandex.uz/maps/-/CHrUvGYE"
			},
		],
	},
	{
		id: 42,
		name: "Урология",
		images: [
			"/2-bino.jpg",
			"/kafedralar/sanchas.jpg",
			"/kafedralar/sehat.jpg",
			"/kafedralar/agrofarm.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Б.Шох кўчаси 8-уй, АДТИ клиникаси худуди",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
			{
				id: 2,
				type: "state",
				name: "Ахмад дониш 6. Андижон вилояти кўп тармоқли тиббиёт маркази.",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/VmUYPURQQuq6rYzS9",
				location_yandex: "https://yandex.uz/maps/-/CHVJE4N0"
			},
			{
				id: 3,
				type: "private",
				name: "Ахмад дониш 4. “Сехат” хусусий клиникаси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/QDMaJVx8Nk5tGKMcA",
				location_yandex: "https://yandex.uz/maps/-/CHVJA28b"
			},
			{
				id: 4,
				type: "private",
				name: "Б.Рахимов кўчаси 4-уй. “Агрофарм” хусусий шифохонаси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/LsTscUAg6g1otNPy7",
				location_yandex: "https://yandex.uz/maps/-/CHrUzGit"
			},
		],
	},
	{
		id: 43,
		name: "Факультет терапия",
		images: [
			"/2-bino.jpg",
			"/kafedralar/qizil-sharq.jpg",
			"/kafedralar/narkologiya-dispanser.jpg",
			"/kafedralar/xolis.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Б.Шох кўчаси 8-уй, АДТИ клиникаси худуди",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/mtTrdDEHd1BcqPc19",
				location_yandex: "https://yandex.uz/maps/-/CHVnjPyw"
			},
			{
				id: 2,
				type: "private",
				name: "Андижон шахар Бобур шох куча 102-уй Холис хусусий клиникаси",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/9RizLXKKHw996hM88",
				location_yandex: "https://yandex.uz/maps/-/CHrYm-9Z"
			},
			{
				id: 3,
				type: "state",
				name: "Андижон шахар Кизил шарк куча 3 РИИАКМ Анжижон филиали",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/Ne82JF7ozhvmnFUYA",
				location_yandex: "https://yandex.uz/maps/-/CHrYeVzg"
			},
			{
				id: 4,
				type: "state",
				name: "Андижон тумани Амир Темур шох куча 4 Андижон вилояти Наркология диспансери",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/ibgtYY6Rs3NyM2Py6",
				location_yandex: "https://yandex.uz/maps/-/CHrYiKjP"
			},
		],
	},
	{
		id: 44,
		name: "Ички касалликлар",
		images: [
			"/kafedralar/sanchas.jpg",
			"/kafedralar/ashtb.jpg",
			"/kafedralar/tybsh.jpg",
			"/kafedralar/sehat.jpg",
		],
		locations: [
			{
				id: 1,
				type: "state",
				name: "Андижон шахар Огахий 3 уй, АВКТТМ",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/Rf4DfMGwGEvLzjmZ7",
				location_yandex: "https://yandex.uz/maps/-/CHrYuMZf"
			},
			{
				id: 2,
				type: "private",
				name: "Андижон шахар Ахмад Дониш 4-уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/QDMaJVx8Nk5tGKMcA",
				location_yandex: "https://yandex.uz/maps/-/CHVJA28b"
			},
			{
				id: 3,
				type: "state",
				name: "Андижон шахар Ю.Отабеков кўчаси, 1-уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/xNyzzGZpX3zahG7KA",
				location_yandex: "https://yandex.uz/maps/-/CHrEq-93"
			},
			{
				id: 4,
				type: "state",
				name: "Андижон шахар Ниҳол кўчаси 48-уй",
				manager: "Мудири Артикова С.Г. - (99) 316-71-00",
				head_teacher: "Завуч Юнусова Зебо - (93) 427-42-22",
				location_google: "https://maps.app.goo.gl/eKDGwDWG3Pj7M3zC8",
				location_yandex: "https://yandex.uz/maps/-/CHrEVTLT"
			},
		],
	},
]