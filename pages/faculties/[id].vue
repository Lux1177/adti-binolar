<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getFacultyById } from '~/composables/useBuildings';

const route = useRoute();

const building = computed(() => {
	const id = parseInt(route.params.id as string);
	return getFacultyById(id);
});

const privateLocations = computed(() =>
	building.value?.locations.filter(loc => loc.type === 'private') || []
);

const stateLocations = computed(() =>
	building.value?.locations.filter(loc => loc.type === 'state') || []
);
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
						:src="building.images[0]"
						:alt="building.name"
						class="w-full h-full object-cover"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
					<div class="absolute bottom-0 left-0 right-0 p-6">
						<h1 class="text-4xl font-bold text-white mb-2 drop-shadow-lg">
							{{ building.name }}
						</h1>
					</div>
				</div>

				<div class="p-8 space-y-10">

					<!-- Государственные -->
					<div v-if="stateLocations.length">
						<h2 class="text-2xl font-bold mb-4 text-[#52e0c4]">Давлат тиббиёт муассасалари</h2>
						<div class="grid gap-8">
							<div
								v-for="location in stateLocations"
								:key="location.id"
								class="bg-[#0f2a3e] p-6 rounded-xl border border-[#1e3a56]"
							>
								<h3 class="text-xl font-semibold mb-4 text-white">{{ location.name }}</h3>

								<div class="flex items-start mb-2">
									<Icon name="mdi:account-tie" class="w-6 h-6 mr-2 text-[#52e0c4]" />
									<span class="text-lg">{{ location.manager }}</span>
								</div>

								<div class="flex items-start mb-4">
									<Icon name="mdi:account-school" class="w-6 h-6 mr-2 text-[#52e0c4]" />
									<span class="text-lg">{{ location.head_teacher }}</span>
								</div>

								<div class="flex flex-col gap-2">
									<NuxtLink
										:to="location.location_google"
										target="_blank"
										class="inline-flex items-center text-[#52e0c4] hover:text-[#b0c7e6] transition-colors"
									>
										<Icon name="grommet-icons:map" class="w-5 h-5 mr-2" />
										Google харитада кўриш
									</NuxtLink>
									<NuxtLink
										:to="location.location_yandex"
										target="_blank"
										class="inline-flex items-center text-[#52e0c4] hover:text-[#b0c7e6] transition-colors"
									>
										<Icon name="grommet-icons:map" class="w-5 h-5 mr-2" />
										Yandex харитада кўриш
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
					<!-- Частные -->
					<div v-if="privateLocations.length">
						<h2 class="text-2xl font-bold mb-4 text-[#52e0c4]">Хусусий тиббиёт муассасалар</h2>
						<div class="grid gap-8">
							<div
								v-for="location in privateLocations"
								:key="location.id"
								class="bg-[#0f2a3e] p-6 rounded-xl border border-[#1e3a56]"
							>
								<h3 class="text-xl font-semibold mb-4 text-white">{{ location.name }}</h3>

								<div class="flex items-start mb-2">
									<Icon name="mdi:account-tie" class="w-6 h-6 mr-2 text-[#52e0c4]" />
									<span class="text-lg">{{ location.manager }}</span>
								</div>

								<div class="flex items-start mb-4">
									<Icon name="mdi:account-school" class="w-6 h-6 mr-2 text-[#52e0c4]" />
									<span class="text-lg">{{ location.head_teacher }}</span>
								</div>

								<div class="flex flex-col gap-2">
									<NuxtLink
										:to="location.location_google"
										target="_blank"
										class="inline-flex items-center text-[#52e0c4] hover:text-[#b0c7e6] transition-colors"
									>
										<Icon name="grommet-icons:map" class="w-5 h-5 mr-2" />
										Google харитада кўриш
									</NuxtLink>
									<NuxtLink
										:to="location.location_yandex"
										target="_blank"
										class="inline-flex items-center text-[#52e0c4] hover:text-[#b0c7e6] transition-colors"
									>
										<Icon name="grommet-icons:map" class="w-5 h-5 mr-2" />
										Yandex харитада кўриш
									</NuxtLink>
								</div>
							</div>
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
