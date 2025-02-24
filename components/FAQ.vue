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
const activeQuestion = ref()
const ScrollPosition = ref()
defineExpose({ ScrollPosition })

function showAnswer(question: string) {
	activeQuestion.value = question
}

function hideAnswer(event: any) {
	if (event.target.nodeName !== 'H3') activeQuestion.value = null
}

const faqs = [
	{
		category: 'Genel Sorular',
		questions: [
			{
				question: 'Petrikor nedir ve ne yapar?',
				answer:
					'Petrikor, sosyal bağların gücüne inanan ve katılımcılarıyla birlikte verimli, sürdürülebilir ve etkili olmayı hedefleyen bir topluluktur. Mentörlük programları ve sektör panelleriyle bilgi ve deneyim paylaşımı sağlarken, aynı zamanda bireyler arasında sosyal köprüler kurarak toplumsal etki yaratmayı amaçlıyoruz. ',
			},
			{
				question: 'Petrikor’a kimler katılabilir?',
				answer:
					'Mentörlük programlarımız ve etkinliklerimiz, kariyerini geliştirmek isteyen öğrencilere, genç profesyonellere ve belirli alanlarda derinleşmek isteyen bireylere açıktır. ',
			},
			{
				question: 'Petrikor’un sunduğu programlar nelerdir?',
				answer:
					'Petrikor, mentörlük programları, sektör panelleri, hukuk ve girişimcilik alanındaki etkinlikler ve profesyonel gelişim atölyeleri sunmaktadır. ',
			},
			{
				question: 'Petrikor’a nasıl üye olabilirim?',
				answer:
					'Üyelik için resmi web sitemiz veya sosyal medya hesaplarımız üzerinden duyurulan başvuru süreçlerini takip edebilirsiniz.',
			},
		],
	},
	{
		category: 'Mentörlük Programı Hakkında',
		questions: [
			{
				question: 'Mentörlük programı nedir?',
				answer:
					'Mentörlük programımız, belirli alanlarda uzmanlaşmış mentörler ile katılımcıları bir araya getirerek birebir veya grup görüşmeleri aracılığıyla bilgi ve deneyim aktarımını sağlar. ',
			},
			{
				question: 'Programa nasıl başvurabilirim?',
				answer:
					'Başvuru süreci sosyal medya hesaplarımız ve web sitemiz üzerinden duyurulmaktadır. Başvurular genellikle kısa bir motivasyon yazısı ve temel bilgileri içeren bir form aracılığıyla alınır. ',
			},
			{
				question: 'Mentörlük programına katılmak ücretli mi?',
				answer:
					'Programlarımızın çoğu ücretsizdir. Ancak bazı özel eğitimler ve etkinlikler için küçük bir katılım ücreti alınabilir. ',
			},
			{
				question: 'Program süreci nasıl işliyor?',
				answer:
					'Program, bir oryantasyon haftası ile başlar. Ardından, her hafta belirlenen gruplar halinde uzman mentörlerle online veya yüz yüze oturumlar gerçekleştirilir.',
			},
		],
	},
	{
		category: 'Etkinlikler ve Paneller',
		questions: [
			{
				question: 'Petrikor etkinliklerine nasıl katılabilirim?',
				answer:
					'Sosyal medya hesaplarımızdan ve web sitemizden etkinlik duyurularımızı takip ederek katılım sağlayabilirsiniz.  ',
			},
			{
				question: 'Etkinlikler yüz yüze mi yoksa online mı gerçekleşiyor?',
				answer:
					'Etkinliklerimizin çoğu online olarak düzenlenmektedir. Ancak bazı paneller ve network buluşmaları fiziksel olarak gerçekleştirilmektedir.',
			},
			{
				question: 'Etkinliklere katılmak için herhangi bir ön koşul var mı?',
				answer:
					'Genellikle etkinliklerimiz herkese açık olmakla birlikte, bazı paneller ve atölyeler için önceden kayıt yaptırmak gerekebilir.  s',
			},
		],
	},
	{
		category: 'Networking ve Ofis Buluşmaları',
		questions: [
			{
				question: 'Ofis buluşmaları nedir?',
				answer:
					'Her hafta farklı bir hukuk ofisinde düzenlenen etkinliklerdir. Katılımcılar, ofis çalışanlarıyla tanışarak sektörü daha yakından tanıma fırsatı bulurlar. ',
			},
			{
				question: 'Ofis ziyaretlerine nasıl katılabilirim?',
				answer:
					'Ofis ziyaretleri için kayıt yaptırmanız gerekmektedir. Kontenjanlar sınırlı olduğundan erken başvuru önerilir. ',
			},
		],
	},
]
</script>

<style scoped>
.image-text {
	background-image: url(https://static.vecteezy.com/system/resources/thumbnails/043/500/628/small_2x/green-leaves-pattern-background-natural-background-and-wallpaper-photo.jpg);
	background-size: cover;
	background-clip: text;
	color: transparent;
}
</style>
