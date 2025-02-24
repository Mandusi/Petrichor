<template>
	<div v-if="announcement" class="p-5 md:p-10">
		<div
			class="flex flex-col items-center justify-center gap-9 rounded-3xl bg-white p-10"
		>
			<div class="w-full">
				<NuxtLink to="/">
					<div class="w-10">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								fill="#12664f"
								d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"
							/>
						</svg>
					</div>
				</NuxtLink>
			</div>
			<div>
				<h1 class="w-full max-w-[700px] font-mega text-3xl font-bold"
					>{{ announcement.title }}
				</h1>
				<div class="flex gap-6 text-slate-400">
					<span>{{ announcement.date }}</span>
					<span>{{ announcement.readTime }}</span>
				</div>
			</div>

			<div class="max-w-[700px] overflow-hidden rounded-2xl">
				<img :src="announcement.imagePath" alt="image" class="w-full" />
			</div>

			<div
				v-for="(text, index) in announcement.content"
				:key="index"
				class="w-full max-w-[700px] font-mega font-light"
				><p>
					{{ text }}
				</p>
			</div>
			<div
				v-if="announcement.filePath"
				class="flex w-full max-w-[700px] items-center justify-center gap-4 border-t-2 p-5"
			>
				<div class="w-8">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
						<path
							fill="#307473"
							d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"
						/>
					</svg>
				</div>
				<a :href="announcement.filePath" download="petrikor" class="font-bold"
					>Dosyayı İndir</a
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { announcements } from '~/data/db'
const route = useRoute()
const announcementId = computed(() => route.params.id)

const announcement = ref(
	announcements.find(el => el.id.toString() === announcementId.value),
)
</script>
