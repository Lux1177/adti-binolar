<script setup lang="ts">
import type { Building } from '~/types/building';
import { useRouter } from 'vue-router';
import { isFavorite, updateFavorites } from '@/composables/useFavorites';
import { ref, onMounted } from 'vue';

import Skeleton from '@/components/ui/Skeleton.vue';

const props = defineProps<{ building: Building }>();
const router = useRouter();

const isFav = ref(false);
const isImgLoaded = ref(false);
const cardRef = ref<HTMLElement | null>(null);

const toggleFavorite = (event: Event) => {
	event.stopPropagation();
	updateFavorites(props.building);
	isFav.value = isFavorite(props.building.id);
};

const navigate = () => {
	cardRef.value?.classList.add('animate-disappear');
	setTimeout(() => router.push(`/faculties/${props.building.id}`), 150);
};

onMounted(() => {
	isFav.value = isFavorite(props.building.id);
});
</script>

<template>
	<div class="relative animate-fade-in">
		<!-- Card -->
		<div
			@click="navigate"
			ref="cardRef"
			class="group cursor-pointer overflow-hidden rounded-xl border border-[#1b2b3a] bg-[#091a2a] transition-all duration-300 hover:scale-[1.03] hover:border-[#52e0c4] hover:shadow-lg hover:shadow-[#52e0c455] relative"
		>
			<!-- Favorite button - positioned inside card to scale with it -->
			<button
				@click="toggleFavorite"
				class="absolute right-3 top-3 z-30 bg-black/50 backdrop-blur-sm w-10 h-10 rounded-full hover:bg-black/70 active:scale-95 transition-all duration-200 hover:scale-110 group-hover:scale-110 border border-white/10 hover:border-red-500/30 flex items-center justify-center cursor-pointer"
				:class="{ 'bg-red-500/20 border-red-500/50': isFav }"
			>
				<Icon
					:name="isFav ? 'mdi:heart' : 'mdi:heart-outline'"
					class="w-5 h-5 transition-colors duration-200"
					:class="isFav ? 'text-red-500' : 'text-white hover:text-red-400'"
				/>
			</button>

			<!-- Location badge -->
			<div class="absolute left-3 top-3 z-20 bg-black/50 backdrop-blur-sm text-white border border-[#52e0c4]/50 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-glow hover:bg-black/70 transition-all duration-200">
				<Icon name="mdi:map-marker-multiple" class="text-[#52e0c4] w-4 h-4" />
				<span class="font-bold text-sm">{{ building.locations.length }}</span>
			</div>

			<!-- Image -->
			<div class="relative h-40 sm:h-48 md:h-56">
				<!-- Skeleton -->
				<Skeleton v-if="!isImgLoaded" className="absolute inset-0 z-0" />

				<!-- Blur-up image -->
				<NuxtImg
					quality="10"
					:src="building.images[0]"
					:alt="building.name"
					loading="lazy"
					@load="isImgLoaded = true"
					class="absolute inset-0 h-full w-full object-cover z-0 blur-xl scale-105 transition-opacity duration-300"
					:class="{ 'opacity-100': !isImgLoaded, 'opacity-0': isImgLoaded }"
				/>

				<!-- Full quality image -->
				<NuxtImg
					quality="50"
					:src="building.images[0]"
					:alt="building.name"
					loading="lazy"
					@load="isImgLoaded = true"
					class="h-full w-full object-cover z-10 transition-opacity duration-500 ease-out brightness-110 contrast-110 group-hover:brightness-105"
					:class="{ 'opacity-0': !isImgLoaded, 'opacity-100': isImgLoaded }"
				/>

				<!-- Overlay -->
				<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-15" />
			</div>

			<!-- Info -->
			<div class="p-4 space-y-2">
				<h2 v-if="isImgLoaded" class="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent line-clamp-2">
					{{ building.name }}
				</h2>
				<Skeleton v-else width="80%" height="1.2rem" />

				<div class="flex items-start gap-2 text-[#a8b2d1]">
					<Icon name="mdi:map-marker" class="w-5 h-5 mt-1 text-[#52e0c4] flex-shrink-0" />
					<span v-if="isImgLoaded" class="text-sm md:text-base line-clamp-2">
						{{ building.locations.map(l => l.name).join(', ') }}
					</span>
					<Skeleton v-else width="90%" height="1rem" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes fade-in {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes disappear {
	to {
		opacity: 0;
		transform: scale(1.05);
	}
}

.animate-fade-in {
	animation: fade-in 0.3s ease-out;
}

.animate-disappear {
	animation: disappear 0.2s ease-in forwards;
}

.shadow-glow {
	box-shadow: 0 0 10px rgba(82, 224, 196, 0.3);
}

/* Ensure proper line clamping */
.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>