<script setup lang="ts">
import {buildings} from '@/data/buildingsData'
</script>

<template>
	<div class="container mx-auto px-4 py-12">
		<h1 class="text-3xl font-bold mb-8 bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent">Бинолар</h1>

		<div class="flex flex-wrap justify-center">
			<div
				v-for="building in buildings"
				:key="building.id"
				class="w-2/3 sm:w-1/3 lg:w-1/3 flex justify-center p-4"
			>
				<BuildingCard :building="building" />
			</div>
		</div>


		<div class="mt-8 text-center">
			<NuxtLink
				to="/faculties"
				class="inline-flex items-center justify-center px-6 py-3 bg-[#091a2a] border border-[#52e0c4] text-[#ccd6f6] font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#0f2a3e] hover:text-white"
			>
				<Icon name="mdi:eye" class="w-5 h-5 mr-2 text-[#52e0c4]" />
				Барча кафедраларни кўриш
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped>


</style>


