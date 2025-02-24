<template>
	<div ref="ScrollPosition" class="p-5 md:p-10" @click="hideAnswer">
		<div
			class="flex flex-col items-center justify-center gap-10 rounded-3xl bg-white p-10 pt-20 transition-all duration-300"
		>
			<div class="max-w-[800px]">
				<h1
					class="image-text max-w-[800px] font-mega text-5xl font-extrabold md:text-center md:text-7xl"
					>SIKÇA SORULAN SORULAR</h1
				>
			</div>
			<div
				v-for="(faq, index) in faqs"
				:key="index"
				class="flex flex-col items-start md:flex-row md:justify-end md:gap-20"
			>
				<h1 class="text-3xl font-extrabold md:w-96 md:text-right"> {{ faq.category }}</h1>
				<div class="divide-y md:w-96">
					<div
						v-for="(item, id) in faq.questions"
						:key="id"
						class="accordion flex h-full flex-col"
						@click="showAnswer(item.question)"
					>
						<h3 class="cursor-pointer py-2 text-xl font-semibold"
							>{{ item.question }}
						</h3>

						<div
							class="flex h-0 overflow-hidden opacity-0 transition duration-1000 ease-in-out"
							:class="{
								'flex h-full !opacity-100': activeQuestion === item.question,
							}"
						>
							<span>
								{{ item.answer }}
							</span>
						</div>
					</div>
				</div>
			</div>
			<h3 class="max-w-[600px] text-center"
				>Bu liste, Petrikor'un sunduğu programlar ve yapısını temel alarak
				oluşturulmuştur. Eklemek veya detaylandırmak istediğiniz konular varsa mail
				adresimiz üzerinden bize ulaşabilirsiniz!
			</h3>
		</div>
	</div>
</template>

<script setup lang="ts">
import { faqs } from '~/data/faqs'

const activeQuestion = ref()
const ScrollPosition = ref()
defineExpose({ ScrollPosition })

function showAnswer(question: string) {
	activeQuestion.value = question
}

function hideAnswer(event: any) {
	if (event.target.nodeName !== 'H3') activeQuestion.value = null
}
</script>

<style scoped>
.image-text {
	background-image: url(https://static.vecteezy.com/system/resources/thumbnails/043/500/628/small_2x/green-leaves-pattern-background-natural-background-and-wallpaper-photo.jpg);
	background-size: cover;
	background-clip: text;
	color: transparent;
}
</style>
