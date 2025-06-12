<script setup lang="ts">
const favorites = getFavorites()

useHead({
	title: `АДТИ — Танланган бинолар`,
	meta: [
		{
			name: 'description',
			content: "Андижон Давлат Тиббиёт Институти - Танланган бинолар маълумоти ва жойлашуви"
		},
		{
			property: 'og:title',
			content: "АДТИ — Танланган бинолар"
		},
		{
			property: 'og:description',
			content: "Андижон Давлат Тиббиёт Институти - Танланган бинолар маълумоти ва жойлашуви"
		},
		{
			property: 'og:image',
			content: '/1-bino.jpg'
		}
	],
	link: [
		{
			rel: 'canonical',
			href: "https://adti-binolar.vercel.app/favorites/"
		}
	]
})

</script>

<template>
	<div v-if="favorites.length" class="container mx-auto px-4 py-12">
		<h1 class="text-4xl font-bold mb-8 bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent">
			Танланган Кафедралар
		</h1>

		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
			<FacultyCard
				v-for="building in favorites"
				:key="building.id"
				:building="building"
				type="faculties"
			/>
		</div>
	</div>
	<div v-else class="container mx-auto px-4 py-12 flex justify-center items-center w-full h-screen">
		<h1 class="mb-44 text-4xl font-bold bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent">
			Кафедралар танланмаган
		</h1>
	</div>
</template>
