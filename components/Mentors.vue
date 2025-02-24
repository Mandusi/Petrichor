<template>
	<div
		ref="ScrollPosition"
		class="mx-auto mt-10 flex w-screen max-w-[1200px] flex-col items-center justify-center gap-6 self-center pt-10"
	>
		<h1 class="mt-5 max-w-[780px] text-center font-playfair text-6xl"
			>Mentorların Desteği ile Hukuk Dünyasında Zirveye Tırman</h1
		>
		<div class="flex">
			<swiper-container
				class="max-w-[1200px]"
				slides-per-view="4"
				navigation="true"
				pagination="false"
				loop="true"
				auto-play="true"
			>
				<swiper-slide
					v-for="(mentor, index) in mentors"
					:key="index"
					class="flex items-end gap-5 duration-500"
				>
					<MentorCard
						:name="mentor.name"
						:title="mentor.title"
						:promotion="mentor.promotion"
						:profile-photo="mentor.profilePhoto"
						@to-contact="emit('toContact')"
					/>
				</swiper-slide>
			</swiper-container>
		</div>
	</div>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { mentors } from '~/data/mentors'

register()

const ScrollPosition = ref()
defineExpose({ ScrollPosition })

const emit = defineEmits(['toContact'])
</script>

<style scoped>
@keyframes slide {
	50% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
}
@keyframes slide-reverse {
	50% {
		transform: translateX(100%);
	}
	100% {
		transform: translateX(0);
	}
}

.animate-slide {
	animation: slide 60s infinite linear;
}
.animate-slide-reverse {
	animation: slide-reverse 60s infinite linear;
}
</style>
