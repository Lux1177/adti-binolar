<script setup lang="ts">
import {faculties} from "~/data/facultiesData";
</script>

<template>
	<div class="container mx-auto px-4 py-12">
		<h1 class="text-4xl font-bold mb-8 bg-gradient-to-r from-[#52e0c4] to-[#728098] bg-clip-text text-transparent">
			Кафедралар
		</h1>

		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
			<FacultyCard
				v-for="building in faculties"
				:key="building.id"
				:building="building"
				type="faculties"
			/>
		</div>
	</div>
</template>
