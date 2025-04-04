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
	interval: 5000,
	showControls: true,
	showIndicators: true,
	showThumbnails: true,
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
		<div class="relative overflow-hidden" :style="{ height: height }">
			<div
				class="flex transition-transform duration-500 ease-in-out h-full"
				:style="{ transform: `translateX(-${currentIndex * 100}%)` }">
				<div v-for="(image, index) in images" :key="index" class="min-w-full h-full flex-shrink-0">
					<img :src="image" :alt="`Slide ${index + 1}`" class="w-full h-full object-cover" @load="handleImageLoad(index)" />
				</div>
			</div>

			<!-- Navigation arrows -->
			<button v-if="showControls" @click="prevSlide" class="absolute left-2 top-1/2 -translate-y-1/2">
				◀
			</button>
			<button v-if="showControls" @click="nextSlide" class="absolute right-2 top-1/2 -translate-y-1/2">
				▶
			</button>

			<!-- Auto-play indicator -->
			<div v-if="autoplay && showAutoplayIndicator" class="absolute top-2 right-2 bg-white p-1 rounded">
				{{ Math.round(remainingTime / 1000) }}s
			</div>
		</div>

		<!-- Thumbnails -->
		<div v-if="showThumbnails" class="flex justify-center mt-2 space-x-2">
			<button
				v-for="(image, index) in images"
				:key="index"
				@click="goToSlide(index)"
				:class="{'scale-110': currentIndex === index}"
			>
			<img :src="image" class="w-full h-full object-cover" />
			</button>
		</div>


	</div>
</template>

<style scoped>
button {
	transition: transform 0.2s ease-in-out;
}

button {
	@apply rounded overflow-hidden w-16 h-10 transition-transform duration-200;
}

button.scale-110 {
	transform: scale(1.10); /* Scaling to 110% */
}

img {
	box-shadow: none !important;
	background: transparent !important;
	border: none !important;
}
</style>
