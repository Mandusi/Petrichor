<template>
	<div ref="ScrollPosition" class="w-full">
		<div class="absolute -z-10 h-full w-full">
			<img src="/public/aboutusbg.jpg" alt="train" class="h-full w-full object-cover" />
		</div>
		<div class="flex w-full justify-center bg-[#09342b]/90 md:h-screen">
			<div class="flex w-full max-w-[1200px] flex-col gap-10 p-12 md:flex-row">
				<div class="flex flex-1 flex-col gap-4 text-slate-100">
					<div class="flex h-1/3 flex-col justify-center gap-4"
						><h1 class="font-mega text-4xl">Biz Kimiz?</h1>
						<p
							>Petrikor olarak, sosyal bağların dönüştürücü gücüne inanıyoruz. Bu
							yolculuğa bizimle çıkan herkesle birlikte, verimli, sürdürülebilir ve etkili
							olmayı hedefliyoruz. Amacımız yalnızca bilgi ve deneyim paylaşımını sağlamak
							değil; aynı zamanda bireyler arasında güçlü sosyal köprüler kurarak kolektif
							bir dönüşüm yaratmaktır.
						</p></div
					>
					<div class="flex h-1/3 items-center justify-center gap-20">
						<div class="flex flex-col items-center justify-center">
							<span>Key Word</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path
										fill="#fff"
										d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l40 0 0 64L0 160 0 288c53 0 96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96s96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96l0-128-72 0 0-64 40 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM456 96l0 64-80 0 0-64 80 0zM328 96l0 64-80 0 0-64 80 0zM200 96l0 64-80 0 0-64 80 0z"
									/>
								</svg>
							</div>
						</div>
						<div class="flex flex-col items-center justify-center">
							<span>Key Word</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
									<path
										fill="#fff"
										d="M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div class="flex h-1/3 flex-col justify-center gap-4"
						><h1 class="font-mega text-4xl">Vizyonumuz</h1>
						<p
							>Her büyük hedef, kararlılık ve emek gerektirir. Biliyoruz ki hiçbir çaba
							karşılıksız kalmaz. Bu yüzden, belirsizliklerle dolu günümüz dünyasında
							sorumluluk alarak harekete geçiyoruz. Geleceğin şekillenmesinde kritik rol
							oynayacak alanlara bugün bir tohum ekiyoruz. Umuyoruz ki bu tohumlar
							bilgiyle yeşerecek, deneyimle kök salacak ve hep birlikte daha aydınlık bir
							yarını inşa edeceğiz.
						</p></div
					>
				</div>
				<div
					class="hidden min-h-[1em] w-0.5 self-stretch rounded bg-slate-100 md:block"
				></div>
				<div class="flex flex-1 flex-col gap-4 text-slate-100">
					<div class="flex h-1/3 items-center justify-center gap-20">
						<div class="flex flex-col items-center justify-center">
							<span>Key Word</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path
										fill="#fff"
										d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z"
									/>
								</svg>
							</div>
						</div>
						<div class="flex flex-col items-center justify-center">
							<span>Key Word</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path
										fill="#fff"
										d="M248 106.6c18.9-9 32-28.3 32-50.6c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 22.3 13.1 41.6 32 50.6l0 98.8c-2.8 1.3-5.5 2.9-8 4.7l-80.1-45.8c1.6-20.8-8.6-41.6-27.9-52.8C57.2 96 23 105.2 7.5 132S1.2 193 28 208.5c1.3 .8 2.6 1.5 4 2.1l0 90.8c-1.3 .6-2.7 1.3-4 2.1C1.2 319-8 353.2 7.5 380S57.2 416 84 400.5c19.3-11.1 29.4-32 27.8-52.8l50.5-28.9c-11.5-11.2-19.9-25.6-23.8-41.7L88 306.1c-2.6-1.8-5.2-3.3-8-4.7l0-90.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-.1 1.4-.2 2.8-.2 4.3c0 22.3 13.1 41.6 32 50.6l0 98.8c-18.9 9-32 28.3-32 50.6c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.3-13.1-41.6-32-50.6l0-98.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-1.6 20.8 8.6 41.6 27.8 52.8c26.8 15.5 61 6.3 76.5-20.5s6.3-61-20.5-76.5c-1.3-.8-2.7-1.5-4-2.1l0-90.8c1.4-.6 2.7-1.3 4-2.1c26.8-15.5 36-49.7 20.5-76.5S390.8 96 364 111.5c-19.3 11.1-29.4 32-27.8 52.8l-50.6 28.9c11.5 11.2 19.9 25.6 23.8 41.7L360 205.9c2.6 1.8 5.2 3.3 8 4.7l0 90.8c-2.8 1.3-5.5 2.9-8 4.6l-80.1-45.8c.1-1.4 .2-2.8 .2-4.3c0-22.3-13.1-41.6-32-50.6l0-98.8z"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div class="flex h-1/3 flex-col justify-center gap-4"
						><h1 class="font-mega text-4xl">Hedeflerimiz</h1>
						<p
							>Mentörlük programlarımız ve sektör panellerimiz aracılığıyla
							katılımcılarımızın hem kişisel hem de profesyonel gelişimlerine katkı
							sağlıyoruz. Onları, geleceğe daha donanımlı bireyler olarak hazırlarken,
							toplumsal faydayı en üst düzeye çıkarmayı amaçlıyoruz. Bizim için başarı,
							sadece büyümek değil; anlamlı değerler yaratmak, insanlara dokunmak ve
							kalıcı bir etki bırakmaktır.
						</p></div
					>
					<!-- ICONS -->
					<div class="flex h-1/3 items-center justify-center gap-20">
						<div class="flex flex-col items-center justify-center">
							<span>Key Word</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
									<path
										fill="#fff"
										d="M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
									/>
								</svg>
							</div>
						</div>
						<div class="flex flex-col items-center justify-center">
							<span>Key Word</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
									<path
										fill="#fff"
										d="M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
									/>
								</svg>
							</div> </div
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const ScrollPosition = ref()
defineExpose({ ScrollPosition })
</script>
