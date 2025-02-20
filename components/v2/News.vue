<template>
	<div ref="ScrollPosition" class="h-[400px] bg-gray-100/50 p-5 md:p-10">
		<div
			class="flex h-[480px] -translate-y-[80px] flex-col gap-5 rounded-3xl bg-white p-10"
		>
			<h1 class="text-center font-mega text-5xl font-semibold sm:text-left">Duyurular</h1>
			<div class="flex gap-10 overflow-x-auto">
				<template v-for="(announcement, index) in news" :key="index">
					<NuxtLink to="/news/1">
						<NewsCard
							:title="announcement.title"
							:date="announcement.date"
							:image="announcement.image"
						/>
					</NuxtLink>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup>
const ScrollPosition = ref()
defineExpose({ ScrollPosition })

const news = [
	{
		id: 1,
		title: 'Hukukta Finans, İş Geliştirme ve Yöneticilik Üzerine Mentorluk!',
		date: '21 Ocak 2025',
		image: 'new-1.jpeg',
		content:
			'Kurucularımızdan Turan Uçar ve Fatih Aziz Ünal, Erciyes Üniversitesi Kaybimer tarafından desteklenen Mezun Kariyer Buluşmaları kapsamında, Erciyes Üniversitesi Hukuk Fakültesinde hukuk öğrencileriyle bir araya geldi. Etkinlikte, hukuk mesleği, mesleki beklentiler, yurtdışında yüksek lisans ve hukuk alanında akademik kariyer gibi konular ele alındı. Hukuk fakültesi öğrencilerinin kariyer planlamalarına yönelik önemli bilgiler paylaşılarak, mesleki gelişim ve uluslararası fırsatlar hakkında fikir alışverişinde bulunuldu. Öğrencilerin kariyer yolculuklarında karşılaşabilecekleri fırsatlar ve zorluklar üzerine yapılan samimi ve gerçekçi konuşmaların ardından, soru-cevap bölümüyle interaktif bir oturum gerçekleştirildi.',
	},
	{
		id: 2,
		title: 'Endüstriyel Emisyonların Yönetimi Yönetmeliği Yayınlandı!',
		date: '12 Şubat 2025',
		image: 'new-2.jpeg',
		content:
			'Kurucularımızdan Turan Uçar ve Fatih Aziz Ünal, Erciyes Üniversitesi Kaybimer tarafından desteklenen Mezun Kariyer Buluşmaları kapsamında, Erciyes Üniversitesi Hukuk Fakültesinde hukuk öğrencileriyle bir araya geldi. Etkinlikte, hukuk mesleği, mesleki beklentiler, yurtdışında yüksek lisans ve hukuk alanında akademik kariyer gibi konular ele alındı. Hukuk fakültesi öğrencilerinin kariyer planlamalarına yönelik önemli bilgiler paylaşılarak, mesleki gelişim ve uluslararası fırsatlar hakkında fikir alışverişinde bulunuldu. Öğrencilerin kariyer yolculuklarında karşılaşabilecekleri fırsatlar ve zorluklar üzerine yapılan samimi ve gerçekçi konuşmaların ardından, soru-cevap bölümüyle interaktif bir oturum gerçekleştirildi.',
	},
	{
		id: 3,
		title: 'Hukukta Finans, İş Geliştirme ve Yöneticilik Üzerine Mentorluk!',
		date: '21 Ocak 2025',
		content:
			'Kurucularımızdan Turan Uçar ve Fatih Aziz Ünal, Erciyes Üniversitesi Kaybimer tarafından desteklenen Mezun Kariyer Buluşmaları kapsamında, Erciyes Üniversitesi Hukuk Fakültesinde hukuk öğrencileriyle bir araya geldi. Etkinlikte, hukuk mesleği, mesleki beklentiler, yurtdışında yüksek lisans ve hukuk alanında akademik kariyer gibi konular ele alındı. Hukuk fakültesi öğrencilerinin kariyer planlamalarına yönelik önemli bilgiler paylaşılarak, mesleki gelişim ve uluslararası fırsatlar hakkında fikir alışverişinde bulunuldu. Öğrencilerin kariyer yolculuklarında karşılaşabilecekleri fırsatlar ve zorluklar üzerine yapılan samimi ve gerçekçi konuşmaların ardından, soru-cevap bölümüyle interaktif bir oturum gerçekleştirildi.',
	},
]
</script>
