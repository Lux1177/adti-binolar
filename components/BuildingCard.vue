<script setup lang="ts">
import type { BuildingInfo } from '~/types/building';
import { useRouter } from 'vue-router';

interface BuildingProps {
	building: BuildingInfo
}

const props = defineProps<BuildingProps>();
const router = useRouter();

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
			<!-- Auto-optimized image with blur placeholder -->
			<NuxtImg
				:src="building.images[0]"
				:alt="building.name"
				placeholder="blur"
				loading="lazy"
				class="h-36 sm:h-44 md:h-52 w-full object-cover transition duration-500 ease-in-out brightness-105 contrast-110"
			/>

			<!-- Text block -->
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
