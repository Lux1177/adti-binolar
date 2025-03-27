<script setup lang="ts">
import { useRoute } from 'vue-router';
import {getFacultyById} from '~/composables/useBuildings';

const route = useRoute();

const building = computed(() => {
	const id = parseInt(route.params.id as string);
	return getFacultyById(id);
});
</script>

<template>
	<div class="min-h-screen bg-[#020c1b] text-[#ccd6f6]">
		<div class="container mx-auto px-4 py-12">
			<NuxtLink
				to="/faculties"
				class="inline-flex items-center text-[#728098] hover:text-[#b0c7e6] mb-8 transition-colors duration-200"
			>
				<Icon name="mdi:arrow-left" class="w-5 h-5 mr-2" />
				Орқага қайтиш
			</NuxtLink>

			<div
				v-if="building"
				class="bg-[#091a2a] rounded-2xl shadow-xl overflow-hidden border border-[#112240]"
			>
				<div class="relative h-96">
					<img
						:src="building.image"
						:alt="building.name"
						class="w-full h-full object-cover"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
					<div class="absolute bottom-0 left-0 right-0 p-6">
						<h1 class="text-4xl font-bold text-white mb-2 drop-shadow-lg">{{ building.name }}</h1>
					</div>
				</div>

				<div class="p-8">
					<div>
						<div class="grid gap-6">
							<div class="flex items-start">
								<Icon name="mdi:map-marker" class="w-6 h-6 mr-2 mt-1 flex-shrink-0 text-[#52e0c4]" />
								<span class="text-lg text-[#ccd6f6]">{{ building.location }}</span>
							</div>

							<div class="flex items-center">
								<Icon name="mdi:account-tie" class="w-6 h-6 mr-2 flex-shrink-0 text-[#52e0c4]" />
								<span class="text-lg text-[#ccd6f6]">{{ building.manager }}</span>
							</div>

							<div class="flex items-center">
								<Icon name="mdi:account-school" class="w-6 h-6 mr-2 flex-shrink-0 text-[#52e0c4]" />
								<span class="text-lg text-[#ccd6f6]">{{ building.head_teacher }}</span>
							</div>

							<a
								:href="building.location_map"
								target="_blank"
								class="inline-flex items-center text-[#52e0c4] hover:text-[#b0c7e6] transition-colors"
							>
								<Icon name="mdi:map" class="w-6 h-6 mr-2" />
								<span class="text-lg">Харитада кўриш</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div v-else class="text-center py-12">
				<p class="text-[#728098]">Маълумот топилмади</p>
			</div>
		</div>
	</div>
</template>
