<template>
	<div
		class="fixed top-0 z-50 flex h-16 w-full items-center justify-center bg-mainbg bg-opacity-70 px-20 hover:bg-opacity-95"
	>
		<div class="flex w-full max-w-[1200px] items-center justify-between">
			<div class="flex items-center justify-center">
				<img src="/public/logoPetrikor.png" alt="logo" class="w-12" />
				<!-- <span class="font-logo text-3xl font-extrabold text-slate-800">PETRİKOR</span> -->
			</div>

			<div class="flex items-center gap-8 font-bold text-slate-600">
				<button @click="emit('toHome')">ANASAYFA</button>
				<button @click="emit('toFaq')">HAKKIMIZDA</button>
				<button @click="emit('toMentors')">MENTORLER</button>
				<button @click="emit('toFaq')">SSS</button>
				<button @click="emit('toContact')">İLETİŞİM</button>
			</div>

			<div class="font flex items-center bg-amber-400 p-2 px-5 font-bold text-slate-900">
				<span>Hemen Başvur</span>
			</div>
		</div>
	</div>
</template>

<script setup>
const emit = defineEmits(['toFaq', 'toHome', 'toMentors', 'toContact'])
</script>

<style scoped></style>
