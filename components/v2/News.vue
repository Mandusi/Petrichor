<template>
	<div
		ref="ScrollPosition"
		class="z-10 flex h-[400px] items-center justify-center bg-gray-100/50 px-5 md:p-10"
	>
		<div class="z-10 flex min-h-[480px] w-full flex-col gap-5 rounded-3xl bg-white p-10">
			<h1 class="text-center font-mega text-5xl font-semibold sm:text-left">Duyurular</h1>
			<div class="flex gap-10 overflow-x-auto">
				<template v-for="(announcement, index) in announcements" :key="index">
					<NuxtLink :to="`/news/${announcement.id}`">
						<NewsCard
							:title="announcement.title"
							:date="announcement.date"
							:image="announcement.imagePath"
						/>
					</NuxtLink>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { announcements } from '@/data/db'

const ScrollPosition = ref()
defineExpose({ ScrollPosition })
</script>
