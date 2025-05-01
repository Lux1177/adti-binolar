<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getFacultyById } from '~/composables/useBuildings';
import { computed, ref } from 'vue';

const route = useRoute();

const buildingId = computed(() => {
	return parseInt(route.params.id as string);
});

const building = ref(null);

const updateBuilding = () => {
	building.value = getFacultyById(buildingId.value);
};

updateBuilding();

const privateLocations = computed(() =>
	building.value?.locations.filter(loc => loc.type === 'private') || []
);

const stateLocations = computed(() =>
	building.value?.locations.filter(loc => loc.type === 'state') || []
);

// Calculate grid classes based on number of items
const getGridClass = (count) => {
	if (count === 1) return 'grid-cols-1';
	if (count === 2) return 'grid-cols-1 md:grid-cols-2';
	return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
};

const stateLocationsGridClass = computed(() => getGridClass(stateLocations.value.length));
const privateLocationsGridClass = computed(() => getGridClass(privateLocations.value.length));
</script>

<template>
	<div class="min-h-screen bg-gradient-to-b from-[#020c1b] to-[#041629] text-[#ccd6f6]">
		<div class="container mx-auto px-4 py-8 md:py-12">
			<!-- Back button with improved hover effect -->
			<NuxtLink
				to="/faculties"
				class="inline-flex items-center text-[#728098] hover:text-[#64ffda] mb-8 transition-all duration-300 group"
			>
				<div class="flex justify-center items-center bg-[#112240] p-2 rounded-full mr-3 group-hover:bg-[#233554] transition-all duration-300">
					<Icon name="mdi:arrow-left" class="w-5 h-5" />
				</div>
				<span class="font-medium">Орқага қайтиш</span>
			</NuxtLink>

			<!-- Loading state -->
			<div v-if="!building" class="flex flex-col items-center justify-center py-20">
				<div class="w-16 h-16 border-4 border-[#233554] border-t-[#64ffda] rounded-full animate-spin mb-4"></div>
				<p class="text-[#8892b0] text-lg">Маълумот юкланмоқда...</p>
			</div>

			<!-- Main content -->
			<div
				v-else
				class="bg-[#0a192f]/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-[#112240] transition-all duration-300"
			>
				<!-- Carousel section with clear title (no gradient overlay) -->
				<div class="relative">
					<ImageCarousel
						:images="building.images"
						height="650px"
						class="w-full"
					/>

					<!-- Title area with solid background instead of gradient -->
					<div class="bottom-0 left-0 right-0 bg-[#0a192f] py-6 px-6 md:px-8">
						<h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
							{{ building.name }}
						</h1>
					</div>
				</div>

				<div class="p-6 md:p-8 space-y-12">
					<!-- State locations section -->
					<div v-if="stateLocations.length" class="location-section">
						<div class="flex items-center mb-6">
							<div class="w-1.5 h-8 bg-[#64ffda] rounded-full mr-3"></div>
							<h2 class="text-2xl font-bold text-white">Давлат тиббиёт муассасалари</h2>
						</div>

						<!-- Dynamic grid based on number of items -->
						<div :class="['grid gap-6', stateLocationsGridClass]">
							<div
								v-for="location in stateLocations"
								:key="location.id"
								class="bg-[#112240] p-6 rounded-xl border border-[#1e3a56] shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30 transition-all duration-300"
								:class="{ 'md:col-span-2 lg:col-span-3': stateLocations.length === 1 }"
							>
								<h3 class="text-xl font-semibold mb-5 text-white border-b border-[#1e3a56] pb-3">
									{{ location.name }}
								</h3>

								<div class="space-y-4 mb-6">
									<div class="flex items-start">
										<div class="bg-[#0a192f] p-2 rounded-lg mr-3">
											<Icon name="mdi:account-tie" class="w-5 h-5 text-[#64ffda]" />
										</div>
										<div>
											<div class="text-sm text-[#8892b0] mb-1">Раҳбар</div>
											<div class="text-white">{{ location.manager }}</div>
										</div>
									</div>

									<div class="flex items-start">
										<div class="bg-[#0a192f] p-2 rounded-lg mr-3">
											<Icon name="mdi:account-school" class="w-5 h-5 text-[#64ffda]" />
										</div>
										<div>
											<div class="text-sm text-[#8892b0] mb-1">Ўқитувчи</div>
											<div class="text-white">{{ location.head_teacher }}</div>
										</div>
									</div>
								</div>

								<div class="flex flex-wrap gap-3">
									<NuxtLink
										:to="location.location_google"
										target="_blank"
										class="flex items-center bg-[#0a192f] hover:bg-[#172a46] px-3 py-2 rounded-lg text-[#64ffda] transition-all duration-300"
									>
										<Icon name="grommet-icons:map" class="w-5 h-5 mr-2" />
										<span>Google харитада кўриш</span>
									</NuxtLink>

									<NuxtLink
										:to="location.location_yandex"
										target="_blank"
										class="flex items-center bg-[#0a192f] hover:bg-[#172a46] px-3 py-2 rounded-lg text-[#64ffda] transition-all duration-300"
									>
										<Icon name="grommet-icons:map" class="w-5 h-5 mr-2" />
										<span>Yandex харитада кўриш</span>
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>

					<!-- Private locations section -->
					<div v-if="privateLocations.length" class="location-section">
						<div class="flex items-center mb-6">
							<div class="w-1.5 h-8 bg-[#64ffda] rounded-full mr-3"></div>
							<h2 class="text-2xl font-bold text-white">Хусусий тиббиёт муассасалар</h2>
						</div>

						<!-- Dynamic grid based on number of items -->
						<div :class="['grid gap-6', privateLocationsGridClass]">
							<div
								v-for="location in privateLocations"
								:key="location.id"
								class="bg-[#112240] p-6 rounded-xl border border-[#1e3a56] shadow-lg hover:shadow-[#64ffda]/5 hover:border-[#64ffda]/30 transition-all duration-300"
								:class="{ 'md:col-span-2 lg:col-span-3': privateLocations.length === 1 }"
							>
								<h3 class="text-xl font-semibold mb-5 text-white border-b border-[#1e3a56] pb-3">
									{{ location.name }}
								</h3>

								<div class="space-y-4 mb-6">
									<div class="flex items-start">
										<div class="bg-[#0a192f] p-2 rounded-lg mr-3">
											<Icon name="mdi:account-tie" class="w-5 h-5 text-[#64ffda]" />
										</div>
										<div>
											<div class="text-sm text-[#8892b0] mb-1">Раҳбар</div>
											<div class="text-white">{{ location.manager }}</div>
										</div>
									</div>

									<div class="flex items-start">
										<div class="bg-[#0a192f] p-2 rounded-lg mr-3">
											<Icon name="mdi:account-school" class="w-5 h-5 text-[#64ffda]" />
										</div>
										<div>
											<div class="text-sm text-[#8892b0] mb-1">Ўқитувчи</div>
											<div class="text-white">{{ location.head_teacher }}</div>
										</div>
									</div>
								</div>

								<div class="flex flex-wrap gap-3">
									<NuxtLink
										:to="location.location_google"
										target="_blank"
										class="flex items-center bg-[#0a192f] hover:bg-[#172a46] px-3 py-2 rounded-lg text-[#64ffda] transition-all duration-300"
									>
										<Icon name="grommet-icons:map" class="w-5 h-5 mr-2" />
										<span>Google харитада кўриш</span>
									</NuxtLink>

									<NuxtLink
										:to="location.location_yandex"
										target="_blank"
										class="flex items-center bg-[#0a192f] hover:bg-[#172a46] px-3 py-2 rounded-lg text-[#64ffda] transition-all duration-300"
									>
										<Icon name="grommet-icons:map" class="w-5 h-5 mr-2" />
										<span>Yandex харитада кўриш</span>
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Not found state -->
			<div v-if="building === null" class="text-center py-16 bg-[#0a192f]/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#112240]">
				<Icon name="mdi:alert-circle-outline" class="w-16 h-16 text-[#64ffda] mx-auto mb-4" />
				<p class="text-[#8892b0] text-xl">Маълумот топилмади</p>
				<NuxtLink
					to="/faculties"
					class="inline-flex items-center text-[#64ffda] hover:text-white mt-6 transition-colors duration-300"
				>
					<Icon name="mdi:arrow-left" class="w-5 h-5 mr-2" />
					Барча факультетларга қайтиш
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
.location-section {
	animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>