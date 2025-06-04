<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'

interface Props {
	images: string[]
	autoplay?: boolean
	interval?: number
	showControls?: boolean
	showIndicators?: boolean
	showThumbnails?: boolean
	pauseAutoplayOnHover?: boolean
	showAutoplayIndicator?: boolean
	height?: string
}

const props = withDefaults(defineProps<Props>(), {
	autoplay: true,
	interval: 3000,
	showControls: true,
	showIndicators: true,
	showThumbnails: false,
	pauseAutoplayOnHover: true,
	showAutoplayIndicator: false,
	height: 'auto'
})

const currentIndex = ref(0)
const autoplayInterval = ref<number | null>(null)
const loadedImages = ref(new Set<number>())
const allImagesLoaded = computed(() => loadedImages.value.size === props.images.length)
const remainingTime = ref(props.interval)
const lastUpdateTime = ref(Date.now())

// Handle image loading
const handleImageLoad = (index: number) => {
	loadedImages.value.add(index)
}

// Navigation methods
const nextSlide = () => {
	currentIndex.value = (currentIndex.value + 1) % props.images.length
	resetAutoplay()
}

const prevSlide = () => {
	currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
	resetAutoplay()
}

const goToSlide = (index: number) => {
	currentIndex.value = Math.max(0, Math.min(index, props.images.length - 1))
	resetAutoplay()
}

// Autoplay functionality
const startAutoplay = () => {
	if (props.autoplay && props.images.length > 1) {
		stopAutoplay()
		autoplayInterval.value = window.setInterval(nextSlide, props.interval)
	}
}

const stopAutoplay = () => {
	if (autoplayInterval.value !== null) {
		clearInterval(autoplayInterval.value)
		autoplayInterval.value = null
	}
}

const resetAutoplay = () => {
	stopAutoplay()
	startAutoplay()
}

// Pause/resume autoplay on hover
const pauseAutoplay = () => {
	if (props.pauseAutoplayOnHover) stopAutoplay()
}

const resumeAutoplay = () => {
	if (props.pauseAutoplayOnHover) startAutoplay()
}

onMounted(() => startAutoplay())
onUnmounted(() => stopAutoplay())

watch(() => props.interval, resetAutoplay)
watch(() => props.autoplay, (newAutoplay) => {
	newAutoplay ? startAutoplay() : stopAutoplay()
})
watch(() => props.images, resetAutoplay, { deep: true })
</script>

<template>
	<div class="relative w-full" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
		<div class="relative overflow-hidden rounded-lg" :style="{ height }">
			<!-- Slides -->
			<div
				class="flex transition-transform duration-500 ease-in-out h-full"
				:style="{ transform: `translateX(-${currentIndex * 100}%)` }"
			>
				<div v-for="(image, index) in images" :key="index" class="min-w-full h-full flex-shrink-0">
					<NuxtImg
						:src="image"
						:alt="`Slide ${index + 1}`"
						class="w-full h-full object-cover"
						@load="handleImageLoad(index)"
					/>
				</div>
			</div>

			<!-- Navigation arrows -->
			<button
				v-if="showControls"
				@click="prevSlide"
				class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 transition-all duration-200 focus:outline-none"
				aria-label="Previous slide"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-800">
					<path d="m15 18-6-6 6-6"></path>
				</svg>
			</button>

			<button
				v-if="showControls"
				@click="nextSlide"
				class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 transition-all duration-200 focus:outline-none"
				aria-label="Next slide"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-800">
					<path d="m9 18 6-6-6-6"></path>
				</svg>
			</button>

			<!-- Auto-play indicator -->
			<div
				v-if="autoplay && showAutoplayIndicator"
				class="absolute top-3 right-3 bg-white/70 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full"
			>
				{{ Math.round(remainingTime / 1000) }}s
			</div>

			<!-- Dot indicators positioned at the bottom of the image in a horizontal line -->
			<div
				v-if="showIndicators"
				class="absolute bottom-6 left-0 right-0 flex justify-center items-center"
			>
				<div class="px-3 py-1.5 rounded-full bg-black/15 backdrop-blur-sm inline-flex items-center">
					<div class="flex gap-2 items-center">
						<button
							v-for="(_, index) in images"
							:key="index"
							@click="goToSlide(index)"
							class="dot-indicator transition-all duration-300 ease-out rounded-full focus:outline-none"
							:class="index === currentIndex ? 'active-dot bg-white' : 'bg-white/50 hover:bg-white/70'"
							:aria-label="`Go to slide ${index + 1}`"
							:aria-current="index === currentIndex ? 'true' : 'false'"
						></button>
					</div>
				</div>
			</div>
		</div>

		<!-- Thumbnails (kept but hidden by default) -->
		<div
			v-if="showThumbnails"
			class="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2"
		>
			<button
				v-for="(image, index) in images"
				:key="index"
				@click="goToSlide(index)"
				class="rounded-md overflow-hidden w-16 h-10 transition-all duration-200 focus:outline-none"
				:class="{ 'ring-2 ring-gray-800 scale-105': index === currentIndex }"
				:aria-label="`Go to slide ${index + 1}`"
				:aria-current="index === currentIndex ? 'true' : 'false'"
			>
				<img :src="image" class="w-full h-full object-cover" alt="" />
			</button>
		</div>
	</div>
</template>

<style scoped>
button {
	transition: all 0.2s ease-in-out;
}

button:focus-visible {
	outline: 2px solid #4f46e5;
	outline-offset: 2px;
}

img {
	box-shadow: none !important;
	background: transparent !important;
	border: none !important;
}

.dot-indicator {
	width: 8px;
	height: 8px;
	transform-origin: center;
}

.active-dot {
	width: 12px;
	height: 12px;
	transform: scale(1);
	animation: pulse 2s infinite;
}

@keyframes pulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
}
</style>
