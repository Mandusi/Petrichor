<template>
	<div class="h-[220px] px-5 md:px-10">
		<div
			class="flex h-[240px] -translate-y-[20px] items-start justify-between rounded-t-3xl bg-[#09342b] p-10"
		>
			<div class="flex w-16 items-center justify-center">
				<img src="/logo-white.png" alt="logo" />
			</div>
			<div
				class="flex h-full flex-col items-start justify-around font-semibold text-slate-600 md:flex-row md:justify-start md:gap-16"
			>
				<button class="text-white hover:text-[#efd28d]" @click="emit('toHome')"
					>Anasayfa</button
				>
				<button class="text-white hover:text-[#efd28d]" @click="emit('toNews')"
					>Duyurular</button
				>
				<button class="text-white hover:text-[#efd28d]" @click="emit('toAboutUs')"
					>Hakkımızda</button
				>
				<button class="text-white hover:text-[#efd28d]" @click="emit('toFaq')"
					>SSS</button
				>
				<button class="text-white hover:text-[#efd28d]" @click="emit('toContact')"
					>İletişim</button
				>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const emit = defineEmits(['toFaq', 'toHome', 'toNews', 'toAboutUs', 'toContact'])
</script>
