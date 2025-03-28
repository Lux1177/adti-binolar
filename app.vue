<template>

	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>

</template>

<script setup lang="ts">
	onMounted(() => {
		initializeFavorites()
	})

</script>

<style>

.page-enter-active,
.page-leave-active {
	transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from {
	opacity: 0;
	transform: translateY(20px);
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

/* Ensure animations respect user preferences */
@media (prefers-reduced-motion: reduce) {
	*,
	::before,
	::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
</style>