<template>
	<div
		class="mt-10 hidden h-20 w-full max-w-[1200px] rounded-3xl backdrop-blur-3xl md:block md:flex"
	>
		<div class="flex w-full items-center justify-between px-10">
			<div class="flex items-center justify-center">
				<img src="/public/logo-white.png" alt="logo" class="w-12" />
				<!-- <span class="font-logo text-3xl font-extrabold text-slate-800">PETRİKOR</span> -->
			</div>

			<div class="flex items-center gap-8 font-bold text-slate-600">
				<button class="text-mainbg hover:text-slate-700" @click="emit('toAboutUs')"
					>HAKKIMIZDA</button
				>
				<button class="text-mainbg hover:text-slate-700" @click="emit('toNews')"
					>DUYURULAR</button
				>
				<button class="text-mainbg hover:text-slate-700" @click="emit('toFaq')"
					>SSS</button
				>
				<button class="text-mainbg hover:text-slate-700" @click="emit('toContact')"
					>İLETİŞİM</button
				>
			</div>

			<div class="font flex items-center p-2 px-5 font-bold text-mainbg">
				<span>Hemen Başvur</span>
			</div>
		</div>
	</div>
	<div class="w-full p-5 md:hidden"
		><img src="/public/logo-white.png" alt="logo" class="w-12"
	/></div>
</template>
<script setup>
const emit = defineEmits(['toFaq', 'toNews', 'toContact', 'toAboutUs'])
</script>
