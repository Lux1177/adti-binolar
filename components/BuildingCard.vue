<script setup lang="ts">
import type { BuildingInfo } from '~/types/building';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Skeleton from '~/components/ui/Skeleton.vue';

interface BuildingProps {
	building: BuildingInfo;
}

const props = defineProps<BuildingProps>();
const router = useRouter();

const isImgLoaded = ref(false);

const navigateToBuilding = () => {
	const card = document.getElementById(`card-${props.building.id}`);
	if (card) {
		card.style.transform = 'scale(1.05)';
		card.style.opacity = '0';
	}
	setTimeout(() => {
		router.push(`/building/${props.building.id}`);
	}, 50);
};
</script>

<template>
	<div class="building-card w-full animate-fade-in">
		<div
			@click="navigateToBuilding"
			:id="`card-${building.id}`"
			class="group cursor-pointer bg-[#091a2a] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-[#52e0c4] border border-[#1b2b3a]"
		>
			<!-- Используем переиспользуемый Skeleton-компонент -->
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
					quality="30"
					:src="building.images[0]"
					:alt="building.name"
					loading="lazy"
					@load="isImgLoaded = true"
					class="h-full w-full object-cover z-10 transition-opacity duration-500 ease-out brightness-110 contrast-110 group-hover:brightness-105"
					:class="{ 'opacity-0': !isImgLoaded, 'opacity-100': isImgLoaded }"
				/>

				<!-- Overlay -->
				<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20" />
			</div>

			<div class="p-3 sm:p-4 md:p-6">
				<h2 class="text-base sm:text-lg md:text-xl font-semibold text-[#ccd6f6] mb-2 line-clamp-2 bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent">
					{{ building.name }}
				</h2>
				<p class="text-sm sm:text-base text-[#a8b2d1] line-clamp-2">
					{{ building.description }}
				</p>
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

.animate-fade-in {
	animation: fadeIn 0.4s ease-out forwards;
}
</style>
