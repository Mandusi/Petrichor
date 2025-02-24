<template>
	<div
		ref="ScrollPosition"
		class="flex h-screen w-full flex-col items-end justify-between overflow-hidden pb-16 md:items-center"
	>
		<div class="absolute left-0 right-0 -z-10 overflow-hidden">
			<img
				src="/hill-3.png"
				alt="background"
				class="h-screen w-full min-w-fit translate-x-0 object-cover max-md:-translate-x-[30%] max-sm:-translate-x-[55%] md:translate-x-0"
			/>
		</div>

		<div class="flex w-full flex-col items-center justify-center gap-6">
			<Navbar
				@to-faq="emit('toFaq')"
				@to-news="emit('toNews')"
				@to-contact="emit('toContact')"
				@to-about-us="emit('toAboutUs')"
			/>
		</div>
		<div class="flex w-full max-w-[1200px] justify-start">
			<h1
				class="mb-10 w-full max-w-[800px] text-center font-mega text-5xl font-extrabold text-slate-100 sm:text-6xl md:mb-5 md:text-left md:text-7xl"
				>Petrikor ile Hukuk Dünyasında Zirveye Tırman!</h1
			>
		</div>
	</div>
</template>

<script setup lang="ts">
const ScrollPosition = ref()
defineExpose({ ScrollPosition })

const emit = defineEmits(['toFaq', 'toNews', 'toContact', 'toAboutUs'])
</script>
