<template>
	<div
		:class="[
      'animate-pulse bg-[#1e2a38] rounded',
      circle ? 'rounded-full' : 'rounded-md',
      className,
    ]"
		:style="{ width, height }"
	/>
</template>

<script setup lang="ts">
defineProps<{
	width?: string
	height?: string
	circle?: boolean
	className?: string
}>()
</script>
