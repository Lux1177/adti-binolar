<template>
	<div class="min-h-screen flex flex-col bg-[#020c1b] text-[#ccd6f6] transition-colors duration-300">
		<Navbar />

		<main class="flex-1 min-h-[calc(100vh-57px)]">
			<NuxtPage />
		</main>
	</div>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
	opacity: 0;
	transform: translateX(20px);
}

.page-leave-to {
	opacity: 0;
	transform: translateX(-20px);
}

/* Ensure animations respect user preferences */
@media (prefers-reduced-motion: reduce) {
	*,
	::before,
	::after {
		transition: none !important;
		animation: none !important;
	}
}
</style>
