<template>
	<header class="fixed top-0 left-0 right-0 z-50 bg-[#020c1b] border-b border-[#091a2a] backdrop-blur-sm bg-opacity-90">
		<div class="container mx-auto px-4">
			<div class="flex items-center justify-between py-3">
				<NuxtLink to="/" class="flex items-center hover:scale-110 transition ease-in">
					<Icon name="mdi:school-outline" class="w-6 h-6 text-[#52e0c4]" />
					<span class="font-bold text-lg bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent ml-2">ADTI</span>
				</NuxtLink>

				<nav class="flex overflow-x-auto justify-end md:justify-end w-full md:w-auto">
					<NuxtLink
						v-for="tab in tabs"
						:key="tab.id"
						:to="tab.path"
						custom
						v-slot="{ isActive, navigate }"
					>
						<button
							@click="navigate"
							class="group relative flex flex-col items-center justify-center px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 min-w-[80px] text-center"
							:class="[
								isActive ? 'text-[#52e0c4]' : 'text-[#728098] hover:text-[#b0c7e6]'
							]"
						>
							<Icon
								:name="tab.icon"
								class="w-6 h-6 mb-1 transition-transform duration-200 ease-out"
								:class="{'scale-110': isActive}"
							/>
							<span>{{ tab.name }}</span>
							<div
								class="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ease-out"
								:class="[
									isActive ? 'bg-gradient-to-r from-[#52e0c4] to-[#728098] scale-x-100' : 'bg-transparent scale-x-0 group-hover:scale-x-100 group-hover:bg-[#1a2c3e]'
								]"
							/>
						</button>
					</NuxtLink>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
const tabs = [
	{
		id: 'buildings',
		name: 'Бинолар',
		icon: 'mdi:office-building',
		path: '/'
	},
	{
		id: 'faculties',
		name: 'Кафедралар',
		icon: 'mdi:school',
		path: '/faculties'
	},
	{
		id: 'favorites',
		name: 'Севимлилар',
		icon: 'mdi:heart',
		path: '/favorites'
	}
];
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
nav {
	scrollbar-width: none;
	-ms-overflow-style: none;
}

nav::-webkit-scrollbar {
	display: none;
}
</style>
