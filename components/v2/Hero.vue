<template>
	<div
		ref="ScrollPosition"
		class="flex h-screen w-full flex-col items-center justify-between overflow-hidden pb-16"
	>
		<img
			src="/public/hill-3.png"
			alt="background"
			class="absolute -z-10 h-full w-full object-cover"
		/>
		<div class="flex w-full flex-col items-center justify-center gap-6">
			<V2Navbar
				@to-faq="emit('toFaq')"
				@to-news="emit('toNews')"
				@to-contact="emit('toContact')"
				@to-about-us="emit('toAboutUs')"
			/>
			<span
				class="font-italica text-shadow[text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] text-3xl text-white/80"
				>"büyüyen bilgi, yeşeren deneyim"</span
			>
		</div>
		<div class="flex w-full max-w-[1200px] justify-start">
			<h1
				class="mb-10 w-full max-w-[800px] text-center font-mega text-5xl font-extrabold text-slate-100 sm:text-6xl md:mb-5 md:text-left md:text-7xl"
				>Petrikor ile Hukuk Dünyasında Zirveye Tırman!</h1
			>
		</div>
	</div>
</template>

<script setup>
const ScrollPosition = ref()
defineExpose({ ScrollPosition })

const emit = defineEmits(['toFaq', 'toNews', 'toContact', 'toAboutUs'])
</script>
