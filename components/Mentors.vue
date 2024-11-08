<template>
	<div
		ref="ScrollPosition"
		class="mt-10 flex w-screen flex-col items-center justify-center gap-6 pt-10"
	>
		<h1 class="mt-5 max-w-[780px] text-center font-playfair text-6xl"
			>Mentorların Desteği ile Hukuk Dünyasında Zirveye Tırman</h1
		>
		<div class="flex flex-col">
			<div ref="Slider" class="flex items-end gap-5 duration-500">
				<MentorCard
					v-for="(mentor, index) in mentors"
					:key="index"
					:name="mentor.name"
					:title="mentor.title"
					:promotion="mentor.promotion"
					:profile-photo="mentor.profilePhoto"
					@to-contact="emit('toContact')"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
const ScrollPosition = ref()
defineExpose({ ScrollPosition })

const emit = defineEmits(['toContact'])

const mentors = [
	{
		name: 'Ayşe Yılmaz',
		title: 'Ceza Hukuku',
		profilePhoto: '1.jpg',
		promotion:
			'Ayşe Yılmaz, ceza hukuku alanında uzmanlaşmış bir avukattır. Müvekkillerine adil bir yargı süreci sağlamak için tecrübesini kullanır ve savunma stratejileri geliştirir.',
	},
	{
		name: 'Mehmet Kaya',
		title: 'Aile Hukuku',
		profilePhoto: '2.jpg',
		promotion:
			'Mehmet Kaya, aile hukuku konularında danışmanlık veren deneyimli bir avukattır. Boşanma, velayet ve miras konularında müvekkillerine hukuki destek sunar.',
	},
	{
		name: 'Zeynep Demir',
		title: 'Gayrimenkul Hukuku',
		profilePhoto: '3.jpg',
		promotion:
			'Zeynep Demir, gayrimenkul hukuku alanında uzmanlaşmış bir avukattır. Kiracı ve mal sahiplerine yasal danışmanlık sağlar ve mülk edinim süreçlerinde yardımcı olur.',
	},
	{
		name: 'Ahmet Aksoy',
		title: 'İş Hukuku',
		profilePhoto: '4.jpg',
		promotion:
			'Ahmet Aksoy, iş hukuku alanında uzman avukatlardan biridir. Çalışma ilişkileri, işçi hakları ve iş sözleşmeleri konularında geniş bir tecrübeye sahiptir.',
	},
	{
		name: 'Elif Yıldız',
		title: 'Fikri Mülkiyet Hukuku',
		profilePhoto: '5.jpg',
		promotion:
			'Elif Yıldız, fikri mülkiyet hukuku alanında uzmanlaşmış bir avukattır. Patent, ticari marka ve telif hakları konularında müvekkillerine danışmanlık sağlar.',
	},
	{
		name: 'Can Öztürk',
		title: 'Sigorta Hukuku',
		profilePhoto: '6.jpg',
		promotion:
			'Can Öztürk, sigorta hukuku konusunda deneyimli bir avukattır. Sigorta şirketleri ve sigortalılar arasında anlaşmazlık çıktığında arabuluculuk yapar ve hukuki çözümler sunar.',
	},
	{
		name: 'Pınar Toprak',
		title: 'Ulusal ve Uluslararası Ticaret Hukuku',
		profilePhoto: '5.jpg',
		promotion:
			'Pınar Toprak, ulusal ve uluslararası ticaret hukuku konusunda uzmanlaşmış bir avukattır. İhracat, ithalat ve dış ticaret sözleşmeleri konularında müvekkillerine destek verir.',
	},
	{
		name: 'Murat Demirci',
		title: 'Medeni Hukuk',
		profilePhoto: '6.jpg',
		promotion:
			'Murat Demirci, medeni hukuk alanında uzmanlaşmış bir avukattır. Boşanma, miras ve kişisel haklar gibi konularda müvekkillerine hukuki danışmanlık sağlar.',
	},
]
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
