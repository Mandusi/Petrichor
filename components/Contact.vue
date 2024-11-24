<template>
	<div
		ref="ScrollPosition"
		class="mx-auto my-5 w-full max-w-[1200px] bg-white/40 p-8 shadow-md"
	>
		<div class="flex w-full gap-8">
			<div class="w-3/5 border-r-2 px-8">
				<h2 class="mb-6 text-center text-7xl font-bold">İletişime Geç</h2>

				<p class="px-4 text-center text-lg text-gray-600"
					>Deneyimli mentorlarımızla iletişim kurarak kariyerinize yön verebilirsiniz.
					Sorularınızı sormaktan çekinmeyin; her adımda yanınızdayız ve size destek
					olmaktan mutluluk duyarız. Geleceğinizi şekillendirmek için ilk adımı atın!</p
				>
				<div class="flex items-center justify-around p-5">
					<div class="flex flex-col items-center justify-center">
						<a href="https://www.instagram.com">
							<img src="/public/insta-icon.png" class="w-20" alt="instagram" />
						</a>
					</div>
					<div class="flex flex-col items-center justify-center">
						<a href="https://www.linkedin.com" class="flex items-center justify-center">
							<img src="/public/linkedin-icon.png" class="w-20" alt="linkedin" />
							<span></span>
						</a>
					</div>
					<div class="flex flex-col items-center justify-center">
						<img src="/public/phone-icon.png" alt="phone" class="w-20" />
						<span></span>
					</div>
				</div>
			</div>

			<form id="contactForm" class="w-2/5" @submit.prevent="handleSubmit">
				<div class="mb-5">
					<label for="name" class="block text-sm font-medium text-gray-700"
						>İsim Soyisim</label
					>
					<input
						id="name"
						v-model="form.name"
						type="text"
						placeholder="Adınızı ve soyadınızı girin"
						required
						class="mt-1 block w-full border border-gray-300 bg-transparent p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
					<span v-if="errors.name" class="text-xs text-red-500">{{ errors.name }}</span>
				</div>

				<div class="mb-5">
					<label for="email" class="block text-sm font-medium text-gray-700"
						>Email Adresiniz</label
					>
					<input
						id="email"
						v-model="form.email"
						type="email"
						placeholder="örnek123@mail.com"
						required
						class="mt-1 block w-full border border-gray-300 bg-transparent p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
					/>
					<span v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</span>
				</div>

				<div class="mb-5">
					<label for="message" class="block text-sm font-medium text-gray-700"
						>Mesajınız</label
					>
					<textarea
						id="message"
						v-model="form.message"
						required
						placeholder="Bize kendinizden ve hedeflerinizden bahsedin."
						class="mt-1 block w-full border border-gray-300 bg-transparent p-4 focus:outline-none focus:ring-2 focus:ring-amber-700"
						rows="4"
					></textarea>
					<span v-if="errors.message" class="text-xs text-red-500">{{
						errors.message
					}}</span>
				</div>

				<button
					type="submit"
					class="w-full bg-amber-400 py-3 font-semibold transition duration-300 hover:bg-amber-800 hover:text-white"
				>
					Başvur
				</button>
			</form>
			<div v-if="successMessage" class="mt-4 text-center font-medium text-green-600">{{
				successMessage
			}}</div>
		</div>
	</div>
</template>

<script setup>
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig()

const ScrollPosition = ref()
defineExpose({ ScrollPosition })

const options = {
	publicKey: config.public.EMAIL_PUBLIC_KEY,
	blockHeadless: true,
	limitRate: { id: 'contact_form', throttle: 1000 },
}

emailjs.init(options)

const form = ref({
	name: '',
	email: '',
	message: '',
})

const errors = ref({})
const successMessage = ref('')

const validateForm = () => {
	errors.value = {}
	if (!form.value.name) {
		errors.value.name = 'Lütfen adınızı girin.'
	}
	if (!form.value.email) {
		errors.value.email = 'Lütfen email adresinizi girin.'
	} else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
		errors.value.email = 'Email geçerli değil.'
	}
	if (!form.value.message) {
		errors.value.message = 'Lütfe mesajınızı girin.'
	}
	return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
	if (validateForm()) {
		emailjs
			.send(config.public.EMAIL_SERVICE_ID, config.public.EMAIL_TEMPLATE_ID, form.value)
			.then(
				response => {
					console.log('SUCCESS!', response.status, response.text)
				},
				error => {
					console.log('FAILED...', error)
					successMessage.value = 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'
				},
			)
		successMessage.value = 'Teşekkürler! Mesajınız başarıyla gönderildi.'
		form.value = { name: '', email: '', message: '' } // Reset form
	}
}
</script>

<style scoped></style>
