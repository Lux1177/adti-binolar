<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getBuildingById } from '~/composables/useBuildings';
import type {BuildingInfo} from "~/types/building";

const route = useRoute();
const id: number = parseInt(route.params.id as string);
const building: BuildingInfo | undefined = getBuildingById(id);

</script>

<template>
	<div class="min-h-screen bg-[#020c1b] text-[#ccd6f6]">
		<div class="container mx-auto px-4 py-12">
			<NuxtLink
				to="/"
				class="inline-flex items-center text-[#728098] hover:text-[#64ffda] mb-8 transition-all duration-300 group"
			>
				<div class="flex justify-center items-center bg-[#112240] p-2 rounded-full mr-3 group-hover:bg-[#233554] transition-all duration-300">
					<Icon name="mdi:arrow-left" class="w-5 h-5" />
				</div>
				<span class="font-medium">Орқага қайтиш</span>
			</NuxtLink>

			<div
				v-if="building"
				class="bg-[#091a2a] rounded-2xl shadow-xl overflow-hidden border border-[#112240]"
			>
				<div class="relative">

<!--					Carousel-->

					<div>
						<ImageCarousel
							:images="building.images"
							class="mb-8"
							height="650px"
						/>
					</div>


					<div class="px-8">
						<h1 class="text-4xl font-bold text-white mb-2 drop-shadow-lg">{{ building.name }}</h1>
					</div>
				</div>

				<div class="p-8">
					<div>
						<div class="grid gap-6">
							<div class="flex items-start">
								<Icon name="mdi:map-marker" class="w-6 h-6 mr-2 mt-1 flex-shrink-0 text-[#52e0c4]" />
								<span class="text-lg text-[#ccd6f6]">{{ building.description }}</span>
							</div>

							<NuxtLink
								:to="building.location_google"
								target="_blank"
								class="inline-flex items-center text-[#52e0c4] hover:text-[#b0c7e6] transition-colors"
							>
								<Icon name="grommet-icons:map" class="w-6 h-6 mr-2" />
								<span class="text-lg">Google харитада кўриш</span>
							</NuxtLink>
							<NuxtLink
								:to="building.location_yandex"
								target="_blank"
								class="inline-flex items-center text-[#52e0c4] hover:text-[#b0c7e6] transition-colors"
							>
								<Icon name="grommet-icons:map" class="w-6 h-6 mr-2" />
								<span class="text-lg">Yandex харитада кўриш</span>
							</NuxtLink>
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

