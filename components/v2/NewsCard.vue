<template>
	<div
		class="flex h-[320px] w-[320px] min-w-[300px] flex-col justify-between gap-3 hover:cursor-pointer hover:opacity-80"
	>
		<div class="h-full overflow-hidden rounded-xl">
			<img :src="`${image}`" class="h-full w-full object-cover" />
		</div>

		<div>
			<span class="text-slate-500">{{ date }}</span>
			<h1 class="text-xl font-semibold">{{ title }}</h1>
		</div>
	</div>
</template>
+
<script setup>
defineProps({
	image: { type: String, required: true, default: 'logoPetrikor.png' },
	title: { type: String, required: true, default: 'Yeni Duyuru Buraya Gelecek' },
	date: { type: String, default: new Date().toLocaleDateString() },
})
</script>
