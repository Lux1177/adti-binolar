<script setup lang="ts">
import {buildings} from '@/data/buildingsData'
</script>

<template>
	<div class="container mx-auto px-4 py-12">
		<h1 class="text-3xl font-bold mb-8 bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent">Бинолар</h1>

		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center items-center content-center">
			<div class="" v-for="building in buildings">
				<div :class="`grid-item-${building.id}`">
					<BuildingCard
						:building="building"
						:key="building.id"
					/>
				</div>
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


