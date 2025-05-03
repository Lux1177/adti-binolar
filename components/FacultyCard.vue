<script setup lang="ts">
import type { Building } from '~/types/building';
import { useRouter } from 'vue-router';
import { isFavorite, updateFavorites } from '@/composables/useFavorites'
import { ref, onMounted, type Ref } from 'vue';

interface BuildingProps {
	building: Building
}

const props = defineProps<BuildingProps>();
const router = useRouter();
const cardElement = ref(null);
const isFav: Ref<boolean> = ref(false);
const changeIsFav = () => {
	updateFavorites(props.building)
	isFav.value = isFavorite(props.building.id);
}

const navigateToBuilding = () => {
	if (cardElement.value) {
		const card = cardElement.value as HTMLElement;
		card.style.transform = 'scale(1.1)';
		card.style.opacity = '0';
	}
	setTimeout(() => {
		router.push(`/faculties/${props.building.id}`);
	}, 50);
};

onMounted(() => {
	isFav.value = isFavorite(props.building.id);
})
</script>

<template>
	<div class="building-card relative">
		<!-- Like button in top-right -->
		<div @click="changeIsFav" class="absolute right-2 top-2 z-50 bg-black/30 rounded-lg px-1 py-0.5 hover:scale-110 transition">
			<Icon :name="isFav ? 'mdi:heart' : 'mdi:heart-outline'" class="w-9 h-9 text-red-500"/>
		</div>

		<!-- Location count badge in top-left -->
		<div class="location-badge absolute left-2 top-2 z-50 bg-black/70 backdrop-blur-md rounded-lg flex items-center gap-1.5 shadow-glow transform transition-all duration-300 hover:scale-105 border border-[#52e0c4]/50 px-2.5 py-1.5">
			<Icon name="mdi:map-marker-multiple" class="w-5 h-5 text-[#52e0c4]" />
			<span class="text-base font-bold text-white">{{ building.locations.length }}</span>
		</div>

		<div
			@click="navigateToBuilding"
			class="cursor-pointer bg-[#091a2a] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-[#52e0c4] border border-[#1b2b3a]"
			ref="cardElement"
		>
			<div class="relative h-32 sm:h-40 md:h-48">
				<img
					:src="building.images[0]"
					:alt="building.name"
					class="w-full h-full object-cover"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
			</div>
			<div class="p-3 sm:p-4 md:p-6">
				<h2 class="text-base sm:text-lg md:text-xl font-semibold text-[#ccd6f6] mb-2 line-clamp-2 bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent">
					{{ building.name }}
				</h2>
				<div class="flex items-start text-[#a8b2d1] gap-1">
					<Icon name="mdi:map-marker" class="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 mt-1 flex-shrink-0 text-[#52e0c4]" />
					<span class="text-sm sm:text-base line-clamp-2">
						<span v-for="location in building.locations">{{ location.name }}<span v-if="location.id != building.locations.length">, </span>
						</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
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

.building-card {
	animation: fadeIn 0.3s ease-out forwards;
}

.shadow-glow {
	box-shadow: 0 0 10px rgba(82, 224, 196, 0.2);
}

.location-badge {
	animation: fadeIn 0.5s ease-out 0.2s backwards;
}
</style>