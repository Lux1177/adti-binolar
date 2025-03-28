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
const carouselContainer = ref<HTMLElement | null>(null)
const autoplayInterval = ref<number | null>(null)
const touchStartX = ref(0)
const touchEndX = ref(0)
const loadedImages = ref<Set<number>>(new Set())
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
	currentIndex.value = index
	resetAutoplay()
}

// Touch handling for swipe gestures
const handleTouchStart = (e: TouchEvent) => {
	touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = (e: TouchEvent) => {
	touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
	const touchDiff = touchStartX.value - touchEndX.value

	// If the swipe is significant enough (more than 50px)
	if (Math.abs(touchDiff) > 50) {
		if (touchDiff > 0) {
			// Swipe left, go to next slide
			nextSlide()
		} else {
			// Swipe right, go to previous slide
			prevSlide()
		}
	}
}

// Autoplay functionality with countdown
const startAutoplay = () => {
	if (props.autoplay && props.images.length > 1 && autoplayInterval.value === null) {
		// Reset the remaining time when starting autoplay
		remainingTime.value = props.interval
		lastUpdateTime.value = Date.now()

		// Start the main autoplay interval
		autoplayInterval.value = window.setInterval(() => {
			nextSlide()
			remainingTime.value = props.interval
			lastUpdateTime.value = Date.now()
		}, props.interval)

		// Start a separate interval for updating the countdown timer
		if (props.showAutoplayIndicator) {
			const countdownInterval = window.setInterval(() => {
				if (autoplayInterval.value !== null) {
					const now = Date.now()
					const elapsed = now - lastUpdateTime.value
					remainingTime.value = Math.max(0, props.interval - elapsed)
				} else {
					clearInterval(countdownInterval)
				}
			}, 100) // Update every 100ms for smoother countdown
		}
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

// Lifecycle hooks
onMounted(() => {
	startAutoplay()
})

onUnmounted(() => {
	stopAutoplay()
})

// Watch for changes in props
watch(() => props.interval, (newInterval) => {
	resetAutoplay()
}, { immediate: true })

watch(() => props.autoplay, (newAutoplay) => {
	if (newAutoplay) {
		startAutoplay()
	} else {
		stopAutoplay()
	}
}, { immediate: true })

// Watch for changes in the images prop
watch(() => props.images, () => {
	// Reset current index if it's out of bounds
	if (currentIndex.value >= props.images.length) {
		currentIndex.value = 0
	}
	// Reset loaded images tracking
	loadedImages.value = new Set()
	resetAutoplay()
}, { deep: true })
</script>

<template>
	<div
		class="relative w-full"
		@mouseenter="pauseAutoplayOnHover ? stopAutoplay() : null"
		@mouseleave="pauseAutoplayOnHover ? startAutoplay() : null"
	>
		<!-- Main carousel container - removed any potential borders/margins -->
		<div class="relative overflow-hidden" :style="{ height: height }">
			<div
				ref="carouselContainer"
				class="flex transition-transform duration-500 ease-in-out h-full"
				:style="{ transform: `translateX(-${currentIndex * 100}%)` }"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@touchend="handleTouchEnd"
			>
				<div
					v-for="(image, index) in images"
					:key="index"
					class="min-w-full h-full flex-shrink-0"
				>
					<img
						:src="image"
						:alt="`Slide ${index + 1}`"
						class="w-full h-full object-cover"
						@load="handleImageLoad(index)"
					/>
				</div>
			</div>

			<!-- Navigation arrows -->
			<button
				v-if="showControls && images.length > 1"
				@click="prevSlide"
				class="absolute left-2 top-1/2 -translate-y-1/2 text-white p-1 focus:outline-none"
				aria-label="Previous slide"
			>
				<Icon name="heroicons:chevron-left-solid" class="h-8 w-8" />
			</button>

			<button
				v-if="showControls && images.length > 1"
				@click="nextSlide"
				class="absolute right-2 top-1/2 -translate-y-1/2 text-white p-1 focus:outline-none"
				aria-label="Next slide"
			>
				<Icon name="heroicons:chevron-right-solid" class="h-8 w-8" />
			</button>

			<!-- Auto-play indicator -->
			<div v-if="autoplay && showAutoplayIndicator" class="absolute top-2 right-2 flex items-center space-x-1 bg-white/70 text-black text-xs px-2 py-1 rounded-full">
				<Icon name="heroicons:clock" class="h-3 w-3" />
				<span>{{ Math.round(remainingTime / 1000) }}s</span>
			</div>
		</div>

		<!-- Thumbnail navigation - removed margin-top to eliminate gap -->
		<div
			v-if="showThumbnails && images.length > 1"
			class="flex justify-center space-x-2 overflow-x-auto pb-2 mt-2"
		>
			<button
				v-for="(image, index) in images"
				:key="index"
				@click="goToSlide(index)"
				class="flex-shrink-0 focus:outline-none transition-all duration-300 border-2 overflow-hidden"
				:class="index === currentIndex ? 'border-primary opacity-100 scale-105' : 'border-transparent opacity-70 hover:opacity-100'"
				:aria-label="`Go to slide ${index + 1}`"
				:aria-current="index === currentIndex ? 'true' : 'false'"
			>
				<img
					:src="image"
					:alt="`Thumbnail ${index + 1}`"
					class="h-16 w-24 object-cover"
				/>
			</button>
		</div>

		<!-- Indicators (dots) - only shown if thumbnails are disabled -->
		<div
			v-if="showIndicators && !showThumbnails && images.length > 1"
			class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"
		>
			<button
				v-for="(_, index) in images"
				:key="index"
				@click="goToSlide(index)"
				class="w-3 h-3 rounded-full focus:outline-none transition-colors"
				:class="index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'"
				:aria-label="`Go to slide ${index + 1}`"
			></button>
		</div>
	</div>
</template>

<style scoped>
/* Remove any potential borders, margins, or filters */
img {
	filter: none;
	border: none;
	display: block; /* Prevents any whitespace below images */
}

/* Ensure no gap between main image and thumbnails */
.relative > div:first-child {
	margin-bottom: 0;
}
</style>