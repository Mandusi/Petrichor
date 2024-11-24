<template>
	<div
		ref="ScrollPosition"
		class="mx-auto flex w-full max-w-[1200px] justify-center overflow-hidden"
	>
		<div class="w-full">
			<div
				class="flex max-w-[1200px] flex-col items-center justify-center overflow-hidden pt-20"
			>
				<div class="absolute top-48 flex items-center justify-center">
					<img src="/file.png" alt="" class="w-[650px]" />
				</div>
				<div class="absolute top-48 flex items-center justify-center">
					<p class="z-[-1] font-bodoni text-[400px] text-[#f3d8c786]">MENTOR</p>
				</div>
				<h1 class="z-10 mt-5 max-w-[780px] text-center font-playfair text-6xl"
					>Mentorların Desteği ile Hukuk Dünyasında Zirveye Tırman</h1
				>
			</div>

			<div class="ml-5 grid h-[600px] w-full grid-flow-row grid-cols-5 grid-rows-3 p-10">
				<div class="col-span-2 p-4">
					<div class="h-full w-full">
						<h1 class="font- p-6 text-center font-playfair text-2xl">Gelişim</h1>
						<div class="p-4">
							<img
								src="/public/arrow.png"
								alt="arrow"
								class="ml-auto w-40 rotate-[30deg]"
							/>
						</div>
					</div>
				</div>

				<div class="col-span-2 col-start-4 p-4">
					<div class="h-full w-full">
						<h1 class="p-6 text-center font-playfair text-2xl">Reheberlik</h1>
						<div class="p-5">
							<img
								src="/public/arrow.png"
								alt="arrow"
								class="w-40 rotate-[150deg] scale-y-[-1]"
							/>
						</div>
					</div>
				</div>

				<div class="col-span-2">
					<div class="flex h-full w-full items-center">
						<h1 class="p-5 font-playfair text-2xl">Yönlendirme</h1>
						<div>
							<img src="/public/arrow.png" alt="arrow" class="w-40 rotate-[-8deg]" />
						</div>
					</div>
				</div>

				<div class="col-span-2 col-start-4">
					<div class="flex h-full w-full items-center justify-end">
						<div>
							<img src="/public/arrow.png" alt="arrow" class="w-40 rotate-[-188deg]" />
						</div>
						<h1 class="p-5 font-playfair text-2xl">Tecrübe</h1>
					</div>
				</div>

				<div class="col-span-2 p-4">
					<div class="flex h-full w-full justify-end">
						<h1 class="self-center p-5 font-playfair text-2xl">Destek</h1>
						<div>
							<img src="/public/arrow.png" alt="arrow" class="w-40 rotate-[-30deg]" />
						</div>
					</div>
				</div>

				<div class="col-span-2 col-start-4 p-4">
					<div class="flex h-full w-full">
						<div>
							<img
								src="/public/arrow.png"
								alt="arrow"
								class="w-40 rotate-[-150deg] scale-y-[-1]"
							/>
						</div>
						<h1 class="self-center p-5 font-playfair text-2xl">Bağlantı</h1>
					</div>
				</div>
			</div>

			<!-- <div>
				<div class="ml-auto mr-0 w-96 pt-36 text-right">
					<p
						>Yağmur sonrası toprağın taze kokusu olan petrikor, doğanın yeniden doğuşunu
						ve yenilenmeyi simgeler.</p
					>
				</div>
				<div class="flex w-[350px] flex-col items-center gap-32 pt-32 text-justify">
					<p>
						Amacımız, genç hukukçuların bilgi ve deneyimle beslenip, tıpkı yağmurun
						toprağa can verdiği gibi, geleceğin adalet savunucularını yetiştirmektir.
					</p>
					<img src="/hammer.png" class="w-36" />
				</div>
			</div> -->
		</div>
	</div>
</template>

<script setup>
const ScrollPosition = ref()

defineExpose({ ScrollPosition })
</script>
