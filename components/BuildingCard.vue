<script setup lang="ts">
import type { BuildingInfo} from '~/types/building';
import { useRouter } from 'vue-router';

interface BuildingProps {
	building: BuildingInfo
}

const props = defineProps<BuildingProps>();
const router = useRouter();
const cardElement = ref(null);

const navigateToBuilding = () => {
	if (cardElement.value) {
		const card = cardElement.value as HTMLElement;
		card.style.transform = 'scale(1.1)';
		card.style.opacity = '0';
	}
	setTimeout(() => {
		router.push(`/building/${props.building.id}`);
	}, 50);
};
</script>

<template>
	<div class="building-card w-full">
		<div
			@click="navigateToBuilding"
			class="cursor-pointer bg-[#091a2a] rounded-xl shadow-lg
			overflow-hidden transform transition-all duration-300 hover:scale-105
			hover:border-[#52e0c4] border border-[#1b2b3a]"
			ref="cardElement"
		>
			<div class="relative h-32 sm:h-40 md:h-48">
				<img
					:src="building.images[0]"
					:alt="building.name"
					class="w-full h-full object-cover"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-black/60
				to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
			</div>
			<div class="p-3 sm:p-4 md:p-6">
				<h2 class="text-base sm:text-lg md:text-xl font-semibold
				text-[#ccd6f6] mb-2 line-clamp-2 bg-gradient-to-r
				from-[#52e0c4] to-[#728098] bg-clip-text text-transparent">
					{{ building.name }}
				</h2>
				<div class="flex items-start text-[#a8b2d1] gap-1">
					<span class="text-sm sm:text-base line-clamp-2">{{ building.description }}</span>
				</div>
			</div>
		</div>
	</div>
</template>



<style scoped>
.building-card {
	perspective: 1000px;
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

.building-card {
	animation: fadeIn 0.5s ease-out forwards;
}
</style>
