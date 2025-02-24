<template>
	<div ref="ScrollPosition" class="w-full">
		<!-- <div class="inset-0 -z-10 h-full w-full md:h-screen"> </div> -->
		<div class="relative flex w-full justify-center md:min-h-screen">
			<img src="/aboutusbg.jpg" alt="train" class="absolute h-full w-full object-cover" />
			<div class="absolute bottom-0 left-0 right-0 top-0 bg-[#09342b]/90"></div>
			<div
				class="z-10 box-border flex w-full max-w-[1200px] flex-col gap-10 px-4 pb-10 pt-20 max-sm:text-justify md:flex-row md:px-12"
			>
				<div class="flex flex-1 flex-col justify-around gap-4 text-slate-100">
					<div class="flex flex-col justify-center gap-4"
						><h1 class="font-mega text-4xl">Biz Kimiz?</h1>
						<p
							>Petrikor; avukatlar, stajyerler ve hukuk öğrencilerinden oluşan bir
							topluluktur. Farklı deneyimlere ve bakış açılarına sahip üyelerimiz,
							meslektaş dayanışması ve bilgi paylaşımı ilkeleri etrafında bir araya
							gelmiştir. Amacımız; hukuk alanında kariyerinin başındaki kişilere yol
							arkadaşlığı yapmak, mesleki karmaşıklık karşısında yalnız hissetmelerini
							önlemek ve onları daha güçlü bir geleceğe hazırlamaktır.
						</p></div
					>
					<!--ICONS---->
					<div class="flex items-center justify-center gap-20 p-5 text-center">
						<div class="flex h-24 flex-col items-center justify-between">
							<span>Sosyal Köprü</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path
										fill="#fff"
										d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l40 0 0 64L0 160 0 288c53 0 96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96s96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96l0-128-72 0 0-64 40 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM456 96l0 64-80 0 0-64 80 0zM328 96l0 64-80 0 0-64 80 0zM200 96l0 64-80 0 0-64 80 0z"
									/>
								</svg>
							</div>
						</div>
						<div class="flex h-24 flex-col items-center justify-between">
							<span>Fırsat Eşitliği</span>
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

					<div class="flex flex-col justify-center gap-4"
						><h1 class="font-mega text-4xl">Vizyonumuz</h1>
						<p
							>Vizyonumuz, hukuk öğrencileri ve yeni mezunların mesleki yolculuklarında
							karşılaştıkları belirsizlikleri aşmalarında, güvenilir ve ilham verici bir
							rehber olmaktır. Gelecekte; meslektaş dayanışmasının daha da güçlendiği ve
							genç hukukçuların potansiyellerini tam anlamıyla ortaya koyabildiği bir
							ekosistem yaratmayı hedefliyoruz. Bu vizyon doğrultusunda, yalnızca bireysel
							başarıyı değil, mesleki topluluğun kolektif gelişimini de önemsiyoruz.
						</p></div
					>
				</div>
				<div
					class="hidden min-h-[1em] w-0.5 self-stretch rounded bg-slate-100 md:block"
				></div>
				<div
					class="max-sm:text- flex flex-1 flex-col justify-around gap-4 text-slate-100"
				>
					<!--ICONS-->
					<div class="flex items-center justify-center gap-20 p-5 text-center">
						<div class="flex h-24 flex-col items-center justify-between">
							<span>Rehberlik</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path
										fill="#fff"
										d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z"
									/>
								</svg>
							</div>
						</div>
						<div class="flex h-24 flex-col items-center justify-between">
							<span>Güçlü Bağlantılar</span>
							<div class="w-14">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path
										fill="#fff"
										d="M248 106.6c18.9-9 32-28.3 32-50.6c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 22.3 13.1 41.6 32 50.6l0 98.8c-2.8 1.3-5.5 2.9-8 4.7l-80.1-45.8c1.6-20.8-8.6-41.6-27.9-52.8C57.2 96 23 105.2 7.5 132S1.2 193 28 208.5c1.3 .8 2.6 1.5 4 2.1l0 90.8c-1.3 .6-2.7 1.3-4 2.1C1.2 319-8 353.2 7.5 380S57.2 416 84 400.5c19.3-11.1 29.4-32 27.8-52.8l50.5-28.9c-11.5-11.2-19.9-25.6-23.8-41.7L88 306.1c-2.6-1.8-5.2-3.3-8-4.7l0-90.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-.1 1.4-.2 2.8-.2 4.3c0 22.3 13.1 41.6 32 50.6l0 98.8c-18.9 9-32 28.3-32 50.6c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.3-13.1-41.6-32-50.6l0-98.8c2.8-1.3 5.5-2.9 8-4.7l80.1 45.8c-1.6 20.8 8.6 41.6 27.8 52.8c26.8 15.5 61 6.3 76.5-20.5s6.3-61-20.5-76.5c-1.3-.8-2.7-1.5-4-2.1l0-90.8c1.4-.6 2.7-1.3 4-2.1c26.8-15.5 36-49.7 20.5-76.5S390.8 96 364 111.5c-19.3 11.1-29.4 32-27.8 52.8l-50.6 28.9c11.5 11.2 19.9 25.6 23.8 41.7L360 205.9c2.6 1.8 5.2 3.3 8 4.7l0 90.8c-2.8 1.3-5.5 2.9-8 4.6l-80.1-45.8c.1-1.4 .2-2.8 .2-4.3c0-22.3-13.1-41.6-32-50.6l0-98.8z"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div class="flex flex-col justify-center gap-4"
						><h1 class="font-mega text-4xl">Misyonumuz</h1>
						<p
							>Genç hukukçuların mesleğe adım attıkları ilk dönemde karşılaştıkları
							zorlukları hafifletmek ve onlara yön göstermek için somut çözümler
							sunuyoruz. Bilgi paylaşımı, deneyim aktarımı ve güçlü bir iletişim ağı
							oluşturarak katılımcıların mesleki ve kişisel gelişimlerine destek oluyoruz.
							Mentörlük programlarımız sayesinde, deneyimli profesyoneller ile genç
							meslektaşlar arasında köprü kuruyoruz. Sektör panellerimizle de güncel
							gelişmeleri katılımcılara aktarıyor, mesleğin farklı alanlarına dair
							farkındalık sağlıyoruz.
						</p></div
					>
					<!-- ICONS -->
					<div class="flex items-center justify-center gap-20 p-5 text-center">
						<div class="flex h-24 flex-col items-center justify-between">
							<span>Güncel Alanlar</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path
										fill="#fff"
										d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"
									/>
								</svg>
							</div>
						</div>
						<div class="flex h-24 flex-col items-center justify-between">
							<span>Meslekte Dayanışma</span>
							<div class="w-16">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
									<path
										fill="#fff"
										d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"
									/>
								</svg>
							</div> </div
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const ScrollPosition = ref()
defineExpose({ ScrollPosition })
</script>
