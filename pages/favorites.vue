<template>
	<div class="container mx-auto px-4 py-12">
		<h1 class="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Севимлилар</h1>

		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center border border-gray-100 dark:border-gray-700">
			<Icon
				name="mdi:heart"
				class="w-16 h-16 mx-auto text-pink-500 dark:text-pink-400 mb-4 animate-pulse"
			/>
			<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Севимли кафедралар</h2>
			<p class="text-gray-600 dark:text-gray-300">
				Бу ерда сиз танлаган севимли кафедралар кўрсатилади.
				Кафедраларни кўриб чиқинг ва севимлиларга қўшинг!
			</p>
		</div>
	</div>
</template>

<style scoped>
@keyframes pulse {
	0%, 100% {
		opacity: 1;
		transform: scale(1);
	}
	50% {
		opacity: 0.7;
		transform: scale(1.05);
	}
}

.animate-pulse {
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>