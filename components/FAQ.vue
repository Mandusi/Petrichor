<template>
	<div class="flex w-full">
		<div v-for="(category, index) in faqs" :key="index" class="flex flex-col">
			<h1> {{ category.category }}</h1>
			<div v-for="item in category.questions" :key="item">
				<h3>{{ item.question }}</h3> <p>{{ item.answer }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
const faqs = [
	{
		category: 'Genel Sorular',
		questions: [
			{
				question: 'Mentorluk programının amacı nedir?',
				answer:
					'Mentorluk programının amacı, hukuk öğrencilerini deneyimli hukuk profesyonelleriyle buluşturarak eğitim ve kariyer yollarında rehberlik, destek ve pratik tavsiyeler sağlamaktır.',
			},
			{
				question: 'Mentorluk programına kimler katılabilir?',
				answer:
					'Program, çalışma alanı veya eğitim yılı fark etmeksizin tüm hukuk öğrencilerine açıktır. Mentorlar genellikle avukatlar, hakimler ve hukuk akademisyenleri gibi deneyimli hukuk profesyonelleridir.',
			},
			{
				question: 'Mentorluk programına nasıl kayıt olabilirim?',
				answer:
					'Kayıt olmak için web sitemizde bulunan başvuru formunu doldurmanız gerekmektedir. Başvurunuzu inceledikten sonra, ilgi alanlarınız ve hedefleriniz doğrultusunda size uygun bir mentorla eşleştirileceksiniz.',
			},
			{
				question: 'Mentorluk programına katılmanın bir maliyeti var mı?',
				answer:
					'Hayır, mentorluk programına katılmak tüm hukuk öğrencileri için ücretsizdir.',
			},
		],
	},
	{
		category: 'Mentor-Menti Eşleştirme',
		questions: [
			{
				question: 'Mentor ve mentiler nasıl eşleştiriliyor?',
				answer:
					'Eşleştirmeler, mentinin ilgi alanları, kariyer hedefleri ve mentorun uzmanlık ve deneyimlerine göre yapılmaktadır. Karşılıklı fayda sağlayacak eşleşmeler yapmaya çalışıyoruz.',
			},
			{
				question: 'Bir mentorla eşleşmek ne kadar sürer?',
				answer:
					'Eşleştirme süreci, mentorların uygunluğuna ve mentinin özel ihtiyaçlarına bağlı olarak birkaç hafta sürebilir.',
			},
			{
				question: 'Belirli bir mentoru talep edebilir miyim?',
				answer:
					'Belirli bir mentorla eşleştirileceğinizi garanti edemesek de, tercihlerinizi belirtebilirsiniz ve bu tercihleri karşılamak için elimizden geleni yaparız.',
			},
		],
	},
	{
		category: 'Mentorluk Programının Yapısı',
		questions: [
			{
				question: 'Mentorluk ilişkisi ne kadar sürer?',
				answer:
					'Mentorluk ilişkisi genellikle bir akademik yıl sürer, ancak mentor ve menti arasında karşılıklı anlaşma ile uzatılabilir.',
			},
			{
				question: 'Mentorlar ve mentiler ne sıklıkla görüşmeli?',
				answer:
					'Mentorlar ve mentilerin en az ayda bir görüşmelerini öneriyoruz, ancak sıklık, her iki tarafın ihtiyaç ve programlarına göre ayarlanabilir.',
			},
			{
				question: 'Mentoruma ne hakkında sorular sormalıyım?',
				answer:
					'Yaygın konular arasında kariyer tavsiyeleri, akademik rehberlik, ağ kurma stratejileri, iş-yaşam dengesi ve profesyonel gelişim bulunur. Mentorunuz ayrıca hukuk alanının belirli alanlarına dair bilgiler ve kişisel deneyimlerini paylaşabilir.',
			},
			{
				question: 'Mentorumla bir problem yaşarsam ne yapmalıyım?',
				answer:
					'Eğer mentorunuzla bir sorun yaşarsanız, lütfen mentorluk programı koordinatörü ile iletişime geçin. Her iki taraf için de olumlu bir deneyim sağlamak adına çatışmaları çözmeye yardımcı olmak için buradayız.',
			},
		],
	},
	{
		category: 'Faydalar ve Beklentiler',
		questions: [
			{
				question: 'Bir mentora sahip olmanın faydaları nelerdir?',
				answer:
					'Bir mentora sahip olmak, hukuk öğrencilerine değerli bilgiler, kişisel tavsiyeler ve eğitim ve kariyer yollarında destek sağlar. Mentorlar, öğrencilerin hedefler belirlemesine ve bu hedeflere ulaşmasına, profesyonel ağlarını genişletmesine ve yeteneklerine olan güvenlerini artırmasına yardımcı olabilir.',
			},
			{
				question: 'Mentilerden beklentiler nelerdir?',
				answer:
					'Mentilerin iletişimde proaktif olması, mentorlarının zamanına saygı göstermesi, geri bildirime açık olması ve kişisel ve profesyonel gelişimlerine bağlı olmaları beklenir.',
			},
			{
				question: 'Mentorlerden beklentiler nelerdir?',
				answer:
					'Mentorların rehberlik sağlamaları, bilgi ve deneyimlerini paylaşmaları, düzenli toplantılar için uygun olmaları ve mentinin büyüme ve gelişimini desteklemeleri beklenir.',
			},
		],
	},
	{
		category: 'Ek Destek',
		questions: [
			{
				question:
					'Mentorluk sürecinden en iyi şekilde yararlanabilmem için kaynaklar mevcut mu?',
				answer:
					'Evet, mentorluk kılavuzları, hedef belirleme şablonları ve hukuk öğrencileri ve hukuk profesyonelleri için ilgili konularda web seminerleri ve atölye çalışmaları gibi çeşitli kaynaklar sağlıyoruz.',
			},
			{
				question: 'Mentorluk programı hakkında geri bildirim nasıl verebilirim?',
				answer:
					'Geri bildiriminizi memnuniyetle karşılıyoruz! Web sitemiz üzerinden, e-posta ile veya düzenli anketlerimize katılarak geri bildirim sağlayabilirsiniz. Girdiğiniz bilgiler, gelecekteki katılımcılar için programı iyileştirmemize yardımcı olur.',
			},
		],
	},
]
</script>

<style scoped></style>
